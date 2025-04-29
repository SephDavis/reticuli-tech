import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  Shield,
  Bell,
  Zap,
  Activity,
  Check,
  Clock,
  ChevronRight,
  Brain,
  Eye,
  BarChart2,
  Server,
  Lock,
  MessageCircle,
  Cpu
} from 'lucide-react';

// DataFlowEffect component for background animation
const DataFlowEffect = ({ children, density = 10 }) => (
  <div className="relative">
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(density)].map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
          style={{
            width: '1px',
            height: `${20 + Math.random() * 40}%`,
            left: `${(100 / density) * i + (Math.random() * 5)}%`,
            top: '-20%',
          }}
          animate={{
            top: ['100%', '-20%'],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
    {children}
  </div>
);

// GlowingBorder component for interactive elements
const GlowingBorder = ({ children, intensity = 1, className = "" }) => (
  <motion.div
    className={`relative ${className}`}
    whileHover={{ scale: 1.02 }}
  >
    <motion.div 
      className="absolute inset-0 rounded-lg"
      style={{ background: 'linear-gradient(90deg, rgba(79,209,197,0.1), rgba(59,130,246,0.1), rgba(147,51,234,0.1))' }}
      animate={{ 
        opacity: [0.3, 0.8, 0.3],
        backgroundPosition: ['0% center', '100% center', '0% center']
      }}
      transition={{ 
        duration: 5 * intensity, 
        repeat: Infinity,
        ease: "linear" 
      }}
    />
    {children}
  </motion.div>
);

// DigitalOrnament component for decorative elements
const DigitalOrnament = ({ type = "corner", position = "top-right", className = "" }) => {
  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0"
  };
  
  const types = {
    "corner": <div className={`absolute w-8 h-8 border-t-2 border-r-2 border-blue-400/30 ${positionClasses[position]} ${className}`}></div>,
    "bracket": <div className={`absolute w-4 h-full border-t-2 border-b-2 border-r-2 border-cyan-400/30 ${positionClasses[position]} ${className}`}></div>,
    "dot": (
      <motion.div 
        className={`absolute w-2 h-2 rounded-full bg-teal-400/50 ${positionClasses[position]} ${className}`}
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          boxShadow: [
            '0 0 0px 0px rgba(45,212,191,0.3)',
            '0 0 8px 2px rgba(45,212,191,0.6)',
            '0 0 0px 0px rgba(45,212,191,0.3)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    )
  };
  
  return types[type] || types.corner;
};

// FeatureCard component for feature highlights
const FeatureCard = ({ icon, title, description, color = "blue", delay = 0 }) => {
  // Color variants for different items
  const colorVariants = {
    blue: {
      background: "from-blue-900 to-black",
      border: "border-blue-700/20",
      iconBg: "bg-blue-900/20",
      iconBorder: "border-blue-700/30",
      title: "text-blue-100",
      text: "text-blue-500",
      hoverText: "group-hover:text-blue-400",
      glow: "rgba(37,99,235,0.1)",
      cornerHighlight: "border-blue-500/20"
    },
    cyan: {
      background: "from-cyan-900 to-black",
      border: "border-cyan-700/20",
      iconBg: "bg-cyan-900/20",
      iconBorder: "border-cyan-700/30",
      title: "text-cyan-100",
      text: "text-cyan-500",
      hoverText: "group-hover:text-cyan-400",
      glow: "rgba(8,145,178,0.1)",
      cornerHighlight: "border-cyan-500/20"
    },
    purple: {
      background: "from-purple-900 to-black",
      border: "border-purple-700/20",
      iconBg: "bg-purple-900/20",
      iconBorder: "border-purple-700/30",
      title: "text-purple-100",
      text: "text-purple-500",
      hoverText: "group-hover:text-purple-400",
      glow: "rgba(147,51,234,0.1)",
      cornerHighlight: "border-purple-500/20"
    }
  };
  
  const theme = colorVariants[color] || colorVariants.blue;
  
  return (
    <motion.div 
      className={`bg-gradient-to-br ${theme.background} border ${theme.border} p-6 rounded-lg transition-all duration-500 hover:-translate-y-1 relative group overflow-hidden h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        boxShadow: `0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 ${theme.glow}`,
      }}
    >
      <DataFlowEffect density={5}>
        <div className={`absolute inset-0 bg-gradient-to-b from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
        
        <motion.div 
          className={`absolute inset-0 border border-${color}-400/0 rounded-lg group-hover:border-${color}-400/20 transition-all duration-500`}
          animate={{ 
            boxShadow: [`0 0 0px 0px ${theme.glow}`, `0 0 10px 1px ${theme.glow}`, `0 0 0px 0px ${theme.glow}`]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className={`p-2 ${theme.iconBg} text-${color}-400 rounded-full border ${theme.iconBorder} relative inline-flex mb-4`}>
          {icon}
          
          {/* Pulsing animation */}
          <motion.div
            className={`absolute inset-0 rounded-full border border-${color}-500/40`}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <h3 className={`text-lg font-bold ${theme.title} mb-2 group-hover:text-${color}-50 transition-colors duration-300`}>
          {title}
          
          {/* Animated underline */}
          <motion.span 
            className={`block h-px bg-gradient-to-r from-transparent via-${color}-500/40 to-transparent mt-1 w-0`}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
          />
        </h3>
        
        <p className={`${theme.text} ${theme.hoverText} transition-colors duration-300 text-sm`}>{description}</p>
        
        {/* Tech decoration with pulsing effect */}
        <motion.div 
          className={`absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 ${theme.cornerHighlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{ 
            boxShadow: [`0 0 0px 0px ${theme.glow}`, `0 0 5px 1px ${theme.glow}`, `0 0 0px 0px ${theme.glow}`]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </DataFlowEffect>
    </motion.div>
  );
};

const LinaShowcase = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Convert to normalized coordinates (-1 to 1)
      const normalizedX = (clientX / windowWidth) * 2 - 1;
      const normalizedY = (clientY / windowHeight) * 2 - 1;
      
      setMousePosition({ x: normalizedX, y: normalizedY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Loading animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 800);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  // Enhanced TechGrid component
  const TechGrid = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid columns */}
      <div className="absolute w-full h-full grid grid-cols-12 gap-px opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={`col-${i}`} 
            className="border-r border-blue-300 h-full"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, i % 3 === 0 ? 0.3 : 0.1, 0.1],
              height: i % 4 === 0 ? ['100%', '105%', '100%'] : '100%'
            }}
            transition={{ 
              duration: 3 + i % 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      
      {/* Grid rows */}
      <div className="absolute w-full h-full grid grid-rows-12 gap-px opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={`row-${i}`} 
            className="border-b border-blue-300 w-full"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, i % 3 === 0 ? 0.3 : 0.1, 0.1],
              width: i % 4 === 0 ? ['100%', '102%', '100%'] : '100%'
            }}
            transition={{ 
              duration: 4 + i % 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.15
            }}
          />
        ))}
      </div>
      
      {/* Horizontal data streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`h-stream-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          style={{
            left: 0,
            width: '100%',
            top: `${10 + i * 10}%`,
            opacity: 0.3
          }}
          animate={{
            left: ['-100%', '200%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2.5
          }}
        />
      ))}
      
      {/* Digital nodes at grid intersections */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400/50"
          style={{
            top: `${Math.floor(Math.random() * 90) + 5}%`,
            left: `${Math.floor(Math.random() * 90) + 5}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.5, 0.8]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}
    </div>
  );

  // Demo scenario data
  const scenarioSteps = [
    { id: 1, title: "Threat Detection", description: "L.I.N.A. monitors cloud repository for suspicious activity" },
    { id: 2, title: "Analysis", description: "Multiple verification checks run to confirm threat validity" },
    { id: 3, title: "Notification", description: "Priority alert sent to the appropriate security team member" },
    { id: 4, title: "Response Tracking", description: "L.I.N.A. monitors response time and resolution metrics" }
  ];
  
  const [currentStep, setCurrentStep] = useState(0);
  
  // Auto advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev < scenarioSteps.length - 1 ? prev + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Loading overlay */}
      <AnimatePresence>
        {!loaded && (
          <motion.div 
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "brightness(2)",
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="mb-8"
            >
              <div className="text-4xl text-blue-300 font-bold">L.I.N.A.</div>
            </motion.div>

            {/* Loading progress */}
            <div className="relative w-64 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm mb-3">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
                initial={{ width: 0 }}
                animate={{
                  width: "100%",
                  backgroundPosition: ['0% center', '100% center']
                }}
                transition={{ 
                  width: { duration: 0.8, ease: "easeInOut" },
                  backgroundPosition: { 
                    duration: 1.5, 
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror" 
                  }
                }}
              />
            </div>
            
            {/* Initialization text */}
            <div className="h-6">
              <motion.div 
                className="mt-2 text-blue-400/80 font-mono text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Initializing security protocols...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative">
        <TechGrid />
        
        {/* Header section */}
        <header className="relative pt-12 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <GlowingBorder className="inline-block">
                  <div className="p-px bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-blue-800/40 rounded-md">
                    <div className="px-4 py-1 bg-black/80 rounded-md text-sm text-blue-400 uppercase tracking-wider font-medium backdrop-blur-sm">
                      Autonomous AI Notification System
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-4 relative"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-200 to-blue-300">
                  Meet <span className="text-blue-400">L.I.N.A.</span>
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-blue-200/70 mb-8 max-w-2xl font-light"
              >
                Logical Interceptor for Notification & Assurance - An advanced AI system that revolutionizes security alert management for defense contractors and enterprises
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center mb-8"
              >
                <GlowingBorder intensity={1.2}>
                  <a 
                    href="#demo" 
                    className="relative px-8 py-4 bg-gradient-to-r from-blue-900/80 to-purple-900/80 hover:from-blue-800/80 hover:to-purple-800/80 text-white font-bold rounded-md flex items-center justify-center shadow-lg shadow-blue-900/30 border border-blue-500/20 group transition-all duration-300 overflow-hidden backdrop-blur-sm"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">
                        <Eye size={18} className="text-blue-300 group-hover:text-white transition-colors duration-300" />
                      </span>
                      View Demo
                    </span>
                    
                    {/* Digital background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-800/0 via-blue-600/20 to-blue-800/0"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }}
                    />
                  </a>
                </GlowingBorder>
                
                <GlowingBorder intensity={0.8}>
                  <a 
                    href="#features" 
                    className="relative px-8 py-4 bg-black/30 border border-blue-500/30 hover:border-blue-400/60 hover:bg-black/50 text-blue-300 hover:text-blue-100 font-medium rounded-md transition-all duration-300 flex items-center group backdrop-blur-sm overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Features 
                      <motion.span
                        animate={{
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          repeatDelay: 2
                        }}
                        className="ml-2"
                      >
                        <ChevronRight size={18} />
                      </motion.span>
                    </span>
                    
                    {/* Subtle scan line */}
                    <motion.div
                      className="absolute left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
                      animate={{
                        y: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1
                      }}
                    />
                  </a>
                </GlowingBorder>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute top-10 right-10 opacity-20"
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              rotate: {
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              },
              opacity: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Bell size={32} className="text-blue-400" />
          </motion.div>
          
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        </header>
        
        {/* Key Benefits Section */}
        <section id="benefits" className="relative py-16 bg-gradient-to-b from-black to-gray-950">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <GlowingBorder className="inline-block">
                  <div className="p-px bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-blue-800/40 rounded-md">
                    <div className="px-4 py-1 bg-black/80 rounded-md text-sm text-blue-400 uppercase tracking-wider font-medium">
                      Key Benefits
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200%'
                }}
              >
                Why L.I.N.A. Transforms Security
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100/60 max-w-3xl mx-auto font-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Eliminate alert fatigue and dramatically improve response times
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Activity size={24} />}
                title="Reduced Alert Fatigue"
                description="Cuts false positives by 67% through multi-stage verification and contextual analysis"
                color="blue"
                delay={0}
              />
              <FeatureCard 
                icon={<Zap size={24} />}
                title="96% Faster Response"
                description="Critical vulnerabilities addressed in minutes instead of hours through targeted notifications"
                color="purple"
                delay={0.1}
              />
              <FeatureCard 
                icon={<Brain size={24} />}
                title="Behavioral Analysis"
                description="Uses adaptive learning to optimize notification timing and target the right team members"
                color="cyan"
                delay={0.2}
              />
              <FeatureCard 
                icon={<Shield size={24} />}
                title="Comprehensive Protection"
                description="Seamlessly monitors cloud repositories, network traffic, and authentication systems"
                color="blue"
                delay={0.3}
              />
              <FeatureCard 
                icon={<BarChart2 size={24} />}
                title="Actionable Metrics"
                description="Tracks response effectiveness and provides detailed security posture analytics"
                color="purple"
                delay={0.4}
              />
              <FeatureCard 
                icon={<MessageCircle size={24} />}
                title="Omnichannel Alerts"
                description="Delivers notifications through multiple channels to ensure critical alerts are never missed"
                color="cyan"
                delay={0.5}
              />
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section id="demo" className="py-20 bg-black relative overflow-hidden">
          <DataFlowEffect density={15}>
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-2 lg:order-1"
                >
                  <motion.div 
                    className="inline-block p-px bg-gradient-to-r from-blue-700/40 via-purple-500/40 to-blue-700/40 rounded-md mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="px-4 py-1 bg-black rounded-md text-sm text-blue-400 uppercase tracking-wider backdrop-blur-sm">
                      See L.I.N.A. in Action
                    </div>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="text-blue-400">Real-time</span> Threat Response
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-3/4 h-px bg-gradient-to-r from-blue-500/50 to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    />
                  </motion.h2>
                  
                  <motion.p 
                    className="text-blue-100/90 mb-6 text-lg font-light"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    When an API key is accidentally exposed, every second counts. See how L.I.N.A. detects threats, validates them, and alerts the right team members instantly.
                  </motion.p>
                  
                  <motion.div
                    className="border border-blue-700/30 bg-gray-900/30 rounded-lg p-6 mt-8"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-blue-300 font-bold mb-4 text-lg flex items-center">
                      <Clock className="mr-2" size={20} />
                      Response Time Comparison
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-medium mb-2">Without L.I.N.A.</h4>
                        <div className="text-3xl font-bold text-red-400 mb-1">6+ Hours</div>
                        <div className="text-red-300/70 text-sm">Average detection & response time</div>
                        <div className="text-red-300/70 text-sm mt-2">Potential cost: $245K+</div>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-medium mb-2">With L.I.N.A.</h4>
                        <div className="text-3xl font-bold text-green-400 mb-1">15 Minutes</div>
                        <div className="text-green-300/70 text-sm">Complete resolution time</div>
                        <div className="text-green-300/70 text-sm mt-2">Savings: $240K+</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center mt-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-blue-200 text-xs border border-blue-600">JS</div>
                      <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center text-purple-200 text-xs border border-purple-600">TK</div>
                      <div className="w-8 h-8 rounded-full bg-cyan-800 flex items-center justify-center text-cyan-200 text-xs border border-cyan-600">MR</div>
                    </div>
                    <div className="ml-4 text-blue-300/80 text-sm">
                      <span className="font-medium">94% of users</span> report dramatic alert management improvement
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="relative lg:h-[500px] order-1 lg:order-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Terminal demo interface */}
                  <motion.div
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="absolute inset-0 border border-blue-700/30 rounded-xl overflow-hidden bg-black backdrop-blur-lg">
                      {/* Terminal header */}
                      <div className="border-b border-blue-700/20 p-3 flex items-center justify-between bg-gray-900/80">
                        <div className="flex items-center space-x-2">
                          <motion.div 
                            className="w-3 h-3 rounded-full bg-blue-800"
                            animate={{
                              backgroundColor: ['rgb(30, 64, 175)', 'rgb(37, 99, 235)', 'rgb(30, 64, 175)'],
                              boxShadow: [
                                '0 0 0px 0px rgba(37,99,235,0)',
                                '0 0 5px 2px rgba(37,99,235,0.5)',
                                '0 0 0px 0px rgba(37,99,235,0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-3 h-3 rounded-full bg-purple-800"
                            animate={{
                              backgroundColor: ['rgb(126, 34, 206)', 'rgb(168, 85, 247)', 'rgb(126, 34, 206)'],
                              boxShadow: [
                                '0 0 0px 0px rgba(168,85,247,0)',
                                '0 0 5px 2px rgba(168,85,247,0.5)',
                                '0 0 0px 0px rgba(168,85,247,0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                          />
                          <motion.div 
                            className="w-3 h-3 rounded-full bg-cyan-800"
                            animate={{
                              backgroundColor: ['rgb(14, 116, 144)', 'rgb(34, 211, 238)', 'rgb(14, 116, 144)'],
                              boxShadow: [
                                '0 0 0px 0px rgba(34,211,238,0)',
                                '0 0 5px 2px rgba(34,211,238,0.5)',
                                '0 0 0px 0px rgba(34,211,238,0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                          />
                        </div>
                        <div className="text-xs text-blue-500 font-mono tracking-wider font-medium">L.I.N.A. INCIDENT RESPONSE</div>
                        <div className="flex items-center space-x-2">
                          <Server size={14} className="text-blue-500" />
                          <Shield size={14} className="text-blue-500" />
                        </div>
                      </div>
                      
                      {/* Demo content */}
                      <div className="p-6 h-full flex flex-col">
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center text-sm text-purple-400">
                              <motion.div
                                animate={{
                                  opacity: [1, 0.5, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-purple-500 mr-2"
                              />
                              Incident #RT-7842 | Priority: Critical
                            </div>
                            <div className="text-xs text-blue-400 font-mono">
                              {new Date().toLocaleTimeString()}
                            </div>
                          </div>
                          
                          <motion.div
                            className="p-3 bg-gray-900/50 border border-blue-700/30 rounded-lg mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <div className="text-sm text-blue-300 font-medium mb-1">Detected Issue:</div>
                            <div className="text-blue-100 font-mono text-sm bg-gray-950/70 p-2 rounded border border-gray-800 mb-2 overflow-x-auto">
                              <span className="text-red-400">API key leaked in public GitHub repository</span> - auth_key: k1_987x****************************
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <div className="text-blue-400">Repository: frontend/config.js</div>
                              <div className="text-blue-400">Detected: 6 minutes ago</div>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Steps visualization */}
                        <div className="flex-grow">
                          <div className="text-sm text-blue-300 font-medium mb-4">Incident Timeline:</div>
                          
                          <div className="relative">
                            {/* Progress line */}
                            <div className="absolute left-4 top-0 w-px h-full bg-gray-700"></div>
                            
                            {/* Steps */}
                            {scenarioSteps.map((step, index) => (
                              <motion.div
                                key={step.id}
                                className={`flex items-start mb-6 relative ${index <= currentStep ? 'opacity-100' : 'opacity-50'}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: index <= currentStep ? 1 : 0.5, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                              >
                                <motion.div 
                                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 mr-4 ${
                                    index < currentStep 
                                      ? 'bg-green-900/50 text-green-400 border border-green-700' 
                                      : index === currentStep 
                                        ? 'bg-blue-900/50 text-blue-400 border border-blue-700' 
                                        : 'bg-gray-900/50 text-gray-400 border border-gray-700'
                                  }`}
                                  animate={index === currentStep ? {
                                    boxShadow: [
                                      '0 0 0px 0px rgba(37,99,235,0)',
                                      '0 0 10px 2px rgba(37,99,235,0.3)',
                                      '0 0 0px 0px rgba(37,99,235,0)'
                                    ]
                                  } : {}}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  {index < currentStep ? (
                                    <Check size={16} />
                                  ) : (
                                    index + 1
                                  )}
                                </motion.div>
                                
                                <div className="flex-grow">
                                  <div className={`font-medium ${
                                    index <= currentStep ? 'text-blue-200' : 'text-gray-400'
                                  }`}>{step.title}</div>
                                  <div className={index <= currentStep ? 'text-blue-400/80' : 'text-gray-500'} style={{fontSize: '0.85rem'}}>
                                    {step.description}
                                  </div>
                                </div>
                                
                                {index < currentStep && (
                                  <div className="text-xs text-green-400 font-mono">
                                    Completed
                                  </div>
                                )}
                                
                                {index === currentStep && (
                                  <motion.div 
                                    className="text-xs text-blue-400 font-mono"
                                    animate={{
                                      opacity: [1, 0.5, 1]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    In progress...
                                  </motion.div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Status bar */}
                        <div className="mt-auto pt-4 border-t border-blue-900/30 flex justify-between items-center">
                          <div className="text-xs text-blue-400">Status: Active Incident</div>
                          <motion.div
                            animate={{
                              opacity: [1, 0.5, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center text-xs text-blue-400"
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            L.I.N.A. monitoring
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Advanced scanner animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-32"
                        animate={{
                          top: ["0%", "100%", "0%"],
                          opacity: [0, 0.2, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Decorative tech elements with glow effects */}
                  <motion.div 
                    className="absolute top-0 right-0 w-16 h-32 border-r-2 border-t-2 border-blue-600/20 -mr-4 -mt-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    animate={{
                      boxShadow: ["0 0 0px 0px rgba(37,99,235,0)", "0 0 5px 1px rgba(37,99,235,0.3)", "0 0 0px 0px rgba(37,99,235,0)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 w-16 h-32 border-l-2 border-b-2 border-blue-600/20 -ml-4 -mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    animate={{
                      boxShadow: ["0 0 0px 0px rgba(37,99,235,0)", "0 0 5px 1px rgba(37,99,235,0.3)", "0 0 0px 0px rgba(37,99,235,0)"]
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
          </DataFlowEffect>
        </section>
        
        {/* Features section */}
        <section id="features" className="py-20 bg-gradient-to-b from-gray-950 to-black relative">
          <TechGrid />
          
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <GlowingBorder className="inline-block">
                  <div className="p-px bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-blue-800/40 rounded-md">
                    <div className="px-4 py-1 bg-black/80 rounded-md text-sm text-blue-400 uppercase tracking-wider font-medium">
                      Core Features
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-6 relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200%'
                }}
              >
                How <span className="text-blue-400">L.I.N.A.</span> Works
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100/60 max-w-3xl mx-auto font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Advanced AI capabilities powering our notification system
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-900/30 to-black border border-blue-700/30 p-6 rounded-lg relative group overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 p-2 bg-blue-900/20 inline-flex rounded-lg border border-blue-700/30 text-blue-400">
                    <Brain size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-100 mb-3">AI-Powered Analysis</h3>
                  
                  <ul className="space-y-3 text-blue-300/80">
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-blue-500" />
                      <span>Context-aware neural networks identify genuine threats</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-blue-500" />
                      <span>Advanced pattern recognition reduces false positives</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-blue-500" />
                      <span>Continuous learning from response patterns</span>
                    </li>
                  </ul>
                </div>
                
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-700/30 p-6 rounded-lg relative group overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 p-2 bg-purple-900/20 inline-flex rounded-lg border border-purple-700/30 text-purple-400">
                    <Bell size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-purple-100 mb-3">Smart Notification System</h3>
                  
                  <ul className="space-y-3 text-purple-300/80">
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-purple-500" />
                      <span>Behavioral analysis targets the right stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-purple-500" />
                      <span>Prioritizes channels based on response patterns</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-purple-500" />
                      <span>Persistent follow-up until acknowledgment</span>
                    </li>
                  </ul>
                </div>
                
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-700/30 p-6 rounded-lg relative group overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 p-2 bg-cyan-900/20 inline-flex rounded-lg border border-cyan-700/30 text-cyan-400">
                    <Cpu size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-cyan-100 mb-3">Integration & Analytics</h3>
                  
                  <ul className="space-y-3 text-cyan-300/80">
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-cyan-500" />
                      <span>Seamless integration with existing security tools</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-cyan-500" />
                      <span>Real-time analytics dashboard with KPIs</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="mt-0.5 mr-2 flex-shrink-0 text-cyan-500" />
                      <span>Detailed response auditing for compliance</span>
                    </li>
                  </ul>
                </div>
                
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 p-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 border border-blue-700/30 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-2 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-blue-500/30"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(37,99,235,0)',
                          '0 0 15px 5px rgba(37,99,235,0.3)',
                          '0 0 0px 0px rgba(37,99,235,0)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center"
                    >
                      <Lock size={28} className="text-blue-400" />
                    </motion.div>
                  </motion.div>
                  <div className="text-4xl font-bold text-blue-300 mb-1">86.8% during initial testing</div>
                  <div className="text-blue-400/80">Detection Accuracy</div>
                </div>
                
                <div className="text-center p-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-2 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center border border-purple-500/30"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(147,51,234,0)',
                          '0 0 15px 5px rgba(147,51,234,0.3)',
                          '0 0 0px 0px rgba(147,51,234,0)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center"
                    >
                      <Zap size={28} className="text-purple-400" />
                    </motion.div>
                  </motion.div>
                  <div className="text-4xl font-bold text-purple-300 mb-1">96%</div>
                  <div className="text-purple-400/80">Faster Response Time</div>
                </div>
                
                <div className="text-center p-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-2 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/30"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(8,145,178,0)',
                          '0 0 15px 5px rgba(8,145,178,0.3)',
                          '0 0 0px 0px rgba(8,145,178,0)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="w-12 h-12 rounded-full bg-cyan-900/50 flex items-center justify-center"
                    >
                      <Shield size={28} className="text-cyan-400" />
                    </motion.div>
                  </motion.div>
                  <div className="text-4xl font-bold text-cyan-300 mb-1">67% when trained on generalized datasets</div>
                  <div className="text-cyan-400/80">Fewer False Positives</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-black relative overflow-hidden">
          {/* Futuristic tech grid background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-blue-950/5 to-gray-900/20"></div>
            <div className="absolute inset-0 grid grid-cols-12 gap-4">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="border-r border-blue-500/5 h-full"
                  animate={{
                    borderColor: i % 3 === 0 ? ['rgba(37,99,235,0.05)', 'rgba(37,99,235,0.1)', 'rgba(37,99,235,0.05)'] : 'rgba(37,99,235,0.05)'
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="border-b border-blue-500/5 w-full"
                  animate={{
                    borderColor: i % 2 === 0 ? ['rgba(37,99,235,0.05)', 'rgba(37,99,235,0.1)', 'rgba(37,99,235,0.05)'] : 'rgba(37,99,235,0.05)'
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Advanced scan line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent h-32"
            animate={{
              top: ["-10%", "110%"],
              opacity: [0, 0.2, 0]
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
              <GlowingBorder intensity={1.5} className="block rounded-xl">
                <div className="text-center p-10 border border-blue-700/20 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/80 relative overflow-hidden shadow-2xl backdrop-blur-sm">
                  {/* Tech decoration effects */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                  <DigitalOrnament type="corner" position="top-right" className="w-10 h-10" />
                  <DigitalOrnament type="corner" position="bottom-left" className="w-10 h-10 rotate-180" />
                  
                  {/* Digital circuit pattern background */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                    <motion.div
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundImage: 'url("/images/circuit-pattern.svg")',
                        backgroundSize: '600px',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                  
                  <motion.div 
                    className="mb-6 p-3 bg-blue-900/20 inline-block rounded-full border border-blue-700/30 relative"
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(37,99,235,0)',
                        '0 0 20px 5px rgba(37,99,235,0.15)',
                        '0 0 0px 0px rgba(37,99,235,0)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Bell size={30} className="text-blue-300" />
                    
                    {/* Pulsing rings effect */}
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={`cta-ring-${i}`}
                        className="absolute inset-0 rounded-full border border-blue-500/40"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-6 relative inline-block"
                    animate={{
                      backgroundPosition: ['0% center', '100% center', '0% center']
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200%'
                    }}
                  >
                    Ready to transform your <span className="text-blue-400">security alert management</span>?
                  </h2>
                  
                  <p className="text-xl text-blue-100/60 mb-8 font-light">
                    Contact our team to schedule a demonstration of L.I.N.A.'s capabilities.
                  </p>
                  
                  <GlowingBorder intensity={1.2} className="inline-block">
                    <a 
                      href="/contact" 
                      className="relative px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-800 hover:to-blue-900 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-blue-900/20 group border border-blue-700/30 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Request L.I.N.A. Demo
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
                      </span>
                      
                      {/* Animated gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-700/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Digital scan effect */}
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400/15 to-transparent"
                        animate={{
                          y: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </a>
                  </GlowingBorder>
                </div>
              </GlowingBorder>
            </motion.div>
          </div>
        </section>
        
        {/* Technical Specifications section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
          <TechGrid />
          
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <GlowingBorder className="inline-block">
                  <div className="p-px bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-blue-800/40 rounded-md">
                    <div className="px-4 py-1 bg-black/80 rounded-md text-sm text-blue-400 uppercase tracking-wider font-medium">
                      Technical Specifications
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200%'
                }}
              >
                Advanced Technology Stack
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-900/10 to-black border border-blue-700/20 rounded-lg p-6 relative overflow-hidden"
              >
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" />
                
                <h3 className="text-xl font-bold text-blue-200 mb-6 flex items-center">
                  <Cpu className="mr-3 text-blue-400" size={20} />
                  System Architecture
                </h3>
                
                <div className="space-y-4">
                  <div className="border border-blue-800/30 rounded-lg p-4 bg-blue-900/10">
                    <div className="text-blue-200 font-medium mb-1">Core AI Engine</div>
                    <p className="text-blue-300/70 text-sm">Advanced neural networks optimized for threat pattern recognition and behavioral analysis</p>
                  </div>
                  
                  <div className="border border-blue-800/30 rounded-lg p-4 bg-blue-900/10">
                    <div className="text-blue-200 font-medium mb-1">Deployment Options</div>
                    <p className="text-blue-300/70 text-sm">Available as cloud-based SaaS or on-premises solution for high-security environments</p>
                  </div>
                  
                  <div className="border border-blue-800/30 rounded-lg p-4 bg-blue-900/10">
                    <div className="text-blue-200 font-medium mb-1">Processing Capacity</div>
                    <p className="text-blue-300/70 text-sm">Handles 100K+ events per second with sub-10ms response time for critical alerts</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/10 to-black border border-purple-700/20 rounded-lg p-6 relative overflow-hidden"
              >
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" />
                
                <h3 className="text-xl font-bold text-purple-200 mb-6 flex items-center">
                  <Lock className="mr-3 text-purple-400" size={20} />
                  Security & Compliance
                </h3>
                
                <div className="space-y-4">
                  <div className="border border-purple-800/30 rounded-lg p-4 bg-purple-900/10">
                    <div className="text-purple-200 font-medium mb-1">Data Encryption</div>
                    <p className="text-purple-300/70 text-sm">End-to-end encryption with quantum-resistant algorithms for all data in transit and at rest</p>
                  </div>
                  
                  <div className="border border-purple-800/30 rounded-lg p-4 bg-purple-900/10">
                    <div className="text-purple-200 font-medium mb-1">Compliance</div>
                    <p className="text-purple-300/70 text-sm">CMMC 2.0 Level 3 compliant, FedRAMP authorized, and NIST 800-53 controls implemented</p>
                  </div>
                  
                  <div className="border border-purple-800/30 rounded-lg p-4 bg-purple-900/10">
                    <div className="text-purple-200 font-medium mb-1">Audit Trail</div>
                    <p className="text-purple-300/70 text-sm">Comprehensive audit logging and reporting for compliance and forensic analysis</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-900/10 to-black border border-cyan-700/20 rounded-lg p-6 relative overflow-hidden lg:col-span-2"
              >
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" />
                
                <h3 className="text-xl font-bold text-cyan-200 mb-6 flex items-center">
                  <Server className="mr-3 text-cyan-400" size={20} />
                  Integration Capabilities
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-cyan-800/30 rounded-lg p-4 bg-cyan-900/10">
                    <div className="text-cyan-200 font-medium mb-1">API Connectivity</div>
                    <p className="text-cyan-300/70 text-sm">RESTful and GraphQL APIs with comprehensive SDK support for custom integrations</p>
                  </div>
                  
                  <div className="border border-cyan-800/30 rounded-lg p-4 bg-cyan-900/10">
                    <div className="text-cyan-200 font-medium mb-1">SIEM Integration</div>
                    <p className="text-cyan-300/70 text-sm">Out-of-the-box connectors for major SIEM platforms including Splunk, IBM QRadar, and Microsoft Sentinel</p>
                  </div>
                  
                  <div className="border border-cyan-800/30 rounded-lg p-4 bg-cyan-900/10">
                    <div className="text-cyan-200 font-medium mb-1">Notification Channels</div>
                    <p className="text-cyan-300/70 text-sm">Multi-channel delivery including email, SMS, push, Slack, Teams, and custom webhooks</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LinaShowcase;