// middleware/auth.js
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../models/User');

/**
 * Middleware to protect routes that require authentication
 * Verifies JWT token and attaches user to the request object
 */
exports.protect = async (req, res, next) => {
  try {
    let token;
    
    // 1) Get token from authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.jwt) {
      // Check for token in cookies for browser clients
      token = req.cookies.jwt;
    }

    // 2) Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to access this resource'
      });
    }

    // 3) Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 4) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: 'The user belonging to this token no longer exists'
      });
    }

    // 5) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({
        success: false,
        message: 'User recently changed password! Please log in again'
      });
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.name === 'JsonWebTokenError' ? 'Invalid token. Please log in again.' 
        : error.name === 'TokenExpiredError' ? 'Your token has expired! Please log in again.' 
        : 'Authentication error'
    });
  }
};

/**
 * Middleware to restrict access to certain roles
 * @param  {...String} roles - Array of roles allowed to access the route
 */
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles is an array ['admin', 'editor']
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to perform this action'
      });
    }
    next();
  };
};

/**
 * Utility function to create and send JWT token
 * @param {Object} user - User object 
 * @param {Number} statusCode - HTTP status code
 * @param {Object} res - Express response object
 */
exports.createSendToken = (user, statusCode, res) => {
  // Create token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  // Remove password from output
  user.password = undefined;

  // Set cookie options
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Cookie cannot be accessed or modified in the browser
    secure: process.env.NODE_ENV === 'production' // Cookie will only be sent on HTTPS in production
  };

  // Send cookie
  res.cookie('jwt', token, cookieOptions);

  // Send response
  res.status(statusCode).json({
    success: true,
    token,
    data: {
      user
    }
  });
};

/**
 * Check if user is logged in but don't restrict access
 * Useful for conditionally showing content based on auth status
 */
exports.isLoggedIn = async (req, res, next) => {
  try {
    let token;
    
    // 1) Get token from cookies
    if (req.cookies && req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    // 2) If no token, user is not logged in
    if (!token) {
      return next();
    }

    // 3) Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 4) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next();
    }

    // 5) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next();
    }

    // There is a logged in user
    // Make user accessible to templates
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  } catch (error) {
    // If there's an error, user is not logged in
    next();
  }
};