import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage || '/images/default-header.jpg'})`,
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/70 to-navy-900"></div>
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      
      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-900 to-transparent"></div>
      
      {/* Decorative Technical Elements */}
      <div className="absolute bottom-0 left-0 h-16 w-16 border-l-2 border-b-2 border-blue-500/20"></div>
      <div className="absolute top-0 right-0 h-16 w-16 border-r-2 border-t-2 border-blue-500/20"></div>
    </div>
  );
};

export default PageHeader;