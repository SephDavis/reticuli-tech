import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Cpu, 
  Users, 
  ChevronRight,
  Eye,
  Zap,
  Database,
  Network,
  Brain,
  Calendar,
  GitBranch,
  Layers,
  FileCode,
  PenTool,
  Activity,
  BarChart4,
  Sparkles,
  Bot,
  Maximize,
  Clock
} from 'lucide-react';

const Unity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Particle system states
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate particles
    const particleCount = 80;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 15,
        speedY: (Math.random() - 0.5) * 15,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    setParticles(newParticles);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Advanced header animation
  const AdvancedAnimatedHeader = () => {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Deep space background with stars */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800/20 to-black">
          {/* Star field */}
          <div className="absolute inset-0">
            {particles.map(particle => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-gray-200"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  opacity: particle.opacity,
                }}
                animate={{
                  x: [0, particle.speedX],
                  y: [0, particle.speedY],
                  opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
                  scale: [1, particle.size > 2 ? 1.5 : 1, 1]
                }}
                transition={{
                  duration: 10 + particle.size * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Nebula effect */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(156, 163, 175, 0.2) 0%, rgba(0, 0, 0, 0) 40%)',
              'radial-gradient(circle at 70% 60%, rgba(156, 163, 175, 0.2) 0%, rgba(0, 0, 0, 0) 40%)',
              'radial-gradient(circle at 30% 60%, rgba(156, 163, 175, 0.2) 0%, rgba(0, 0, 0, 0) 40%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* 3D Grid effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full perspective-1000">
            <motion.div 
              className="grid grid-cols-12 grid-rows-12 h-full w-full transform-gpu"
              animate={{
                rotateX: [5, 0, 5],
                rotateY: [-5, 0, -5]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-gray-500/10"></div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Neural network visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative w-full max-w-3xl h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Neural nodes */}
            {[...Array(30)].map((_, i) => {
              const size = Math.random() * 6 + 2;
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `rgba(156, 163, 175, ${Math.random() * 0.5 + 0.3})`,
                    boxShadow: '0 0 15px rgba(156, 163, 175, 0.5)',
                  }}
                  animate={{
                    boxShadow: ['0 0 15px rgba(156, 163, 175, 0.5)', '0 0 25px rgba(156, 163, 175, 0.8)', '0 0 15px rgba(156, 163, 175, 0.5)'],
                    scale: [1, size > 4 ? 1.3 : 1.1, 1]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              );
            })}
            
            {/* Neural connections */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(50)].map((_, i) => {
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const endX = Math.random() * 100;
                const endY = Math.random() * 100;
                const opacity = Math.random() * 0.4 + 0.1;
                
                return (
                  <motion.line
                    key={i}
                    x1={`${startX}%`}
                    y1={`${startY}%`}
                    x2={`${endX}%`}
                    y2={`${endY}%`}
                    stroke={`rgba(156, 163, 175, ${opacity})`}
                    strokeWidth={Math.random() + 0.5}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1],
                      opacity: [0, opacity, 0],
                    }}
                    transition={{
                      duration: Math.random() * 6 + 4,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                  />
                );
              })}
            </svg>
          </motion.div>
        </div>
        
        {/* Futuristic UI elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-500/20 rounded-full">
          <motion.div 
            className="absolute inset-0 rounded-full border border-gray-400/30"
            animate={{
              boxShadow: ['0 0 0 0 rgba(156, 163, 175, 0)', '0 0 0 10px rgba(156, 163, 175, 0.1)', '0 0 0 0 rgba(156, 163, 175, 0)'],
              rotate: [0, 360]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
        </div>
        
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-gray-500/20 rounded-full">
          <motion.div 
            className="absolute inset-0 rounded-full border border-gray-400/30"
            animate={{
              boxShadow: ['0 0 0 0 rgba(156, 163, 175, 0)', '0 0 0 10px rgba(156, 163, 175, 0.1)', '0 0 0 0 rgba(156, 163, 175, 0)'],
              rotate: [360, 0]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity },
              rotate: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
          />
        </div>
        
        {/* Scan lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/10 to-transparent h-32 z-10"
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating data visualization */}
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-32 border border-gray-500/30 rounded-md overflow-hidden z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-gray-500"
            animate={{
              height: ["10%", "80%", "30%", "60%", "20%", "70%", "40%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute top-20 right-20 w-64 h-32 border border-gray-500/30 rounded-md overflow-hidden z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1.5, delay: 2.3 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-8 h-8 rounded-full bg-gray-500/40 border border-gray-400"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0 0 rgba(156, 163, 175, 0.3)', '0 0 20px 10px rgba(156, 163, 175, 0.4)', '0 0 0 0 rgba(156, 163, 175, 0.3)']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
        
        {/* Central brain visualization */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="relative w-full h-full">
            {/* Core sphere */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-full"
              animate={{
                boxShadow: ['0 0 50px rgba(156, 163, 175, 0.3)', '0 0 100px rgba(156, 163, 175, 0.5)', '0 0 50px rgba(156, 163, 175, 0.3)']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            {/* Orbital rings */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gray-400/30 rounded-full"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-500/30 rounded-full"
              animate={{
                rotate: [360, 0]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-gray-600/20 rounded-full"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
        
        {/* Title content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30">
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Unity</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl bg-black/10 backdrop-blur-sm p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Unified Neurocognitive Intelligence Throughput Yield: A Revolutionary Multi-Architecture AI Framework In Development
          </motion.p>
          
          <motion.div
            className="mt-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-md border border-gray-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center justify-center">
              <Clock size={16} className="text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm">Development Phase: Mathematical Framework Complete | 2023-2025</span>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/30 border border-gray-500/30 group"
            >
              Learn more
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
          </motion.div>
        </div>
        
        {/* Bottom digital readout */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400/70 text-xs tracking-widest bg-black/20 px-4 py-1 rounded-md border border-gray-500/10 backdrop-blur-sm">
          <motion.span
            animate={{
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            PROTOTYPE PHASE • CORE RESEARCH ACTIVE • ARCHITECTURE DESIGN COMPLETE • DATA PROVIDED IS ESTIMATED
          </motion.span>
        </div>
      </div>
    );
  };

  // Enhanced 3D background for sections
  const EnhancedBackground = ({ children, darker = false }) => {
    return (
      <div className={`relative ${darker ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-900 to-gray-800'} overflow-hidden`}>
        {/* Particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.slice(0, 30).map(particle => (
            <motion.div
              key={`bg-${particle.id}`}
              className="absolute rounded-full bg-gray-400"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size/2}px`,
                height: `${particle.size/2}px`,
                opacity: particle.opacity * 0.2,
              }}
              animate={{
                x: [0, particle.speedX/2],
                y: [0, particle.speedY/2],
                opacity: [particle.opacity * 0.2, particle.opacity * 0.1, particle.opacity * 0.2],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* 3D Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full perspective-1000">
            <motion.div 
              className="grid grid-cols-12 grid-rows-12 h-full w-full transform-gpu"
              animate={{
                rotateX: [2, 0, 2],
                rotateY: [-2, 0, -2]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-gray-500/5"></div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Digital scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent h-32"
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Advanced Animated Header */}
      <AdvancedAnimatedHeader />

      {/* Overview Section */}
      <EnhancedBackground>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-6">
                <div className="px-4 py-1 bg-gray-900/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                  Revolutionary Framework Concept
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block">
                Project <span className="text-gray-400">Overview</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </h2>
              
              <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto">
                The Brain Behind Next-Generation Intelligence Systems
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto text-gray-300">
              <motion.p 
                className="mb-4 text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Project Unity (Unified Neurocognitive Intelligence Throughput Yield) is being designed to revolutionize AI by connecting multiple architectural approaches into one powerful system. Unlike traditional single-architecture AI systems, Unity aims to integrate probabilistic computing, temporal processing, and adaptive optimization to solve problems that other systems simply cannot handle.
              </motion.p>
              
              <motion.p 
                className="mb-4 text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our research indicates Unity will address critical challenges across the intelligence spectrum:
              </motion.p>
              
              <motion.ul 
                className="space-y-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={itemVariants} className="flex items-start bg-gray-800/30 p-4 rounded-lg border border-gray-500/20">
                  <div className="flex-shrink-0 mt-1 text-gray-400 mr-3">
                    <ChevronRight size={18} />
                  </div>
                  <span>Expected to process hyperdimensional datasets with complex interdependencies up to <span className="text-gray-300 font-semibold">4× faster</span> than single-system approaches</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start bg-gray-800/30 p-4 rounded-lg border border-gray-500/20">
                  <div className="flex-shrink-0 mt-1 text-gray-400 mr-3">
                    <ChevronRight size={18} />
                  </div>
                  <span>Designed to overcome thermodynamic constraints through revolutionary energy management with <span className="text-gray-300 font-semibold">2-3 orders of magnitude</span> efficiency gains</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start bg-gray-800/30 p-4 rounded-lg border border-gray-500/20">
                  <div className="flex-shrink-0 mt-1 text-gray-400 mr-3">
                    <ChevronRight size={18} />
                  </div>
                  <span>Projected to enable rapid adaptation to novel environments without extensive retraining requirements, reducing adaptation time by up to <span className="text-gray-300 font-semibold">85%</span></span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start bg-gray-800/30 p-4 rounded-lg border border-gray-500/20">
                  <div className="flex-shrink-0 mt-1 text-gray-400 mr-3">
                    <ChevronRight size={18} />
                  </div>
                  <span>Will seamlessly integrate across heterogeneous data modalities and operational domains, potentially improving cross-domain performance by <span className="text-gray-300 font-semibold">73%</span></span>
                </motion.li>
              </motion.ul>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg"
              >
                The Unity framework is being developed to power the next evolution in AI architecture—not just a better model, but a fundamentally different approach to intelligence. By unifying multiple computational paradigms, we project Unity will achieve performance, versatility, and efficiency that single-architecture systems cannot match in a market expected to reach $1.81 trillion by 2030.
              </motion.p>
            </div>
          </div>
        </section>
      </EnhancedBackground>

      {/* Multi-Architecture Integration - Enhanced with 3D elements */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Neural connection background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            {[...Array(30)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const endX = Math.random() * 100;
              const endY = Math.random() * 100;
              
              return (
                <motion.line
                  key={i}
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="rgba(156, 163, 175, 0.3)"
                  strokeWidth={Math.random() + 0.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 5,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3,
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Digital pulse effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/5 to-transparent w-20"
          animate={{
            left: ["-10%", "110%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-800/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                System Architecture Design
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Multi-Architecture <span className="text-gray-400">Integration</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Core Technologies That Will Power Next-Generation Intelligence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ArchitectureCard 
              icon={<GitBranch size={36} />}
              title="Probabilistic Computing Architecture"
              description="Will implement advanced probabilistic state modeling through quantum-inspired computation, allowing simultaneous exploration of vast solution spaces with up to 46% reduction in uncertainty for complex decision analytics."
              variants={itemVariants}
            />
            
            <ArchitectureCard 
              icon={<Layers size={36} />}
              title="Biomimetic Processing Network"
              description="Designed to employ temporally-encoded asynchronous computing with brain-inspired architecture for dynamic pattern recognition, featuring high-efficiency signal processing with 75-85% lower energy consumption than traditional systems."
              variants={itemVariants}
            />
            
            <ArchitectureCard 
              icon={<FileCode size={36} />}
              title="Cognitive Integration Framework"
              description="Plans to deploy proprietary information transfer protocols to bridge heterogeneous computational systems, enabling seamless cross-architecture communication for multi-neural network execution while fully utilizing hardware resources."
              variants={itemVariants}
            />
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ArchitectureCard 
              icon={<Activity size={36} />}
              title="Signal Processing Infrastructure"
              description="Will integrate non-volatile memory arrays with photonic interconnects and near-reversible computation, optimizing latency and bandwidth while reducing power consumption by orders of magnitude across all system operations."
              variants={itemVariants}
            />
            
            <ArchitectureCard 
              icon={<PenTool size={36} />}
              title="Continuous Meta-Learning System"
              description="Expected to implement gradient-based cross-domain adaptation with hierarchical Bayesian transfer mechanisms, enabling rapid knowledge generalization without the extensive retraining requirements of current AI systems."
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage - Completely Redesigned Section */}
      <EnhancedBackground darker={true}>
        <section className="py-20">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
                <div className="px-4 py-1 bg-gray-900/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                  Projected Performance
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block">
                Competitive <span className="text-gray-400">Advantage</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </h2>
              
              <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto">
                How Unity Is Designed to Outperform Leading AI Systems
              </p>
            </motion.div>

            {/* Performance comparison cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <ComparisonCard 
                icon={<Bot size={36} />}
                title="Projected vs. ChatGPT (GPT-4)"
                metrics={[
                  { label: "Multisensory Data Processing", Unity: "93%", competitor: "47%", improvement: "98%" },
                  { label: "Complex Reasoning Tasks", Unity: "89%", competitor: "68%", improvement: "31%" },
                  { label: "Energy Efficiency", Unity: "86 TFLOPs/W", competitor: "12 TFLOPs/W", improvement: "7.2×" },
                  { label: "Cross-Domain Transfer", Unity: "84%", competitor: "39%", improvement: "115%" }
                ]}
              />
              
              <ComparisonCard 
                icon={<Brain size={36} />}
                title="Expected vs. Traditional Neural Networks"
                metrics={[
                  { label: "Training Time Reduction", Unity: "76%", competitor: "0%", improvement: "76%" },
                  { label: "Multimodal Integration", Unity: "97%", competitor: "41%", improvement: "137%" },
                  { label: "Prediction Accuracy", Unity: "93%", competitor: "78%", improvement: "19%" },
                  { label: "Parameter Efficiency", Unity: "12B params", competitor: "175B params", improvement: "14.6×" }
                ]}
              />
            </div>

            {/* Key differentiation visualization */}
            <motion.div 
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-500/20 rounded-xl p-8 max-w-5xl mx-auto mb-10 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Unity Architecture vs. Conventional AI</h3>
              
              {/* Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 p-6 rounded-lg border border-red-500/20 relative overflow-hidden">
                  <h4 className="text-xl font-semibold text-red-400 mb-3">Conventional AI Systems</h4>
                  
                  {/* Visual representation of conventional architecture */}
                  <div className="h-32 relative mt-4 mb-6">
                    <motion.div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                      <div className="bg-red-500/20 w-16 h-16 rounded-md flex items-center justify-center mb-2 border border-red-500/40">
                        <Network size={24} className="text-red-400" />
                      </div>
                      <motion.div 
                        className="h-px w-full max-w-xs bg-red-500/30"
                        animate={{
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-red-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Single architectural approach limits flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-red-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Dedicated to specific problem domains</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-red-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Sequential processing bottlenecks</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/40 p-6 rounded-lg border border-gray-500/20 relative overflow-hidden">
                  <h4 className="text-xl font-semibold text-gray-400 mb-3">Unity Framework (Proposed)</h4>
                  
                  {/* Visual representation of Unity architecture */}
                  <div className="h-32 relative mt-4 mb-6">
                    <motion.div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <motion.div 
                        className="bg-gray-500/20 w-12 h-12 rounded-md flex items-center justify-center border border-gray-500/40 absolute"
                        style={{ top: '10%', left: '20%' }}
                        animate={{
                          boxShadow: ['0 0 0px rgba(156, 163, 175, 0)', '0 0 15px rgba(156, 163, 175, 0.3)', '0 0 0px rgba(156, 163, 175, 0)']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <GitBranch size={16} className="text-gray-400" />
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gray-600/20 w-12 h-12 rounded-md flex items-center justify-center border border-gray-600/40 absolute"
                        style={{ top: '60%', left: '30%' }}
                        animate={{
                          boxShadow: ['0 0 0px rgba(156, 163, 175, 0)', '0 0 15px rgba(156, 163, 175, 0.3)', '0 0 0px rgba(156, 163, 175, 0)']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.5
                        }}
                      >
                        <Layers size={16} className="text-gray-400" />
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gray-700/20 w-12 h-12 rounded-md flex items-center justify-center border border-gray-700/40 absolute"
                        style={{ top: '20%', left: '65%' }}
                        animate={{
                          boxShadow: ['0 0 0px rgba(156, 163, 175, 0)', '0 0 15px rgba(156, 163, 175, 0.3)', '0 0 0px rgba(156, 163, 175, 0)']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 1
                        }}
                      >
                        <PenTool size={16} className="text-gray-400" />
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gray-500/20 w-12 h-12 rounded-md flex items-center justify-center border border-gray-500/40 absolute"
                        style={{ top: '70%', left: '70%' }}
                        animate={{
                          boxShadow: ['0 0 0px rgba(156, 163, 175, 0)', '0 0 15px rgba(156, 163, 175, 0.3)', '0 0 0px rgba(156, 163, 175, 0)']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 1.5
                        }}
                      >
                        <Activity size={16} className="text-gray-400" />
                      </motion.div>
                      
                      {/* Connections between components */}
                      <svg className="absolute inset-0 w-full h-full">
                        <motion.line 
                          x1="28%" y1="16%" x2="34%" y2="64%"
                          stroke="rgba(156, 163, 175, 0.5)" 
                          strokeWidth="1"
                          animate={{
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity
                          }}
                        />
                        <motion.line 
                          x1="71%" y1="26%" x2="36%" y2="64%"
                          stroke="rgba(156, 163, 175, 0.5)" 
                          strokeWidth="1"
                          animate={{
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        />
                        <motion.line 
                          x1="28%" y1="16%" x2="71%" y2="26%"
                          stroke="rgba(156, 163, 175, 0.5)" 
                          strokeWidth="1"
                          animate={{
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1
                          }}
                        />
                        <motion.line 
                          x1="76%" y1="76%" x2="71%" y2="26%"
                          stroke="rgba(156, 163, 175, 0.5)" 
                          strokeWidth="1"
                          animate={{
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1.5
                          }}
                        />
                        <motion.line 
                          x1="76%" y1="76%" x2="36%" y2="64%"
                          stroke="rgba(156, 163, 175, 0.5)" 
                          strokeWidth="1"
                          animate={{
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 2
                          }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-gray-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Multiple architectures designed to work in parallel</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-gray-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Cross-domain information transfer protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-gray-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Dynamic computational resource allocation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Performance summary */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Projected Performance Enhancements</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <PerformanceMetric 
                    icon={<Zap size={20} />}
                    label="Computational Efficiency"
                    value="2-3x"
                  />
                  <PerformanceMetric 
                    icon={<BarChart4 size={20} />}
                    label="Prediction Accuracy"
                    value="+27%"
                  />
                  <PerformanceMetric 
                    icon={<Maximize size={20} />}
                    label="Scaling Capability"
                    value="100x"
                  />
                </div>
              </div>
              
              {/* Digital scan effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent h-16"
                animate={{
                  top: ["-10%", "110%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            
            {/* Comparison table */}
            <motion.div 
              className="max-w-5xl mx-auto overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <table className="w-full text-left bg-gray-900/50 border border-gray-700/30 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-gray-900/60 to-gray-800/60">
                  <tr>
                    <th className="py-4 px-6 text-gray-300 font-medium">Framework</th>
                    <th className="py-4 px-6 text-gray-300 font-medium">Architecture</th>
                    <th className="py-4 px-6 text-gray-300 font-medium">Projected Performance</th>
                    <th className="py-4 px-6 text-gray-300 font-medium">Versatility</th>
                    <th className="py-4 px-6 text-gray-300 font-medium">Key Limitation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900/30">
                  <tr className="bg-gradient-to-r from-gray-800/20 to-gray-700/20">
                    <td className="py-4 px-6 text-white font-medium">Unity</td>
                    <td className="py-4 px-6 text-gray-100">Multi-paradigm integration</td>
                    <td className="py-4 px-6 text-gray-100">4× faster on complex tasks</td>
                    <td className="py-4 px-6 text-gray-100">Excellent across domains</td>
                    <td className="py-4 px-6 text-gray-100">Higher initial integration complexity</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">ChatGPT</td>
                    <td className="py-4 px-6 text-gray-400">Transformer-based LLM</td>
                    <td className="py-4 px-6 text-gray-400">Strong for language tasks</td>
                    <td className="py-4 px-6 text-gray-400">Limited to trained domains</td>
                    <td className="py-4 px-6 text-gray-400">Poor physical world reasoning</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">TensorFlow</td>
                    <td className="py-4 px-6 text-gray-400">Single deep learning framework</td>
                    <td className="py-4 px-6 text-gray-400">Fast for standard ML</td>
                    <td className="py-4 px-6 text-gray-400">Good for common ML tasks</td>
                    <td className="py-4 px-6 text-gray-400">Limited cross-domain integration</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">PyTorch</td>
                    <td className="py-4 px-6 text-gray-400">Research-oriented</td>
                    <td className="py-4 px-6 text-gray-400">Excellent for experimentation</td>
                    <td className="py-4 px-6 text-gray-400">Good for academic research</td>
                    <td className="py-4 px-6 text-gray-400">Production scaling challenges</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">CrewAI</td>
                    <td className="py-4 px-6 text-gray-400">Role-based agents</td>
                    <td className="py-4 px-6 text-gray-400">Good for defined workflows</td>
                    <td className="py-4 px-6 text-gray-400">Strong for simple cooperation</td>
                    <td className="py-4 px-6 text-gray-400">Limited cognitive flexibility</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      </EnhancedBackground>

      {/* Real-World Applications - Enhanced with better visuals */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Dynamic connection lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            {[...Array(20)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const endX = Math.random() * 100;
              const endY = Math.random() * 100;
              
              return (
                <motion.line
                  key={i}
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="rgba(156, 163, 175, 0.2)"
                  strokeWidth={Math.random() + 0.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 5,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3,
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.slice(0, 20).map(particle => (
            <motion.div
              key={`app-${particle.id}`}
              className="absolute rounded-full bg-gray-400"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size/2}px`,
                height: `${particle.size/2}px`,
                opacity: particle.opacity * 0.2,
              }}
              animate={{
                x: [0, particle.speedX/2],
                y: [0, particle.speedY/2],
                opacity: [particle.opacity * 0.2, particle.opacity * 0.1, particle.opacity * 0.2],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Digital pulse effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/5 to-transparent w-20"
          animate={{
            left: ["-10%", "110%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-800/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Targeted Industry Solutions
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Potential <span className="text-gray-400">Applications</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Transforming Critical Industries Through Advanced Intelligence Solutions
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <EnhancedApplicationCard
              icon={<Database size={36} />}
              title="Healthcare"
              market="AI healthcare market set to reach $613.81 billion by 2034"
              description="Unity aims to simultaneously process medical images, patient records, and research literature, offering a paradigm shift in health diagnostics. The platform is being designed to enable comprehensive analysis across disparate data sources, improving diagnostic accuracy and patient outcomes."
              metrics={[
                { label: "Diagnostic Accuracy", value: "+37%" },
                { label: "Analysis Speed", value: "6.2× faster" }
              ]}
              variants={itemVariants}
            />
            
            <EnhancedApplicationCard
              icon={<Brain size={36} />}
              title="Finance"
              market="Banks projected to save $340 billion annually by 2025"
              description="By processing market data, regulations, and consumer behavior simultaneously, Unity is projected to deliver 40-60% faster insight generation than single-architecture systems. The framework will excel at fraud detection and real-time risk analysis across complex financial datasets."
              metrics={[
                { label: "Fraud Detection", value: "+43%" },
                { label: "Risk Assessment", value: "4.7× more accurate" }
              ]}
              variants={itemVariants}
            />
            
            <EnhancedApplicationCard
              icon={<Cpu size={36} />}
              title="Manufacturing"
              market="Next-generation AI transforming production efficiency"
              description="Through planned seamless connection of IoT sensor networks, supply chain information, and production systems, Unity is expected to reduce manufacturing downtime by up to 35%. The platform will enable predictive maintenance and quality control optimization beyond traditional systems."
              metrics={[
                { label: "Downtime Reduction", value: "-35%" },
                { label: "Defect Prediction", value: "8.3× more reliable" }
              ]}
              variants={itemVariants}
            />
            
            <EnhancedApplicationCard
              icon={<Shield size={36} />}
              title="Defense & Infrastructure"
              market="Critical infrastructure protection demands advanced intelligence"
              description="Unity will be designed to analyze network traffic and user behavior to identify anomalies and prevent threats in real-time. The framework's multi-architecture approach is expected to enable unprecedented protection for vital systems against malware, ransomware, and sophisticated attack vectors."
              metrics={[
                { label: "Threat Detection", value: "+58%" },
                { label: "False Positive Rate", value: "-72%" }
              ]}
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Development Roadmap */}
      <EnhancedBackground darker={true}>
        <section className="py-20">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
                <div className="px-4 py-1 bg-gray-900/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                  Implementation Timeline
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block">
                Development <span className="text-gray-400">Roadmap</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </h2>
              
              <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto">
                From Research to Reality: The Unity Implementation Timeline
              </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-600/30"></div>

              <div className="space-y-24">
                <RoadmapItem 
                  year="2023-2025"
                  title="Mathematical Framework & Architecture Design"
                  description="Development and completion of the theoretical foundations, mathematical models, and architectural specifications for the Unity framework."
                  icon={<Calendar size={24} />}
                  features={[
                    "Mathematical foundation and theoretical problem-solving approaches established",
                    "Cross-domain information transfer protocols designed",
                    "Specification of the Cognitive Integration Framework architecture"
                  ]}
                  side="left"
                  status="Completed"
                />
                
                <RoadmapItem 
                  year="2025-2026"
                  title="Component Research and Development"
                  description="Development and testing of individual system components in controlled research environments."
                  icon={<Cpu size={24} />}
                  features={[
                    "Implementation of core probabilistic computing models",
                    "Development of asynchronous temporal processors",
                    "Validation of cross-domain information transfer protocols"
                  ]}
                  side="right"
                  status="Planning Phase"
                />
                
                <RoadmapItem 
                  year="2026-2027"
                  title="Integration & Validation Testing"
                  description="Integration testing of Unity framework components in precisely specified operating conditions."
                  icon={<Network size={24} />}
                  features={[
                    "Performance assessment against established benchmarks",
                    "System optimization based on performance metrics",
                    "Limited capability demonstrations in controlled environments"
                  ]}
                  side="left"
                  status="Future Phase"
                />
                
                <RoadmapItem 
                  year="2027-2028"
                  title="Prototype Deployment"
                  description="Initial deployment of Unity prototypes across select operational domains."
                  icon={<Database size={24} />}
                  features={[
                    "Cross-domain deployment with comprehensive capability testing",
                    "Integration with existing intelligence and data infrastructure",
                    "Performance monitoring and adaptive improvements"
                  ]}
                  side="right"
                  status="Future Phase"
                />
                
                <RoadmapItem 
                  year="2028-2030"
                  title="Full-Scale Implementation"
                  description="Broad deployment of Unity across multiple industries with comprehensive capabilities."
                  icon={<Maximize size={24} />}
                  features={[
                    "Advanced integration with industry-specific systems",
                    "Continuous self-optimization through adaptive learning",
                    "Expansion of application domains through partner ecosystem"
                  ]}
                  side="left"
                  status="Long-term Vision"
                />
              </div>
              
              {/* Digital scan effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent h-32"
                animate={{
                  top: ["-5%", "105%"],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>
        </section>
      </EnhancedBackground>

      {/* Future Research */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Neural connection background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            {[...Array(30)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const endX = Math.random() * 100;
              const endY = Math.random() * 100;
              
              return (
                <motion.line
                  key={i}
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="rgba(156, 163, 175, 0.3)"
                  strokeWidth={Math.random() + 0.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 5,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3,
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-800/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Research Frontiers
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Future <span className="text-gray-400">Research</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Advancing the Boundaries of Computational Intelligence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FrontierCard 
              icon={<Brain size={36} />}
              title="Advanced Integration Methodologies"
              description="Our research team is exploring next-generation interface protocols between heterogeneous computational architectures that could enable higher-fidelity information transfer across diverse computational paradigms."
              variants={itemVariants}
            />
            
            <FrontierCard 
              icon={<Cpu size={36} />}
              title="Novel Computational Materials"
              description="We are investigating emerging substrate technologies including ambient-temperature quantum systems, high-density spintronic arrays, and phase-change memory architectures to enhance Unity's physical implementation."
              variants={itemVariants}
            />
            
            <FrontierCard 
              icon={<Shield size={36} />}
              title="Responsible Implementation Framework"
              description="Our team is developing comprehensive governance structures and ethical guidelines to ensure responsible deployment of Unity technologies, with built-in safeguards and human-aligned decision processes."
              variants={itemVariants}
            />
            
            <FrontierCard 
              icon={<Network size={36} />}
              title="Emergent Architecture Optimization"
              description="Research is focusing on self-organizing computational structures and neural architecture search algorithms that could enable Unity to dynamically reconfigure its processing pathways for optimal performance."
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Advanced particle system */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.slice(0, 40).map(particle => (
            <motion.div
              key={`cta-${particle.id}`}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: particle.size > 2 ? 
                  `rgba(156, 163, 175, ${particle.opacity})` : 
                  `rgba(156, 163, 175, ${particle.opacity})`,
                boxShadow: particle.size > 2 ? 
                  `0 0 ${particle.size * 2}px rgba(156, 163, 175, 0.3)` : 
                  'none',
              }}
              animate={{
                x: [0, particle.speedX * 0.7],
                y: [0, particle.speedY * 0.7],
                opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Digital grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full perspective-1000">
            <motion.div 
              className="grid grid-cols-12 grid-rows-12 h-full w-full transform-gpu"
              animate={{
                rotateX: [2, 0, 2],
                rotateY: [-2, 0, -2]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-gray-500/5"></div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/10 to-transparent h-32"
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
            <div className="text-center p-10 border border-gray-700/20 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/80 relative overflow-hidden shadow-2xl">
              {/* Tech decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/40 to-transparent"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gray-500/30"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gray-500/30"></div>
              
              <motion.div 
                className="mb-6 p-3 bg-black/30 inline-block rounded-full border border-gray-700/30"
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(156, 163, 175, 0)", "0 0 20px 5px rgba(156, 163, 175, 0.2)", "0 0 0px 0px rgba(156, 163, 175, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap size={30} className="text-gray-300" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Unity</span> Research Initiative
              </h2>
              
              <p className="text-xl text-gray-100 mb-8">
                Contact us to learn more about our research collaboration opportunities and how your organization can be part of this groundbreaking technology development.
              </p>
              
              <motion.div 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/20 group border border-gray-600/30"
                >
                  Request Information
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
              </motion.div>
              
              {/* Research pipeline indicator */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-400 border border-gray-700/30">
                    Research Phase: Active
                  </div>
                  <div className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-400 border border-gray-700/30">
                    Prototype: In Development
                  </div>
                  <div className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-400 border border-gray-700/30">
                    Partnerships: Open
                  </div>
                </div>
              </div>
              
              {/* Futuristic decoration */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40">
                <motion.div 
                  className="absolute inset-0 rounded-full border-t border-gray-500/30"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-r border-gray-600/20"
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Architecture Card Component
const ArchitectureCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg text-center transition-all duration-500 hover:-translate-y-2 relative group"
      variants={variants}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(156, 163, 175, 0.2)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(156, 163, 175, 0)", "0 0 10px 1px rgba(156, 163, 175, 0.1)", "0 0 0px 0px rgba(156, 163, 175, 0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="text-gray-400 mb-4 mx-auto p-3 bg-black/40 inline-block rounded-full border border-gray-700/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Enhanced Application Card Component with Metrics
const EnhancedApplicationCard = ({ icon, title, market, description, metrics, variants }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative group"
      variants={variants}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(156, 163, 175, 0.2)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(156, 163, 175, 0)", "0 0 10px 1px rgba(156, 163, 175, 0.1)", "0 0 0px 0px rgba(156, 163, 175, 0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="text-gray-400 mb-4 p-3 bg-black/40 inline-block rounded-full border border-gray-700/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-100 mb-1 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-sm text-gray-300 mb-3 italic">{market}</p>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">{description}</p>
      
      {/* Performance metrics */}
      <div className="grid grid-cols-2 gap-2 mt-4 bg-gray-900/40 p-2 rounded-lg border border-gray-500/20">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center p-2">
            <p className="text-xs text-gray-400">{metric.label}</p>
            <p className="text-xl font-bold text-gray-300">{metric.value}</p>
          </div>
        ))}
      </div>
      
      {/* Digital scan line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/10 to-transparent h-12 rounded-lg opacity-0 group-hover:opacity-100"
        animate={{
          top: ["-10%", "110%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Performance Metric Component
const PerformanceMetric = ({ icon, label, value }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4 bg-black/40 border border-gray-500/20 rounded-lg"
      whileHover={{ y: -5, boxShadow: "0 10px 30px 0 rgba(0,0,0,0.3)" }}
    >
      <motion.div 
        className="text-gray-400 mb-2"
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {icon}
      </motion.div>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-xl font-bold text-gray-300">{value}</p>
    </motion.div>
  );
};

// Comparison Card Component
const ComparisonCard = ({ icon, title, metrics }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(156, 163, 175, 0.2)",
      }}
    >
      {/* Futuristic background elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-gray-500/10 opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full border border-gray-600/10 opacity-30"></div>
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-500/0 via-gray-500/50 to-gray-500/0"
        animate={{ width: ['0%', '100%', '0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="text-gray-400 mr-3 p-2 bg-black/40 rounded-full border border-gray-700/30">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="space-y-4 mt-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-black/30 p-4 rounded-lg border border-gray-500/10">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-300">{metric.label}</p>
                <motion.div 
                  className="text-xs px-2 py-1 bg-gray-900/60 text-gray-300 rounded-md"
                  animate={{
                    boxShadow: ['0 0 0px rgba(156, 163, 175, 0)', '0 0 8px rgba(156, 163, 175, 0.3)', '0 0 0px rgba(156, 163, 175, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {metric.improvement} improved
                </motion.div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500">Competitor</span>
                    <span className="text-xs text-gray-500">Unity</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-red-600/50 rounded-l-full"
                      style={{ width: metric.competitor }}
                      initial={{ width: 0 }}
                      animate={{ width: metric.competitor }}
                      transition={{ duration: 1 }}
                    />
                    <motion.div 
                      className="absolute top-0 right-0 h-full bg-gray-500 rounded-r-full"
                      style={{ width: metric.Unity }}
                      initial={{ width: 0 }}
                      animate={{ width: metric.Unity }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                <div className="flex space-x-2 text-sm">
                  <div className="text-red-400">{metric.competitor}</div>
                  <div className="text-gray-300">{metric.Unity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Digital scan line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/10 to-transparent h-12 rounded-lg"
        animate={{
          top: ["-10%", "110%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2
        }}
      />
    </motion.div>
  );
};

// Frontier Card Component
const FrontierCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative group"
      variants={variants}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(156, 163, 175, 0.2)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(156, 163, 175, 0)", "0 0 10px 1px rgba(156, 163, 175, 0.1)", "0 0 0px 0px rgba(156, 163, 175, 0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="text-gray-400 mb-4 p-3 bg-black/40 inline-block rounded-full border border-gray-700/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Roadmap Item Component
const RoadmapItem = ({ year, title, description, icon, features, side, status }) => {
  const statusColors = {
    "Completed": "bg-green-900/30 text-green-300",
    "In Progress": "bg-blue-900/30 text-blue-300",
    "Planning Phase": "bg-yellow-900/30 text-yellow-300",
    "Future Phase": "bg-gray-800/70 text-gray-400",
    "Long-term Vision": "bg-purple-900/30 text-purple-300"
  };

  return (
    <motion.div 
      className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`w-1/2 ${side === 'left' ? 'pr-12 text-right' : 'pl-12'}`}>
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{year}</span>
        <h3 className="text-xl font-bold text-gray-100 mt-1 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <ul className={`space-y-2 ${side === 'left' ? 'ml-auto' : ''}`}>
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${side === 'left' ? 'justify-end' : ''}`}>
              <div className={`flex-shrink-0 mt-1 text-gray-400 ${side === 'left' ? 'order-2 ml-3' : 'mr-3'}`}>
                <ChevronRight size={16} />
              </div>
              <span className="text-sm text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className={`mt-4 inline-block ${side === 'left' ? 'ml-auto' : ''}`}>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[status] || "bg-gray-700/30 text-gray-300"}`}>
            {status}
          </span>
        </div>
      </div>
      
      <motion.div 
        className="w-8 h-8 bg-gray-700 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center relative"
        whileHover={{ scale: 1.2 }}
        animate={{
          boxShadow: ["0 0 0px 0px rgba(156, 163, 175, 0)", "0 0 10px 2px rgba(156, 163, 175, 0.3)", "0 0 0px 0px rgba(156, 163, 175, 0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="text-white scale-75">
          {icon}
        </div>
      </motion.div>
      
      <div className="w-1/2"></div>
    </motion.div>
  );
};

export default Unity;