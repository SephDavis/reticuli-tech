// config/db.js
const mongoose = require('mongoose');

/**
 * Connect to MongoDB
 * Handles connection error, success logging, and disconnection events
 * @returns {Promise} Mongoose connection
 */
const connectDB = async () => {
  try {
    // Connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true, // Build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4 // Use IPv4, skip trying IPv6
    };

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, options);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    
    // Handle connection events
    mongoose.connection.on('error', err => {
      console.error(`MongoDB connection error: ${err}`.red.bold);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected'.yellow.bold);
    });
    
    // Handle process termination and close MongoDB connection properly
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed due to app termination'.yellow.bold);
      process.exit(0);
    });

    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;