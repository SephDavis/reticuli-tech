import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Unity', path: '/unity' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Scan line animation
  const ScanLine = () => (
    <motion.div
      className="absolute inset-x-0 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent h-px"
      animate={{
        top: ["0%", "100%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800/50 shadow-lg shadow-black/30' 
          : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 relative">
          {/* Tech animation effects */}
          <ScanLine />
          
          {/* Tech line decorations */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            {/* Logo animation effect */}
            <motion.div 
              className="absolute -inset-2 bg-gray-900/0 rounded-lg group-hover:bg-gray-900/20 transition-all duration-300"
              whileHover={{ 
                boxShadow: "0 0 20px 0 rgba(75,85,99,0.2)"
              }}
            />
            
            {/* Logo with silver/gray effect */}
            <div className="relative">
              <img 
                src="/images/reticuli-logo.png" 
                alt="Reticuli Technologies" 
                className="h-12 md:h-12 filter brightness-125 contrast-125"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Subtle tech border effect on hover */}
            <motion.div 
              className="absolute -inset-1 border border-gray-500/0 rounded-md"
              whileHover={{ 
                borderColor: 'rgba(107,114,128,0.2)' 
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-gray-200 bg-gray-800/80'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-900/60'
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {link.name}
                
                {/* Animated underline effect */}
                {isActive(link.path) && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                    initial={{ scaleX: 0.3, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover glow effect */}
                {hoverIndex === index && !isActive(link.path) && (
                  <motion.div 
                    className="absolute inset-0 border border-gray-700/50 rounded-md pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="relative ml-4 px-5 py-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-200 text-sm font-medium rounded-md transition-colors duration-300 flex items-center group overflow-hidden border border-gray-700/50"
            >
              <span className="z-10 flex items-center">
                Request Demo
                <ChevronRight 
                  size={16} 
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                />
              </span>
              
              {/* Button animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/30 to-gray-600/0"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-200 focus:outline-none relative overflow-hidden group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="relative z-10">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
            
            {/* Button hover effect */}
            <motion.div 
              className="absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/80 transition-colors duration-300 rounded-md"
              whileHover={{
                boxShadow: "0 0 10px 0 rgba(75,85,99,0.2)"
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-3 rounded-md transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-gray-200 bg-gray-800/80'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="relative z-10">
                      {link.name}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive(link.path) && (
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-500/50 via-gray-400 to-gray-500/50 rounded-r"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="relative mt-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-200 font-medium rounded-md transition-all duration-300 text-center group overflow-hidden border border-gray-700/50"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Request Demo
                    <ChevronRight 
                      size={16} 
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </span>
                  
                  {/* Button animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/30 to-gray-600/0"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;