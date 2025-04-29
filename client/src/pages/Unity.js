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
  BarChart2,
  Scale,
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
    const particleCount = 60;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 10,
        speedY: (Math.random() - 0.5) * 10,
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

  // Header animation
  const AnimatedHeader = () => {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Space background with stars */}
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
                  opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
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
        
        {/* Neural network visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative w-full max-w-3xl h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Neural nodes */}
            {[...Array(20)].map((_, i) => {
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
              {[...Array(30)].map((_, i) => {
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
            Unified Neurocognitive Intelligence Throughput Yield: A Multi-Architecture AI Framework In Development
          </motion.p>
          
          <motion.div
            className="mt-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-md border border-gray-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center justify-center">
              <Clock size={16} className="text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm">Development Phase: Mathematical Framework In Progress | 2023-2026</span>
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
            PROTOTYPE PHASE • CORE RESEARCH ACTIVE • ARCHITECTURE DESIGN IN PROGRESS • DATA PROVIDED IS ESTIMATED
          </motion.span>
        </div>
      </div>
    );
  };

  // Enhanced background for sections
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
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Animated Header */}
      <AnimatedHeader />

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
                  Framework Concept
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
                A Next-Generation Approach to Intelligent Systems
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
                Project Unity (Unified Neurocognitive Intelligence Throughput Yield) is being designed to connect multiple architectural approaches into a cohesive AI system. Unlike traditional single-architecture AI systems, Unity aims to integrate probabilistic computing, temporal processing, and adaptive optimization to solve complex challenges across domains.
              </motion.p>
              
              <motion.p 
                className="mb-4 text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our research indicates Unity will address key challenges across the intelligence spectrum:
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
                  <span>Designed to process complex datasets with interdependencies up to <span className="text-gray-300 font-semibold">30% faster</span> than single-system approaches</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start bg-gray-800/30 p-4 rounded-lg border border-gray-500/20">
                  <div className="flex-shrink-0 mt-1 text-gray-400 mr-3">
                    <ChevronRight size={18} />
                  </div>
                  <span>Working to overcome computational constraints through improved energy management targeting <span className="text-gray-300 font-semibold">40-60% efficiency gains</span></span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start bg-gray-800/30 p-4 rounded-lg border border-gray-500/20">
                  <div className="flex-shrink-0 mt-1 text-gray-400 mr-3">
                    <ChevronRight size={18} />
                  </div>
                  <span>Aiming to enable adaptation to novel environments with reduced retraining requirements, potentially decreasing adaptation time by up to <span className="text-gray-300 font-semibold">25%</span></span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start bg-gray-800/30 p-4 rounded-lg border border-gray-500/20">
                  <div className="flex-shrink-0 mt-1 text-gray-400 mr-3">
                    <ChevronRight size={18} />
                  </div>
                  <span>Designed to integrate across heterogeneous data modalities and operational domains, with a goal of improving cross-domain performance by <span className="text-gray-300 font-semibold">15-20%</span></span>
                </motion.li>
              </motion.ul>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg"
              >
                The Unity framework represents a different approach to AI architecture—not just an incremental improvement, but a framework designed to bridge different computational paradigms. By unifying multiple architectural approaches, we believe Unity can achieve performance, versatility, and efficiency that single-architecture systems struggle to match in the evolving AI landscape.
              </motion.p>
            </div>
          </div>
        </section>
      </EnhancedBackground>

      {/* Multi-Architecture Integration */}
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
              Core Technologies Driving Unity's Development
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
              title="Probabilistic Computing Module"
              description="Implementing probabilistic state modeling and bayesian approaches, designed to enable uncertainty quantification and broader exploration of solution spaces for complex decision analytics."
              variants={itemVariants}
            />
            
            <ArchitectureCard 
              icon={<Layers size={36} />}
              title="Temporal Processing Network"
              description="Developing asynchronous computing with biologically-inspired architecture for dynamic pattern recognition, targeting improved efficiency in signal processing compared to traditional synchronous systems."
              variants={itemVariants}
            />
            
            <ArchitectureCard 
              icon={<FileCode size={36} />}
              title="Integration Framework"
              description="Creating information transfer protocols to bridge heterogeneous computational systems, designed to enable communication between different architectural paradigms while optimizing resource utilization."
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
              title="Optimization Infrastructure"
              description="Researching energy-efficient computing approaches including optimized memory access patterns and computation scheduling to improve latency and bandwidth while reducing power consumption across system operations."
              variants={itemVariants}
            />
            
            <ArchitectureCard 
              icon={<PenTool size={36} />}
              title="Adaptive Learning System"
              description="Investigating gradient-based transfer learning approaches that enable knowledge sharing between domains, potentially reducing the extensive retraining requirements typically needed when adapting AI systems to new tasks."
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage */}
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
                Technical <span className="text-gray-400">Advantages</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </h2>
              
              <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto">
                How Unity Is Being Designed to Address Key AI Challenges
              </p>
            </motion.div>

            {/* Performance comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <ComparisonCard 
                icon={<Bot size={36} />}
                title="Target Improvements vs. Current Systems"
                metrics={[
                  { label: "Multimodal Processing", Unity: "75%", competitor: "62%", improvement: "21%" },
                  { label: "Complex Reasoning Tasks", Unity: "78%", competitor: "68%", improvement: "15%" },
                  { label: "Energy Efficiency", Unity: "28 TFLOPs/W", competitor: "18 TFLOPs/W", improvement: "1.6×" },
                  { label: "Cross-Domain Transfer", Unity: "65%", competitor: "52%", improvement: "25%" }
                ]}
              />
              
              <ComparisonCard 
                icon={<Brain size={36} />}
                title="Architecture Efficiency Goals"
                metrics={[
                  { label: "Training Time", Unity: "30% reduction", competitor: "baseline", improvement: "30%" },
                  { label: "Multimodal Integration", Unity: "82%", competitor: "70%", improvement: "17%" },
                  { label: "Prediction Accuracy", Unity: "86%", competitor: "78%", improvement: "10%" },
                  { label: "Parameter Utilization", Unity: "35B params", competitor: "45B params", improvement: "1.3×" }
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
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Unity's Approach vs. Current AI Systems</h3>
              
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
                      <span>Often specialized for specific problem domains</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-red-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Sequential processing creates bottlenecks</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/40 p-6 rounded-lg border border-gray-500/20 relative overflow-hidden">
                  <h4 className="text-xl font-semibold text-gray-400 mb-3">Unity Framework (In Development)</h4>
                  
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
                      <span>Multiple architectures designed to work in coordination</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-gray-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Inter-system information transfer protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-gray-400 mr-2">
                        <ChevronRight size={12} />
                      </div>
                      <span>Adaptive computational resource allocation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Performance summary */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Target Performance Improvements</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <PerformanceMetric 
                    icon={<Zap size={20} />}
                    label="Computational Efficiency"
                    value="25-40%"
                  />
                  <PerformanceMetric 
                    icon={<BarChart2 size={20} />}
                    label="Prediction Accuracy"
                    value="+10-15%"
                  />
                  <PerformanceMetric 
                    icon={<Scale size={20} />}
                    label="Versatility"
                    value="1.5-2x"
                  />
                </div>
              </div>
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
                    <th className="py-4 px-6 text-gray-300 font-medium">Strengths</th>
                    <th className="py-4 px-6 text-gray-300 font-medium">Versatility</th>
                    <th className="py-4 px-6 text-gray-300 font-medium">Primary Challenge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900/30">
                  <tr className="bg-gradient-to-r from-gray-800/20 to-gray-700/20">
                    <td className="py-4 px-6 text-white font-medium">Unity</td>
                    <td className="py-4 px-6 text-gray-100">Multi-paradigm integration</td>
                    <td className="py-4 px-6 text-gray-100">Cross-domain adaptability</td>
                    <td className="py-4 px-6 text-gray-100">High potential</td>
                    <td className="py-4 px-6 text-gray-100">Integration complexity</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Large LLMs</td>
                    <td className="py-4 px-6 text-gray-400">Transformer-based</td>
                    <td className="py-4 px-6 text-gray-400">Language understanding</td>
                    <td className="py-4 px-6 text-gray-400">Moderate</td>
                    <td className="py-4 px-6 text-gray-400">Physical world reasoning</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Traditional ML</td>
                    <td className="py-4 px-6 text-gray-400">Single framework</td>
                    <td className="py-4 px-6 text-gray-400">Specific task optimization</td>
                    <td className="py-4 px-6 text-gray-400">Limited</td>
                    <td className="py-4 px-6 text-gray-400">Cross-domain generalization</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Research Frameworks</td>
                    <td className="py-4 px-6 text-gray-400">Experimental</td>
                    <td className="py-4 px-6 text-gray-400">Novel approaches</td>
                    <td className="py-4 px-6 text-gray-400">Varies</td>
                    <td className="py-4 px-6 text-gray-400">Production readiness</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Agent Systems</td>
                    <td className="py-4 px-6 text-gray-400">Multi-agent</td>
                    <td className="py-4 px-6 text-gray-400">Task distribution</td>
                    <td className="py-4 px-6 text-gray-400">Good</td>
                    <td className="py-4 px-6 text-gray-400">Coordination overhead</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      </EnhancedBackground>

      {/* Potential Applications */}
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
                Target Industry Solutions
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
              Targeted Industry Challenges Unity Is Designed to Address
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
              market="AI healthcare market projected to grow significantly"
              description="Unity aims to process medical images, patient records, and research literature in coordination, potentially enhancing diagnostic analysis. The framework could enable more comprehensive analysis across disparate data sources to assist healthcare providers."
              metrics={[
                { label: "Diagnostic Support", value: "+15-20%" },
                { label: "Analysis Integration", value: "3-4× more sources" }
              ]}
              variants={itemVariants}
            />
            
            <EnhancedApplicationCard
              icon={<Brain size={36} />}
              title="Finance"
              market="Financial institutions seeking enhanced analytics"
              description="By processing market data, regulations, and behavioral patterns together, Unity could deliver improved insight generation compared to single-architecture systems. The framework may offer advantages in risk analysis across complex financial datasets."
              metrics={[
                { label: "Pattern Detection", value: "+18%" },
                { label: "Risk Assessment", value: "1.3× more accurate" }
              ]}
              variants={itemVariants}
            />
            
            <EnhancedApplicationCard
              icon={<Cpu size={36} />}
              title="Manufacturing"
              market="Industry 4.0 driving demand for integrated intelligence"
              description="Through coordination of IoT sensor networks, supply chain information, and production systems, Unity could potentially reduce manufacturing downtime. The platform aims to enable better predictive maintenance through multi-system analysis."
              metrics={[
                { label: "Downtime Reduction", value: "15-20%" },
                { label: "Predictive Accuracy", value: "1.4× improvement" }
              ]}
              variants={itemVariants}
            />
            
            <EnhancedApplicationCard
              icon={<Shield size={36} />}
              title="Defense & Infrastructure"
              market="Critical systems require enhanced protection"
              description="Unity is being designed to analyze network traffic patterns and behavior across systems to identify potential threats. The framework's multi-architecture approach could provide improved detection capabilities for protecting vital systems."
              metrics={[
                { label: "Threat Detection", value: "+20%" },
                { label: "False Positive Rate", value: "-25%" }
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
                From Research to Reality: Unity Implementation Timeline
              </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-600/30"></div>

              <div className="space-y-24">
                <RoadmapItem 
                  year="2023-2026"
                  title="Mathematical Framework & Architecture Design"
                  description="Development of the theoretical foundations, mathematical models, and architectural specifications for the Unity framework."
                  icon={<Calendar size={24} />}
                  features={[
                    "Mathematical foundation and theoretical problem-solving approaches",
                    "Cross-domain information transfer protocol design",
                    "Integration Framework architecture specification"
                  ]}
                  side="left"
                  status="In Progress"
                />
                
                <RoadmapItem 
                  year="2026-2027"
                  title="Component Research and Development"
                  description="Development and testing of individual system components in controlled research environments."
                  icon={<Cpu size={24} />}
                  features={[
                    "Implementation of core probabilistic computing models",
                    "Development of temporal processing components",
                    "Validation of transfer protocols between systems"
                  ]}
                  side="right"
                  status="Planning Phase"
                />
                
                <RoadmapItem 
                  year="2027-2028"
                  title="Integration & Testing"
                  description="Integration testing of Unity framework components under specific operating conditions."
                  icon={<Network size={24} />}
                  features={[
                    "Performance assessment against benchmarks",
                    "System optimization based on testing",
                    "Capability demonstrations in controlled environments"
                  ]}
                  side="left"
                  status="Future Phase"
                />
                
                <RoadmapItem 
                  year="2028-2029"
                  title="Early Application Development"
                  description="Initial application of Unity concepts in select operational domains."
                  icon={<Database size={24} />}
                  features={[
                    "Domain-specific deployment and testing",
                    "Integration with existing systems",
                    "Performance monitoring and improvements"
                  ]}
                  side="right"
                  status="Future Phase"
                />
                
                <RoadmapItem 
                  year="2029-2030"
                  title="Expanded Implementation"
                  description="Broader deployment of Unity-based solutions across selected industries."
                  icon={<Maximize size={24} />}
                  features={[
                    "Industry-specific integrations",
                    "Continuous improvement through feedback",
                    "Expansion of application domains"
                  ]}
                  side="left"
                  status="Long-term Vision"
                />
              </div>
            </div>
          </div>
        </section>
      </EnhancedBackground>

      {/* Research Focus */}
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
              Current <span className="text-gray-400">Research Focus</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Key Research Areas Driving Unity's Development
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
              title="Inter-System Communication"
              description="Our research team is exploring robust protocols for information transfer between different computational architectures, addressing the challenge of maintaining context and meaning across diverse processing paradigms."
              variants={itemVariants}
            />
            
            <FrontierCard 
              icon={<Cpu size={36} />}
              title="Computational Efficiency"
              description="We're investigating optimization techniques for multi-system processing, including shared memory architectures and efficient scheduling algorithms to minimize the overhead typically associated with cross-system coordination."
              variants={itemVariants}
            />
            
            <FrontierCard 
              icon={<Shield size={36} />}
              title="Responsible AI Implementation"
              description="Our team is developing governance structures and safety protocols to ensure responsible deployment of multi-architecture AI systems, with appropriate oversight and control mechanisms built into the architecture."
              variants={itemVariants}
            />
            
            <FrontierCard 
              icon={<Network size={36} />}
              title="Adaptive Optimization"
              description="Research is focusing on dynamic resource allocation methods that allow the system to reconfigure its processing pathways based on the task requirements, potentially improving efficiency and performance on complex problems."
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Particle system */}
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
                Contact us to learn more about our research collaboration opportunities and how your organization can participate in this technology development.
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