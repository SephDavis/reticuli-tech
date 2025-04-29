import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Cpu, 
  AlertTriangle, 
  ChevronRight, 
  Network, 
  Database,
  Hexagon,
  Code,
  Zap,
  Search,
  Server
} from 'lucide-react';

// Import the canvas-based particle background
import ParticleBackground from './ParticleBackground';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Staggered animation sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  // Scan line animation
  const scanLineVariants = {
    initial: { y: 0 },
    animate: {
      y: '100%',
      transition: { 
        repeat: Infinity, 
        duration: 3, 
        ease: "linear" 
      }
    }
  };

  // Tech grid lines
  const TechGrid = () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute w-full h-full grid grid-cols-8 gap-px opacity-5">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-r border-silver-300 h-full"></div>
        ))}
      </div>
      <div className="absolute w-full h-full grid grid-rows-8 gap-px opacity-5">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-b border-silver-300 w-full"></div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Initial loading sequence */}
      <AnimatePresence>
        {!loaded && (
          <motion.div 
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
            exit={{ 
              opacity: 0,
              y: -20,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="text-4xl text-silver-400 font-bold flex items-center space-x-2">
                <Hexagon className="text-silver-400" size={36} />
                <span>RETICULI</span>
              </div>
            </motion.div>
            <motion.div 
              className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-silver-600 to-silver-300"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div 
              className="mt-4 text-silver-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              System initializing...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Use the canvas particle background component */}
        <ParticleBackground />
        <TechGrid />
        
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-silver-400/5 to-transparent h-32 w-full"
            variants={scanLineVariants}
            initial="initial"
            animate="animate"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-black/60 via-black/80 to-black/95"></div>
        
        <div className="container mx-auto px-4 z-20 relative py-24">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block mb-8 p-1 border border-silver-700/30 rounded-full"
            >
              <div className="text-xs uppercase tracking-widest text-silver-400 bg-black/80 px-4 py-1 rounded-full">
                Advanced Defense Technologies
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-silver-100 leading-tight mb-6 glitch-text"
            >
              <span className="relative inline-block">
                <span className="text-silver-300 mr-2">RETICULI</span>
                <span className="relative">
                  TECHNOLOGIES
                  <span className="absolute -inset-1 bg-silver-400/10 blur-sm -z-10"></span>
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-silver-400 mb-10"
            >
              Advanced defense technology solutions for emerging security challenges
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-silver-700 to-silver-900 hover:from-silver-600 hover:to-silver-800 text-white font-bold rounded-md flex items-center justify-center shadow-lg shadow-silver-900/20 border border-silver-600/20 group transition-all duration-300"
              >
                <span className="mr-2">
                  <Code size={18} className="text-silver-300 group-hover:text-white transition-colors duration-300" />
                </span>
                Our Solutions
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border border-silver-700/30 hover:border-silver-500/60 hover:bg-silver-900/20 text-silver-300 hover:text-silver-100 font-medium rounded-md transition-all duration-300 flex items-center group"
              >
                Request Demo 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-silver-900/10 to-transparent"></div>
        <div className="absolute bottom-10 left-10">
          <motion.div 
            className="flex space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-silver-500 opacity-75"
              >
                <motion.div 
                  className="w-full h-full bg-silver-300 rounded-full"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <TechGrid />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(192,192,192,0.08) 0%, rgba(0,0,0,0) 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <div className="inline-block p-px bg-gradient-to-r from-silver-700/40 via-silver-400/40 to-silver-700/40 rounded-md">
                  <div className="px-4 py-1 bg-gray-900 rounded-md text-sm text-silver-400 uppercase tracking-wider">
                    Strategic Capabilities
                  </div>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-silver-100 mb-6 relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our <span className="text-silver-400">Focus Areas</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-silver-500/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.h2>
              
              <motion.p 
                className="text-xl text-silver-500 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Developing innovative solutions to address defense security challenges
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <CapabilityItem 
                icon={<AlertTriangle size={32} />}
                title="Threat Intelligence"
                description="OSINT-based threat intelligence platform for defense contractors and enterprise security teams"
                emphasis="Priority 1"
              />
              <CapabilityItem 
                icon={<Cpu size={32} />}
                title="Neuromorphic Computing"
                description="Next-generation computing architectures optimized for defense applications"
                emphasis="Priority 2"
              />
              <CapabilityItem 
                icon={<Lock size={32} />}
                title="Post-Quantum Security"
                description="BlackLock encryption standard leveraging RLWR for post-quantum security"
                emphasis="Priority 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Use the canvas particle background component */}
        <ParticleBackground />
        
        {/* Tech elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-silver-700/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-silver-700/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-px bg-gradient-to-r from-silver-700/40 via-silver-400/40 to-silver-700/40 rounded-md mb-6">
                <div className="px-4 py-1 bg-black rounded-md text-sm text-silver-400 uppercase tracking-wider">
                  Core Platform
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-silver-100 mb-6 relative inline-block">
                <span className="text-silver-400">OSINT</span> Threat Intelligence
                <span className="absolute -bottom-2 left-0 w-3/4 h-px bg-gradient-to-r from-silver-500/50 to-transparent"></span>
              </h2>
              
              <p className="text-silver-400 mb-6 text-lg">
                Our highest priority platform provides summarized vulnerability intelligence via subscription. Designed for cybersecurity firms, defense contractors, and enterprises needing actionable threat data in real-time.
              </p>
              
              <p className="text-silver-500 mb-8">
                The platform combines automated data collection with custom analytics to deliver insights that help organizations stay ahead of emerging threats.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="border border-silver-700/20 bg-gray-900/50 p-5 rounded-lg group hover:bg-gray-900/80 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px 0 rgba(192,192,192,0.1)"
                  }}
                >
                  <div className="text-silver-300 text-2xl font-bold mb-1">Multi-source</div>
                  <div className="text-silver-500 text-sm">Intelligence gathering</div>
                  <motion.div 
                    className="absolute inset-0 border border-silver-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.2)", "0 0 0px 0px rgba(192,192,192,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div 
                  className="border border-silver-700/20 bg-gray-900/50 p-5 rounded-lg group hover:bg-gray-900/80 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px 0 rgba(192,192,192,0.1)"
                  }}
                >
                  <div className="text-silver-300 text-2xl font-bold mb-1">Automated</div>
                  <div className="text-silver-500 text-sm">Analysis & reporting</div>
                  <motion.div 
                    className="absolute inset-0 border border-silver-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.2)", "0 0 0px 0px rgba(192,192,192,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="border border-silver-700/20 bg-gray-900/50 p-5 rounded-lg group hover:bg-gray-900/80 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px 0 rgba(192,192,192,0.1)"
                  }}
                >
                  <div className="text-silver-300 text-2xl font-bold mb-1">Custom</div>
                  <div className="text-silver-500 text-sm">OSINT integrations</div>
                  <motion.div 
                    className="absolute inset-0 border border-silver-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.2)", "0 0 0px 0px rgba(192,192,192,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="border border-silver-700/20 bg-gray-900/50 p-5 rounded-lg group hover:bg-gray-900/80 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px 0 rgba(192,192,192,0.1)"
                  }}
                >
                  <div className="text-silver-300 text-2xl font-bold mb-1">Executive</div>
                  <div className="text-silver-500 text-sm">Dashboard & reporting</div>
                  <motion.div 
                    className="absolute inset-0 border border-silver-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.2)", "0 0 0px 0px rgba(192,192,192,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                </motion.div>
              </div>

              <Link 
                to="/capabilities/tiaas" 
                className="inline-flex items-center text-silver-400 font-medium hover:text-silver-200 transition-colors group"
              >
                Learn more about our platform 
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative h-96 md:h-[480px] lg:h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Terminal-like background */}
                <div className="absolute inset-0 border border-silver-700/30 rounded-xl overflow-hidden bg-gray-950">
                  
                  {/* Simulated terminal header */}
                  <div className="border-b border-silver-700/20 p-3 flex items-center justify-between bg-gray-900">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    </div>
                    <div className="text-xs text-silver-500">RETICULI THREAT INTELLIGENCE</div>
                    <div className="flex items-center space-x-2">
                      <Search size={14} className="text-silver-500" />
                      <Server size={14} className="text-silver-500" />
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                    {/* Terminal content */}
                    <div className="absolute inset-0 p-6 overflow-hidden">
                      {/* Simulated terminal output */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col items-start justify-start text-left"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          className="text-silver-500 mb-2 text-sm font-mono"
                        >
                          &gt; Initializing threat scan...
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          className="text-silver-500 mb-2 text-sm font-mono"
                        >
                          &gt; Compiling OSINT data sources...
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.7 }}
                          className="text-silver-500 mb-2 text-sm font-mono"
                        >
                          &gt; Analyzing threat patterns...
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 2.2 }}
                          className="text-silver-300 mb-2 text-sm font-mono"
                        >
                          &gt; <span className="text-silver-300 animate-pulse">▊</span>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <div className="mb-6 p-4 bg-silver-800/10 rounded-full border border-silver-500/20">
                      <AlertTriangle className="w-16 h-16 text-silver-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-silver-200 mb-2">Threat Intelligence Platform</h3>
                    <p className="text-silver-400 mb-6">Real-time security insights for defense contractors</p>
                    
                    <div className="flex space-x-4">
                      <Link 
                        to="/capabilities/tiaas" 
                        className="px-4 py-2 bg-gradient-to-r from-silver-800 to-silver-900 hover:from-silver-700 hover:to-silver-800 text-white rounded-md text-sm shadow-lg shadow-black/30 border border-silver-700/20 transition-colors duration-300"
                      >
                        Platform Details
                      </Link>
                      <Link 
                        to="/contact" 
                        className="px-4 py-2 bg-transparent border border-silver-700/30 hover:border-silver-500 text-silver-400 hover:bg-silver-900/20 hover:text-silver-200 rounded-md text-sm transition-all duration-300"
                      >
                        Request Demo
                      </Link>
                    </div>
                  </div>
                  
                  {/* Scanner animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-silver-400/5 to-transparent h-20"
                    animate={{
                      top: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Code blocks in background */}
                  <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute top-20 left-5 text-xs text-silver-500 font-mono">
                      {`function scanThreats() {`}<br />
                      {`  const sources = getOSINTSources();`}<br />
                      {`  const data = sources.map(collectData);`}<br />
                      {`  return analyzePatterns(data);`}<br />
                      {`}`}
                    </div>
                    <div className="absolute bottom-20 right-5 text-xs text-silver-500 font-mono">
                      {`class ThreatDetector {`}<br />
                      {`  constructor(config) {`}<br />
                      {`    this.sensitivity = config.level;`}<br />
                      {`    this.sources = config.sources;`}<br />
                      {`  }`}<br />
                      {`}`}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative tech elements */}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-32 border-r-2 border-t-2 border-silver-600/20 -mr-4 -mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 5px 1px rgba(192,192,192,0.3)", "0 0 0px 0px rgba(192,192,192,0)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 w-16 h-32 border-l-2 border-b-2 border-silver-600/20 -ml-4 -mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 5px 1px rgba(192,192,192,0.3)", "0 0 0px 0px rgba(192,192,192,0)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Research */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <TechGrid />
        
        {/* Moving tech elements background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-silver-500/30 to-transparent"
              style={{
                left: 0,
                right: 0,
                top: `${20 + i * 15}%`,
                opacity: 0.6 - i * 0.1,
              }}
              animate={{
                left: ["-100%", "100%"],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
          
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-silver-500/20 to-transparent"
              style={{
                left: 0,
                right: 0,
                top: `${50 + i * 10}%`,
                opacity: 0.5 - i * 0.1,
              }}
              animate={{
                left: ["100%", "-100%"],
              }}
              transition={{
                duration: 20 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 3,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-block p-px bg-gradient-to-r from-silver-700/40 via-silver-400/40 to-silver-700/40 rounded-md">
                <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-silver-400 uppercase tracking-wider">
                  Innovation Pipeline
                </div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-silver-100 mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Advanced <span className="text-silver-400">Research</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-silver-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-xl text-silver-500 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our innovative technologies in development
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchCard 
              icon={<Cpu size={24} />}
              title="Neuromorphic XDR"
              description="AI-driven extended detection & response platform optimized for neuromorphic chips, offering superior speed and efficiency."
              status="Development"
              linkTo="/capabilities/xdr"
            />
            <ResearchCard 
              icon={<Lock size={24} />}
              title="BlackLock Encryption"
              description="Post-quantum encryption technology leveraging RLWR to provide industry-leading security for sensitive communications."
              status="Research"
              linkTo="/capabilities/blacklock"
            />
            <ResearchCard 
              icon={<Network size={24} />}
              title="Neuromorphic Computing"
              description="Specialized infrastructure for neuromorphic processors, enabling ultra-efficient AI workloads for defense applications."
              status="Planning"
              linkTo="/roadmap"
            />
          </div>
        </div>
      </section>

      {/* Federal Focus */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Use the canvas particle background component */}
        <ParticleBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <div className="inline-block p-px bg-gradient-to-r from-silver-700/40 via-silver-400/40 to-silver-700/40 rounded-md mb-4">
                <div className="px-4 py-1 bg-black rounded-md text-sm text-silver-400 uppercase tracking-wider">
                  Strategic Focus
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-silver-100 mb-4">
                Defense <span className="text-silver-400">Partnerships</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-silver-700/10 p-8 rounded-lg relative group"
                whileHover={{ 
                  boxShadow: "0 0 30px 0 rgba(192,192,192,0.1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-silver-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <motion.div 
                  className="absolute inset-0 border border-silver-400/0 rounded-lg group-hover:border-silver-400/20 transition-all duration-500"
                  animate={{ 
                    boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.1)", "0 0 0px 0px rgba(192,192,192,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <h3 className="text-2xl font-bold text-silver-100 mb-4 relative">
                  Defense <span className="text-silver-400">Contracting</span>
                  <span className="absolute -bottom-2 left-0 w-16 h-px bg-silver-500/40"></span>
                </h3>
                
                <p className="text-silver-400 mb-6">
                  We're targeting OTA and SBIR opportunities for non-dilutive funding and establishing a strong presence in the defense technology ecosystem.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-silver-400 bg-silver-900/30 p-1.5 rounded-md">
                      <Shield size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-silver-200">CMMC Compliance</h5>
                      <p className="text-silver-500 text-sm">Gap assessment and compliance assistance for defense contractors</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-silver-400 bg-silver-900/30 p-1.5 rounded-md">
                      <Database size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-silver-200">Targeted Prototypes</h5>
                      <p className="text-silver-500 text-sm">Solutions designed for specific defense requirements</p>
                    </div>
                  </li>
                </ul>
                
                {/* Tech decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-silver-500/20"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-silver-500/20"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-silver-700/10 p-8 rounded-lg relative group"
                whileHover={{ 
                  boxShadow: "0 0 30px 0 rgba(192,192,192,0.1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-silver-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <motion.div 
                  className="absolute inset-0 border border-silver-400/0 rounded-lg group-hover:border-silver-400/20 transition-all duration-500"
                  animate={{ 
                    boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.1)", "0 0 0px 0px rgba(192,192,192,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                
                <h3 className="text-2xl font-bold text-silver-100 mb-4 relative">
                  Technology <span className="text-silver-400">Roadmap</span>
                  <span className="absolute -bottom-2 left-0 w-16 h-px bg-silver-500/40"></span>
                </h3>
                
                <p className="text-silver-400 mb-6">
                  Our strategic development plan focuses on creating innovative technologies that address critical defense and security challenges.
                </p>
                
                <ul className="space-y-3">
                  <li className="pb-3 border-b border-silver-700/20">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-silver-200">OSINT Platform</span>
                      <span className="text-silver-400 text-sm">Q1-Q2 2025</span>
                    </div>
                    <p className="text-silver-500 text-sm">Initial release of our threat intelligence platform</p>
                  </li>
                  <li className="pb-3 border-b border-silver-700/20">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-silver-200">Neuromorphic XDR</span>
                      <span className="text-silver-400 text-sm">Q3 2025</span>
                    </div>
                    <p className="text-silver-500 text-sm">Alpha release for partner testing</p>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-silver-200">BlackLock Encryption</span>
                      <span className="text-silver-400 text-sm">Q4 2025</span>
                    </div>
                    <p className="text-silver-500 text-sm">Prototype validation with select partners</p>
                  </li>
                </ul>
                <Link 
                  to="/roadmap" 
                  className="mt-6 inline-flex items-center text-silver-400 hover:text-silver-200 text-sm font-medium transition-colors group"
                >
                  View complete roadmap 
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                {/* Tech decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-silver-500/20"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-silver-500/20"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-silver-900/20 via-silver-800/10 to-silver-900/20"></div>
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-silver-500/5 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-b border-silver-500/5 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-silver-400/10 to-transparent h-32"
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center p-10 border border-silver-700/20 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/80 relative overflow-hidden shadow-2xl">
              {/* Tech decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-silver-500/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-silver-500/40 to-transparent"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-silver-500/30"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-silver-500/30"></div>
              
              <motion.div 
                className="mb-6 p-3 bg-silver-900/20 inline-block rounded-full border border-silver-700/30"
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 20px 5px rgba(192,192,192,0.15)", "0 0 0px 0px rgba(192,192,192,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap size={30} className="text-silver-300" />
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-silver-100 mb-6">
                Ready to discuss your <span className="text-silver-400">defense technology</span> needs?
              </h2>
              
              <p className="text-xl text-silver-400 mb-8">
                Contact our team to explore how Reticuli Technologies can support your requirements.
              </p>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-silver-700 to-silver-900 hover:from-silver-600 hover:to-silver-800 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-silver-900/20 group border border-silver-600/30"
              >
                Schedule a Consultation
                <motion.div
                  className="ml-2"
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Capability item component
const CapabilityItem = ({ icon, title, description, emphasis }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-silver-700/20 p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(192,192,192,0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-silver-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-silver-400/0 rounded-lg group-hover:border-silver-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.1)", "0 0 0px 0px rgba(192,192,192,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="text-silver-400 mb-4 p-3 bg-silver-900/20 inline-block rounded-full border border-silver-700/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-silver-100 mb-2 group-hover:text-silver-50 transition-colors duration-300">{title}</h3>
      <p className="text-silver-500 mb-6 group-hover:text-silver-400 transition-colors duration-300">{description}</p>
      
      <div className="flex items-center">
        <span className="px-3 py-1 bg-silver-900/30 text-silver-300 text-xs font-medium rounded-full border border-silver-700/30">
          {emphasis}
        </span>
      </div>
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-silver-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-silver-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Research card component
const ResearchCard = ({ icon, title, description, status, linkTo }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-silver-700/20 p-6 rounded-lg h-full flex flex-col relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        translateY: -8,
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.3), 0 0 20px 0 rgba(192,192,192,0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-silver-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-silver-400/0 rounded-lg group-hover:border-silver-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 10px 1px rgba(192,192,192,0.1)", "0 0 0px 0px rgba(192,192,192,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="mb-4 flex justify-between items-start">
        <div className="p-2 bg-silver-900/20 text-silver-400 rounded-full border border-silver-700/30">
          {icon}
        </div>
        <span className="px-3 py-1 bg-silver-900/30 text-silver-300 text-xs font-medium rounded-full border border-silver-700/30">
          {status}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-silver-100 mb-3 group-hover:text-silver-50 transition-colors duration-300">{title}</h3>
      <p className="text-silver-500 mb-4 flex-grow group-hover:text-silver-400 transition-colors duration-300">{description}</p>
      
      <Link 
        to={linkTo} 
        className="text-silver-400 text-sm flex items-center hover:text-silver-200 transition-colors mt-auto group"
      >
        Learn more 
        <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
      
      {/* Pulsing corner effect */}
      <motion.div 
        className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-silver-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(192,192,192,0)", "0 0 5px 1px rgba(192,192,192,0.3)", "0 0 0px 0px rgba(192,192,192,0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Home;