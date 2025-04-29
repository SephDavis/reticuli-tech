import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    
      
        
          {/* Lodge Info */}
          
            Your Lodge Name
            A.F. & A.M.
            
              
              123 Main Street, Your Town, ST 12345
            
            
              
              (123) 456-7890
            
            
              
              info@yourlodge.org
            
          
          
          {/* Quick Links */}
          
            Quick Links
            
              
                Home
              
              
                About
              
              
                History
              
              
                Calendar
              
              
                Contact
              
            
          
          
          {/* Connect */}
          
            Connect With Us
            Follow us on social media to stay updated with lodge news and events.
            
              
                
              
              
                
              
              
                
              
            
          
        
        
        
          &copy; {currentYear} Your Lodge Name. All rights reserved.
        
      
    
  );
};

export default Footer;