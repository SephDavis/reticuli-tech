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

import ParticleBackground from './ParticleBackground';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  const scanLineVariants = {
    initial: { y: 0, opacity: 0.5 },
    animate: {
      y: '100%',
      opacity: [0.5, 0.8, 0.5],
      transition: { 
        repeat: Infinity, 
        duration: 2,
        ease: "easeInOut" 
      }
    }
  };

  const TechGrid = () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute w-full h-full grid grid-cols-8 gap-px opacity-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-r border-gray-400 h-full"></div>
        ))}
      </div>
      <div className="absolute w-full h-full grid grid-rows-8 gap-px opacity-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-b border-gray-400 w-full"></div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div 
            className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center"
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
              <div className="text-4xl text-white font-bold flex items-center space-x-2">
                <img 
                  src="/images/icon.png" 
                  alt="Your Company Logo" 
                  className="h-12 w-auto"
                />
              </div>
            </motion.div>
            <motion.div 
              className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-gray-400 to-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div 
              className="mt-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              System initializing...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        <ParticleBackground />
        <TechGrid />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/15 to-transparent h-32 w-full"
            variants={scanLineVariants}
            initial="initial"
            animate="animate"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-gray-800/80 via-gray-900/90 to-black/95"></div>
        
        <div className="container mx-auto px-4 z-20 relative py-24">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block mb-8 p-1 border border-gray-500/50 rounded-full"
            >
              <div className="text-xs uppercase tracking-widest text-gray-200 bg-gray-800/80 px-4 py-1 rounded-full">
                Advanced Defense Technologies
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mb-2"
            >
              <img 
                src="/images/reticuli-logo.png" 
                alt="Reticuli Logo" 
                className="h-96 mx-auto"
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 glitch-text"
              whileInView={{
                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="relative inline-block">
                <span className="relative">
                  
                  <span className="absolute -inset-1 bg-gray-200/20 blur-sm -z-10"></span>
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-10"
            >
              Advanced defense technology solutions for emerging security challenges
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white font-bold rounded-md flex items-center justify-center shadow-lg shadow-black/30 border border-gray-400/30 group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="mr-2"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Code size={18} className="text-white group-hover:text-white transition-colors duration-300" />
                </motion.span>
                Our Solutions
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border border-gray-500/60 hover:border-gray-300/80 hover:bg-gray-700/40 text-gray-200 hover:text-white font-medium rounded-md transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-700/20 to-transparent"></div>
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
                className="w-3 h-3 rounded-full bg-gray-300 opacity-75"
              >
                <motion.div 
                  className="w-full h-full bg-white rounded-full"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <TechGrid />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(200,210,230,0.15) 0%, rgba(0,0,0,0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 6,
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
                <div className="inline-block p-px bg-gradient-to-r from-gray-500/60 via-gray-300/60 to-gray-500/60 rounded-md">
                  <div className="px-4 py-1 bg-gray-800 rounded-md text-sm text-gray-200 uppercase tracking-wider">
                    Strategic Capabilities
                  </div>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  textShadow: "0 0 8px rgba(255,255,255,0.4)"
                }}
              >
                Our <span className="text-gray-300">Focus Areas</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/70 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
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

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            >
              <div className="inline-block p-px bg-gradient-to-r from-gray-500/60 via-gray-300/60 to-gray-500/60 rounded-md mb-6">
                <div className="px-4 py-1 bg-gray-800 rounded-md text-sm text-gray-200 uppercase tracking-wider">
                  Core Platform
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
                <span className="text-gray-300">OSINT</span> Threat Intelligence
                <span className="absolute -bottom-2 left-0 w-3/4 h-px bg-gradient-to-r from-gray-300/70 to-transparent"></span>
              </h2>
              
              <p className="text-gray-200 mb-6 text-lg">
                Our highest priority platform provides summarized vulnerability intelligence via subscription. Designed for cybersecurity firms, defense contractors, and enterprises needing actionable threat data in real-time.
              </p>
              
              <p className="text-gray-300 mb-8">
                The platform combines automated data collection with custom analytics to deliver insights that help organizations stay ahead of emerging threats.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="border border-gray-500/40 bg-gray-800/70 p-5 rounded-lg group hover:bg-gray-800/90 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px 0 rgba(200,210,230,0.2)"
                  }}
                >
                  <div className="text-white text-2xl font-bold mb-1">Multi-source</div>
                  <div className="text-gray-300 text-sm">Intelligence gathering</div>
                  <motion.div 
                    className="absolute inset-0 border border-gray-200/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.3)", "0 0 0px 0px rgba(200,210,230,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div 
                  className="border border-gray-500/40 bg-gray-800/70 p-5 rounded-lg group hover:bg-gray-800/90 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px 0 rgba(200,210,230,0.2)"
                  }}
                >
                  <div className="text-white text-2xl font-bold mb-1">Automated</div>
                  <div className="text-gray-300 text-sm">Analysis & reporting</div>
                  <motion.div 
                    className="absolute inset-0 border border-gray-200/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.3)", "0 0 0px 0px rgba(200,210,230,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="border border-gray-500/40 bg-gray-800/70 p-5 rounded-lg group hover:bg-gray-800/90 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px 0 rgba(200,210,230,0.2)"
                  }}
                >
                  <div className="text-white text-2xl font-bold mb-1">Custom</div>
                  <div className="text-gray-300 text-sm">OSINT integrations</div>
                  <motion.div 
                    className="absolute inset-0 border border-gray-200/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.3)", "0 0 0px 0px rgba(200,210,230,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="border border-gray-500/40 bg-gray-800/70 p-5 rounded-lg group hover:bg-gray-800/90 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px 0 rgba(200,210,230,0.2)"
                  }}
                >
                  <div className="text-white text-2xl font-bold mb-1">Executive</div>
                  <div className="text-gray-300 text-sm">Dashboard & reporting</div>
                  <motion.div 
                    className="absolute inset-0 border border-gray-200/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.3)", "0 0 0px 0px rgba(200,210,230,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                </motion.div>
              </div>

              <Link 
                to="/capabilities/tiaas" 
                className="inline-flex items-center text-gray-200 font-medium hover:text-white transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more about our platform 
                <ChevronRight className="ml-1 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative h-96 md:h-[480px] lg:h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 50 }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 border border-gray-500/50 rounded-xl overflow-hidden bg-gray-800">
                  
                  <div className="border-b border-gray-500/40 p-3 flex items-center justify-between bg-gray-700">
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-gray-400"
                        animate={{ backgroundColor: ["#71717a", "#9ca3af", "#71717a"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-gray-400"
                        animate={{ backgroundColor: ["#71717a", "#9ca3af", "#71717a"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-gray-400"
                        animate={{ backgroundColor: ["#71717a", "#9ca3af", "#71717a"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                      ></motion.div>
                    </div>
                    <div className="text-xs text-gray-300">RETICULI TI (THREAT INTELLIGENCE)</div>
                    <div className="flex items-center space-x-2">
                      <Search size={14} className="text-gray-300" />
                      <Server size={14} className="text-gray-300" />
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                    <div className="absolute inset-0 p-6 overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col items-start justify-start text-left"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          className="text-gray-300 mb-2 text-sm font-mono"
                        >
                          &gt; Initializing threat scan...
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          className="text-gray-300 mb-2 text-sm font-mono"
                        >
                          &gt; Compiling OSINT data sources...
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.7 }}
                          className="text-gray-300 mb-2 text-sm font-mono"
                        >
                          &gt; Analyzing threat patterns...
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 2.2 }}
                          className="text-white mb-2 text-sm font-mono"
                        >
                          &gt; <motion.span 
                                className="text-white animate-pulse"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              >▊</motion.span>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="mb-6 p-4 bg-gray-600/30 rounded-full border border-gray-400/40"
                      animate={{
                        boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <AlertTriangle className="w-16 h-16 text-gray-200" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Threat Intelligence Platform</h3>
                    <p className="text-gray-200 mb-6">Real-time security insights for defense contractors</p>
                    
                    <div className="flex space-x-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          to="/capabilities/tiaas" 
                          className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white rounded-md text-sm shadow-lg shadow-black/30 border border-gray-500/40 transition-colors duration-300"
                        >
                          Platform Details
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          to="/contact" 
                          className="px-4 py-2 bg-transparent border border-gray-500/50 hover:border-gray-300/70 text-gray-200 hover:bg-gray-600/40 hover:text-white rounded-md text-sm transition-all duration-300"
                        >
                          Request Demo
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/15 to-transparent h-20"
                    animate={{
                      top: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-20 left-5 text-xs text-gray-300 font-mono">
                      {`function scanThreats() {`}<br />
                      {`  const sources = getOSINTSources();`}<br />
                      {`  const data = sources.map(collectData);`}<br />
                      {`  return analyzePatterns(data);`}<br />
                      {`}`}
                    </div>
                    <div className="absolute bottom-20 right-5 text-xs text-gray-300 font-mono">
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
              
              <motion.div 
                className="absolute top-0 right-0 w-16 h-32 border-r-2 border-t-2 border-gray-400/40"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 8px 2px rgba(200,210,230,0.4)", "0 0 0px 0px rgba(200,210,230,0)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 w-16 h-32 border-l-2 border-b-2 border-gray-400/40"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 8px 2px rgba(200,210,230,0.4)", "0 0 0px 0px rgba(200,210,230,0)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <TechGrid />
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"
              style={{
                left: 0,
                right: 0,
                top: `${20 + i * 15}%`,
                opacity: 0.8 - i * 0.1,
              }}
              animate={{
                left: ["-100%", "100%"],
              }}
              transition={{
                duration: 12 + i * 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
          
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent"
              style={{
                left: 0,
                right: 0,
                top: `${50 + i * 10}%`,
                opacity: 0.7 - i * 0.1,
              }}
              animate={{
                left: ["100%", "-100%"],
              }}
              transition={{
                duration: 15 + i * 3,
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
              transition={{ duration: 0.6, type: "spring" }}
              className="mb-4"
            >
              <div className="inline-block p-px bg-gradient-to-r from-gray-500/60 via-gray-300/60 to-gray-500/60 rounded-md">
                <div className="px-4 py-1 bg-gray-800 rounded-md text-sm text-gray-200 uppercase tracking-wider">
                  Innovation Pipeline
                </div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                textShadow: "0 0 8px rgba(255,255,255,0.4)"
              }}
            >
              Advanced <span className="text-gray-300">Research</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/70 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
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

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <ParticleBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="mb-12 text-center"
            >
              <div className="inline-block p-px bg-gradient-to-r from-gray-500/60 via-gray-300/60 to-gray-500/60 rounded-md mb-4">
                <div className="px-4 py-1 bg-gray-800 rounded-md text-sm text-gray-200 uppercase tracking-wider">
                  Strategic Focus
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Defense <span className="text-gray-300">Partnerships</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                className="bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-500/30 p-8 rounded-lg relative group"
                whileHover={{ 
                  boxShadow: "0 0 30px 0 rgba(200,210,230,0.15)",
                  y: -5
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <motion.div 
                  className="absolute inset-0 border border-gray-300/0 rounded-lg group-hover:border-gray-300/30 transition-all duration-500"
                  animate={{ 
                    boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.2)", "0 0 0px 0px rgba(200,210,230,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  Defense <span className="text-gray-300">Contracting</span>
                  <span className="absolute -bottom-2 left-0 w-16 h-px bg-gray-300/60"></span>
                </h3>
                
                <p className="text-gray-200 mb-6">
                  We're targeting OTA and SBIR opportunities for non-dilutive funding and establishing a strong presence in the defense technology ecosystem.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-200 bg-gray-700/50 p-1.5 rounded-md">
                      <Shield size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">CMMC Compliance</h5>
                      <p className="text-gray-300 text-sm">Gap assessment and compliance assistance for defense contractors</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-200 bg-gray-700/50 p-1.5 rounded-md">
                      <Database size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Targeted Prototypes</h5>
                      <p className="text-gray-300 text-sm">Solutions designed for specific defense requirements</p>
                    </div>
                  </li>
                </ul>
                
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-300/40"
                  animate={{
                    boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-300/40"
                  animate={{
                    boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-500/30 p-8 rounded-lg relative group"
                whileHover={{ 
                  boxShadow: "0 0 30px 0 rgba(200,210,230,0.15)",
                  y: -5
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <motion.div 
                  className="absolute inset-0 border border-gray-300/0 rounded-lg group-hover:border-gray-300/30 transition-all duration-500"
                  animate={{ 
                    boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.2)", "0 0 0px 0px rgba(200,210,230,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  Technology <span className="text-gray-300">Roadmap</span>
                  <span className="absolute -bottom-2 left-0 w-16 h-px bg-gray-300/60"></span>
                </h3>
                
                <p className="text-gray-200 mb-6">
                  Our strategic development plan focuses on creating innovative technologies that address critical defense and security challenges.
                </p>
                
                <ul className="space-y-3">
                  <li className="pb-3 border-b border-gray-500/40">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">OSINT Platform</span>
                      <span className="text-gray-200 text-sm">Q1-Q2 2025</span>
                    </div>
                    <p className="text-gray-300 text-sm">Initial release of our threat intelligence platform</p>
                  </li>
                  <li className="pb-3 border-b border-gray-500/40">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">Neuromorphic XDR</span>
                      <span className="text-gray-200 text-sm">Q3 2025</span>
                    </div>
                    <p className="text-gray-300 text-sm">Alpha release for partner testing</p>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">BlackLock Encryption</span>
                      <span className="text-gray-200 text-sm">Q4 2025</span>
                    </div>
                    <p className="text-gray-300 text-sm">Prototype validation with select partners</p>
                  </li>
                </ul>
                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/roadmap" 
                    className="mt-6 inline-flex items-center text-gray-200 hover:text-white text-sm font-medium transition-colors group"
                  >
                    View complete roadmap 
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-300/40"
                  animate={{
                    boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-300/40"
                  animate={{
                    boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/40 via-gray-600/30 to-gray-700/40"></div>
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-gray-300/10 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-b border-gray-300/10 w-full"></div>
            ))}
          </div>
        </div>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/20 to-transparent h-32"
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 3,
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
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="text-center p-10 border border-gray-500/40 rounded-xl bg-gradient-to-b from-gray-700/90 to-gray-900/90 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300/60 to-transparent"></div>
              <motion.div 
                className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gray-300/50"
                animate={{
                  boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gray-300/50"
                animate={{
                  boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              ></motion.div>
              
              <motion.div 
                className="mb-6 p-3 bg-gray-700/40 inline-block rounded-full border border-gray-500/50"
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 20px 5px rgba(200,210,230,0.25)", "0 0 0px 0px rgba(200,210,230,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ rotate: [0, 5, 0, -5, 0] }}
              >
                <Zap size={30} className="text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to discuss your <span className="text-gray-200">defense technology</span> needs?
              </h2>
              
              <p className="text-xl text-gray-200 mb-8">
                Contact our team to explore how we can support your requirements.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/20 group border border-gray-400/50"
                >
                  Schedule a Consultation
                  <motion.div
                    className="ml-2"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const CapabilityItem = ({ icon, title, description, emphasis }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-500/40 p-8 rounded-lg transition-all duration-500 hover:-translate-y-3 relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(200,210,230,0.2)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-300/0 rounded-lg group-hover:border-gray-300/30 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.2)", "0 0 0px 0px rgba(200,210,230,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.div 
        className="text-gray-200 mb-4 p-3 bg-gray-700/40 inline-block rounded-full border border-gray-500/50"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      
      <div className="flex items-center">
        <motion.span 
          className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full border border-gray-500/50"
          animate={{
            boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.2)", "0 0 0px rgba(255,255,255,0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {emphasis}
        </motion.span>
      </div>
      
      <motion.div 
        className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  );
};

const ResearchCard = ({ icon, title, description, status, linkTo }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-500/40 p-6 rounded-lg h-full flex flex-col relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
      whileHover={{ 
        translateY: -10,
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.3), 0 0 20px 0 rgba(200,210,230,0.2)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-300/0 rounded-lg group-hover:border-gray-300/30 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 10px 1px rgba(200,210,230,0.2)", "0 0 0px 0px rgba(200,210,230,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="mb-4 flex justify-between items-start">
        <motion.div 
          className="p-2 bg-gray-700/40 text-gray-200 rounded-full border border-gray-500/50"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {icon}
        </motion.div>
        <motion.span 
          className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full border border-gray-500/50"
          animate={{
            boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.2)", "0 0 0px rgba(255,255,255,0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {status}
        </motion.span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      
      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
        <Link 
          to={linkTo} 
          className="text-gray-200 text-sm flex items-center hover:text-white transition-colors mt-auto group"
        >
          Learn more 
          <ChevronRight size={14} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </motion.div>
      
      <motion.div 
        className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 5px 1px rgba(200,210,230,0.4)", "0 0 0px 0px rgba(200,210,230,0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(200,210,230,0)", "0 0 5px 1px rgba(200,210,230,0.4)", "0 0 0px 0px rgba(200,210,230,0)"]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  );
};

export default Home;