import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'History', path: '/history' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    
      
        
          
            
            
              Your Lodge Name
              A.F. & A.M.
            
          

          {/* Mobile Menu Button */}
          
            {isMenuOpen ?  : }
          

          {/* Desktop Navigation */}
          
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary transition duration-300"
                }
              >
                {link.name}
              
            ))}
          
        

        {/* Mobile Menu */}
        {isMenuOpen && (
          
            
              {navLinks.map((link) => (
                
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "block text-primary font-medium"
                        : "block text-gray-600 hover:text-primary transition duration-300"
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  
                
              ))}
            
          
        )}
      
    
  );
};

export default Header;