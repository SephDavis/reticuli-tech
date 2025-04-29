import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
  Cpu,
  Globe,
  Code,
  Database,
  Network,
  SearchCode,
  TerminalSquare
} from 'lucide-react';

// Enhanced DataFlowEffect with dynamic particle movement
const DataFlowEffect = ({ children, density = 10, color = "blue" }) => {
  const colorVariants = {
    blue: "via-blue-400/20",
    cyan: "via-cyan-400/20",
    purple: "via-purple-400/20",
    multi: "via-gradient-pulse"
  };

  const themeColor = colorVariants[color] || colorVariants.blue;
  
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {/* Vertical streams */}
        {[...Array(density)].map((_, i) => (
          <motion.div
            key={`flow-v-${i}`}
            className={`absolute bg-gradient-to-b from-transparent ${themeColor} to-transparent`}
            style={{
              width: '1px',
              height: `${20 + Math.random() * 40}%`,
              left: `${(100 / density) * i + (Math.random() * 5)}%`,
              top: '-20%',
            }}
            animate={{
              top: ['100%', '-20%'],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Horizontal streams */}
        {[...Array(Math.floor(density/2))].map((_, i) => (
          <motion.div
            key={`flow-h-${i}`}
            className={`absolute bg-gradient-to-r from-transparent ${themeColor} to-transparent`}
            style={{
              height: '1px',
              width: `${30 + Math.random() * 30}%`,
              top: `${(100 / (density/2)) * i + (Math.random() * 5)}%`,
              left: '-20%',
            }}
            animate={{
              left: ['100%', '-30%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3
            }}
          />
        ))}
        
        {/* Random floating particles */}
        {[...Array(density)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute bg-blue-400/50 rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? 100 : -100],
              x: [0, Math.random() > 0.5 ? 50 : -50],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

// Enhanced GlowingBorder with pulsing animation
const GlowingBorder = ({ children, intensity = 1, className = "", color = "blue" }) => {
  const colorVariants = {
    blue: "linear-gradient(90deg, rgba(37,99,235,0.1), rgba(59,130,246,0.1), rgba(37,99,235,0.1))",
    purple: "linear-gradient(90deg, rgba(126,34,206,0.1), rgba(147,51,234,0.1), rgba(126,34,206,0.1))",
    cyan: "linear-gradient(90deg, rgba(8,145,178,0.1), rgba(34,211,238,0.1), rgba(8,145,178,0.1))",
    multi: "linear-gradient(90deg, rgba(37,99,235,0.1), rgba(126,34,206,0.1), rgba(6,182,212,0.1), rgba(37,99,235,0.1))"
  };

  const gradientBg = colorVariants[color] || colorVariants.blue;
  
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="absolute inset-0 rounded-lg"
        style={{ background: gradientBg }}
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          backgroundPosition: ['0% center', '100% center', '0% center'],
          boxShadow: [
            `0 0 0px 0px rgba(37,99,235,0)`,
            `0 0 15px 2px rgba(37,99,235,${0.1 * intensity})`,
            `0 0 0px 0px rgba(37,99,235,0)`
          ]
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
};

// Enhanced DigitalOrnament with more animation types
const DigitalOrnament = ({ type = "corner", position = "top-right", className = "", color = "blue" }) => {
  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0"
  };
  
  const colorVariants = {
    blue: "border-blue-400/30 text-blue-400/50",
    purple: "border-purple-400/30 text-purple-400/50",
    cyan: "border-cyan-400/30 text-cyan-400/50",
    multi: "border-gradient text-blue-400/50"
  };
  
  const borderColor = colorVariants[color] || colorVariants.blue;
  
  const types = {
    "corner": (
      <motion.div 
        className={`absolute w-8 h-8 border-t-2 border-r-2 ${borderColor} ${positionClasses[position]} ${className}`}
        animate={{
          opacity: [0.5, 1, 0.5],
          borderWidth: ["2px", "3px", "2px"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    ),
    "bracket": (
      <motion.div 
        className={`absolute w-4 h-full border-t-2 border-b-2 border-r-2 ${borderColor} ${positionClasses[position]} ${className}`}
        animate={{
          opacity: [0.5, 1, 0.5],
          width: ["16px", "20px", "16px"]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    ),
    "dot": (
      <motion.div 
        className={`absolute w-2 h-2 rounded-full bg-${color}-400/50 ${positionClasses[position]} ${className}`}
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.5, 1],
          boxShadow: [
            `0 0 0px 0px rgba(37,99,235,0.3)`,
            `0 0 10px 3px rgba(37,99,235,0.6)`,
            `0 0 0px 0px rgba(37,99,235,0.3)`
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    ),
    "circuit": (
      <motion.div 
        className={`absolute w-12 h-12 ${positionClasses[position]} ${className} overflow-hidden`}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <motion.div
          className={`w-full h-full ${borderColor} opacity-50`}
          style={{
            backgroundImage: 'url("/images/circuit-pattern.svg")',
            backgroundSize: '100%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    )
  };
  
  return types[type] || types.corner;
};

// Enhanced animated feature card
const FeatureCard = ({ icon, title, description, color = "blue", delay = 0 }) => {
  // Color variants for different items
  const colorVariants = {
    blue: {
      background: "from-blue-900/30 to-black",
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
      background: "from-cyan-900/30 to-black",
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
      background: "from-purple-900/30 to-black",
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
      className={`bg-gradient-to-br ${theme.background} border ${theme.border} p-6 rounded-lg transition-all duration-500 relative group overflow-hidden h-full`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        translateY: -10,
        boxShadow: `0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 ${theme.glow}`,
      }}
    >
      <DataFlowEffect density={5} color={color}>
        <div className={`absolute inset-0 bg-gradient-to-b from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
        
        <motion.div 
          className={`absolute inset-0 border border-${color}-400/0 rounded-lg group-hover:border-${color}-400/20 transition-all duration-500`}
          animate={{ 
            boxShadow: [`0 0 0px 0px ${theme.glow}`, `0 0 10px 1px ${theme.glow}`, `0 0 0px 0px ${theme.glow}`]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className={`p-2 ${theme.iconBg} rounded-full border ${theme.iconBorder} relative inline-flex mb-4`}>
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          >
            {icon}
          </motion.div>
          
          {/* Pulsing animation */}
          <motion.div
            className={`absolute inset-0 rounded-full border border-${color}-500/40`}
            animate={{
              scale: [1, 1.6, 1],
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
          
          {/* Animated underline with glow */}
          <motion.span 
            className={`block h-px bg-gradient-to-r from-transparent via-${color}-500/40 to-transparent mt-1`}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            animate={{
              boxShadow: [
                `0 0 0px 0px ${theme.glow}`,
                `0 0 5px 1px ${theme.glow}`,
                `0 0 0px 0px ${theme.glow}`
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </h3>
        
        <motion.p 
          className={`${theme.text} ${theme.hoverText} transition-colors duration-300 text-sm`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>
        
        {/* Tech decoration with pulsing effect */}
        <motion.div 
          className={`absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 ${theme.cornerHighlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{ 
            boxShadow: [`0 0 0px 0px ${theme.glow}`, `0 0 5px 1px ${theme.glow}`, `0 0 0px 0px ${theme.glow}`]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div 
          className={`absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 ${theme.cornerHighlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{ 
            boxShadow: [`0 0 0px 0px ${theme.glow}`, `0 0 5px 1px ${theme.glow}`, `0 0 0px 0px ${theme.glow}`]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </DataFlowEffect>
    </motion.div>
  );
};

// Enhanced TechGrid component with more complex animations
const TechGrid = ({ intensity = 1, color = "blue" }) => {
  const colorVariants = {
    blue: {
      border: "border-blue-300",
      glow: "rgba(37,99,235,0.2)",
      beam: "via-blue-400/30",
      node: "bg-blue-400/50"
    },
    purple: {
      border: "border-purple-300",
      glow: "rgba(147,51,234,0.2)",
      beam: "via-purple-400/30",
      node: "bg-purple-400/50"
    },
    cyan: {
      border: "border-cyan-300",
      glow: "rgba(8,145,178,0.2)",
      beam: "via-cyan-400/30",
      node: "bg-cyan-400/50"
    },
    multi: {
      border: "border-gradient",
      glow: "rgba(37,99,235,0.2)",
      beam: "via-gradient-pulse",
      node: "bg-gradient-pulse"
    }
  };
  
  const theme = colorVariants[color] || colorVariants.blue;
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-90">
      {/* Grid columns */}
      <div className="absolute w-full h-full grid grid-cols-12 gap-px opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={`col-${i}`} 
            className={`border-r ${theme.border} h-full`}
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, i % 3 === 0 ? 0.3 * intensity : 0.1, 0.1],
              height: i % 4 === 0 ? ['100%', '105%', '100%'] : '100%',
              boxShadow: i % 5 === 0 ? [
                `0 0 0px 0px ${theme.glow}`,
                `0 0 5px 1px ${theme.glow}`,
                `0 0 0px 0px ${theme.glow}`
              ] : "none"
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
            className={`border-b ${theme.border} w-full`}
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, i % 3 === 0 ? 0.3 * intensity : 0.1, 0.1],
              width: i % 4 === 0 ? ['100%', '102%', '100%'] : '100%',
              boxShadow: i % 5 === 0 ? [
                `0 0 0px 0px ${theme.glow}`,
                `0 0 5px 1px ${theme.glow}`,
                `0 0 0px 0px ${theme.glow}`
              ] : "none"
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
          className={`absolute h-px bg-gradient-to-r from-transparent ${theme.beam} to-transparent`}
          style={{
            left: 0,
            width: '100%',
            top: `${10 + i * 10}%`,
            opacity: 0.3 * intensity,
          }}
          animate={{
            left: ["-100%", "200%"],
            opacity: [0, 0.3 * intensity, 0],
            boxShadow: [
              `0 0 0px 0px ${theme.glow}`,
              `0 0 8px 2px ${theme.glow}`,
              `0 0 0px 0px ${theme.glow}`
            ]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2.5
          }}
        />
      ))}
      
      {/* Vertical data streams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`v-stream-${i}`}
          className={`absolute w-px bg-gradient-to-b from-transparent ${theme.beam} to-transparent`}
          style={{
            top: 0,
            height: '100%',
            left: `${15 + i * 15}%`,
            opacity: 0.2 * intensity,
          }}
          animate={{
            top: ["100%", "-100%"],
            opacity: [0, 0.2 * intensity, 0],
            boxShadow: [
              `0 0 0px 0px ${theme.glow}`,
              `0 0 8px 2px ${theme.glow}`,
              `0 0 0px 0px ${theme.glow}`
            ]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5
          }}
        />
      ))}
      
      {/* Digital nodes at grid intersections */}
      {[...Array(10 * intensity)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className={`absolute w-1 h-1 rounded-full ${theme.node}`}
          style={{
            top: `${Math.floor(Math.random() * 90) + 5}%`,
            left: `${Math.floor(Math.random() * 90) + 5}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.5, 0.8],
            boxShadow: [
              `0 0 0px 0px ${theme.glow}`,
              `0 0 8px 2px ${theme.glow}`,
              `0 0 0px 0px ${theme.glow}`
            ]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}
      
      {/* Diagonal data beams */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`diagonal-${i}`}
          className={`absolute h-px bg-gradient-to-r from-transparent ${theme.beam} to-transparent`}
          style={{
            width: '150%',
            top: '100%',
            left: '-25%',
            transformOrigin: 'center',
            opacity: 0.15 * intensity,
            transform: `rotate(${45 + i * 30}deg)`,
          }}
          animate={{
            top: ["100%", "-100%"],
            opacity: [0, 0.15 * intensity, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}
    </div>
  );
};

// Animated Scanner Effect
const ScannerEffect = ({ color = "blue" }) => {
  const colorMap = {
    blue: "via-blue-400/5",
    purple: "via-purple-400/5",
    cyan: "via-cyan-400/5"
  };
  
  const scanColor = colorMap[color] || colorMap.blue;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <motion.div
        className={`absolute inset-x-0 bg-gradient-to-b from-transparent ${scanColor} to-transparent h-32 w-full`}
        animate={{
          top: ["-10%", "110%"],
          opacity: [0, 0.12, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className={`absolute inset-x-0 bg-gradient-to-b from-transparent ${scanColor} to-transparent h-24 w-full`}
        animate={{
          top: ["-10%", "110%"],
          opacity: [0.03, 0.12, 0.03]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
      
      <motion.div
        className={`absolute inset-y-0 bg-gradient-to-r from-transparent ${scanColor} to-transparent w-32 h-full`}
        animate={{
          left: ["-10%", "110%"],
          opacity: [0.02, 0.08, 0.02]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />
    </div>
  );
};

// Binary code background animation
const BinaryBackground = ({ opacity = 0.05 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`binary-line-${i}`}
          className="absolute font-mono text-blue-500 text-xs leading-none whitespace-pre"
          style={{ top: `${i * 7}%` }}
          animate={{
            x: i % 2 === 0 ? [0, -100, 0] : [0, 100, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 20 + i % 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {Array(100).fill().map(() => Math.random() > 0.5 ? '1' : '0').join('')}
        </motion.div>
      ))}
    </div>
  );
};

// Digital Glitch Effect Component
const GlitchEffect = ({ children, intensity = 1 }) => {
  return (
    <div className="relative inline-block">
      <motion.div
        className="relative z-10"
        animate={{
          x: [0, -2, 0, 2, 0],
          opacity: [1, 0.8, 1]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 5 / intensity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 text-blue-400/30"
        animate={{
          x: [0, 3, 0, -3, 0],
          y: [0, 1, 0, -1, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 7 / intensity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 text-red-400/20"
        animate={{
          x: [0, -4, 0, 4, 0],
          y: [0, -1, 0, 1, 0],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 10 / intensity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// TypeWriter effect for text animation
const TypewriterText = ({ text, className, delay = 0, speed = 40 }) => {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef(null);
  const indexRef = useRef(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayText(prev => prev + text.charAt(indexRef.current));
          indexRef.current++;
        } else {
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay);
    
    return () => {
      clearTimeout(timer);
      clearInterval(intervalRef.current);
    };
  }, [text, delay, speed]);
  
  return <span className={className}>{displayText}</span>;
};

// Main component with highly animated elements
const LinaShowcase = () => {
  // State management
  const [activeTab, setActiveTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);
  const controls = useAnimation();
  
  // Motion values for dynamic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  // Parallax effect values
  const parallaxFactor = 0.05;
  const textX = useTransform(springX, value => value * parallaxFactor);
  const textY = useTransform(springY, value => value * parallaxFactor);
  
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
      mouseX.set(normalizedX * 100);
      mouseY.set(normalizedY * 100);
    };
    
    // Handle scroll for parallax and reveal effects
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Loading animation sequence
    const sequence = async () => {
      await controls.start({ opacity: 0.3, scale: 0.96 });
      await controls.start({ opacity: 0.6, scale: 0.98, transition: { duration: 0.4 } });
      await controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
      
      const loadTimer = setTimeout(() => {
        setLoaded(true);
      }, 1000);
      
      return () => clearTimeout(loadTimer);
    };
    
    sequence();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY, controls]);
  
  // Demo scenario data with more steps
  const scenarioSteps = [
    { id: 1, title: "Threat Detection", description: "L.I.N.A. monitors cloud repository for suspicious activity" },
    { id: 2, title: "Initial Analysis", description: "Automated first-pass verification to filter false positives" },
    { id: 3, title: "Deep Analysis", description: "Neural network performs context-aware threat assessment" },
    { id: 4, title: "Stakeholder Identification", description: "Behavioral analysis determines optimal responder" },
    { id: 5, title: "Multi-channel Notification", description: "Priority alert sent through most effective channels" },
    { id: 6, title: "Response Tracking", description: "Monitors resolution process with adaptive follow-up" }
  ];
  
  const [currentStep, setCurrentStep] = useState(0);
  
  // Auto advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev < scenarioSteps.length - 1 ? prev + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // 3D depth sensation for UI elements based on mouse position
  const calculateDepthTransform = (depth = 1) => {
    const { x, y } = mousePosition;
    const transform = `translate3d(${x * depth * 15}px, ${y * depth * 15}px, 0)`;
    return transform;
  };
  
  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        damping: 20, 
        stiffness: 250,
        duration: 0.8 
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Advanced loading sequence */}
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
              className="mb-8 relative"
            >
              <div className="text-4xl text-blue-300 font-bold flex items-center space-x-2">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Bell size={40} className="text-blue-400" />
                </motion.div>
                <motion.span
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200%',
                    backgroundImage: 'linear-gradient(90deg, #60a5fa, #818cf8, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  L.I.N.A.
                </motion.span>
              </div>
              
              {/* Logo glow effect */}
              <motion.div
                className="absolute -inset-8 rounded-full blur-md z-0"
                animate={{ 
                  background: [
                    'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(0,0,0,0) 70%)',
                    'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(0,0,0,0) 80%)',
                    'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(0,0,0,0) 70%)'
                  ],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Advanced loading progress */}
            <div className="relative w-64 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm mb-3">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
                initial={{ width: 0 }}
                animate={{
                  width: "100%",
                  backgroundPosition: ['0% center', '100% center']
                }}
                transition={{ 
                  width: { duration: 1.5, ease: "easeInOut" },
                  backgroundPosition: { 
                    duration: 1.5, 
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror" 
                  }
                }}
              />
              
              {/* Digital particles effect over progress bar */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute top-0 w-1 h-full bg-blue-300/90"
                  initial={{ left: 0, opacity: 0 }}
                  animate={{
                    left: ['0%', '100%'],
                    opacity: [0, 1, 0],
                    height: ['30%', '100%', '30%']
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                />
              ))}
            </div>
            
            {/* Initialization text with typewriter effect */}
            <div className="h-6">
              <motion.div 
                className="mt-2 text-blue-400/80 font-mono text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <TypewriterText 
                  text="Initializing security protocols... Running environment scan..." 
                  delay={300}
                />
              </motion.div>
            </div>
            
            {/* Binary backdrop */}
            <BinaryBackground opacity={0.05} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ultra-modern hero section with 3D and depth effects */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <TechGrid intensity={1.5} color="multi" />
        <ScannerEffect color="blue" />
        <BinaryBackground opacity={0.03} />
        
        {/* Dynamic gradient overlay with interactive response */}
        <motion.div 
          className="absolute inset-0 bg-gradient-radial"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)`
          }}
          animate={{
            opacity: [0.9, 0.95, 0.9]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 z-20 relative py-16">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ 
              x: textX, 
              y: textY,
              perspective: 1000
            }}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block mb-0 p-1 border border-blue-500/30 rounded-full relative overflow-hidden backdrop-blur-sm"
            >
              <div className="text-xs uppercase tracking-widest text-blue-400 bg-black/80 px-6 py-1.5 rounded-full font-medium">
                <GlitchEffect intensity={0.5}>
                  An AI Security System Designed To Get Results
                </GlitchEffect>
              </div>
              
              {/* Digital circuit effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'url("/images/circuit-pattern.svg")',
                  backgroundSize: '400px',
                  opacity: 0.1
                }}
              />
              
              {/* Glowing accent */}
              <motion.div
                className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent skew-x-30 pointer-events-none"
                animate={{
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-12 mb-4 relative"
              style={{ transform: calculateDepthTransform(0.2) }}
            >
              <motion.div 
                className="mx-auto"
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 10, 0, -10, 0],
                  rotateX: [0, 5, 0, -5, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                  rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
              >
                <motion.div
                  className="mx-auto p-8 rounded-full bg-blue-900/10 w-48 h-48 flex items-center justify-center relative"
                  animate={{
                    boxShadow: [
                      '0 0 0px 0px rgba(37,99,235,0)',
                      '0 0 30px 10px rgba(37,99,235,0.3)',
                      '0 0 0px 0px rgba(37,99,235,0)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute w-full h-full rounded-full border-2 border-blue-500/20"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  
                  <motion.div
                    className="absolute w-full h-full rounded-full border-2 border-blue-500/10 border-dashed"
                    animate={{
                      rotate: [360, 0],
                      scale: [0.9, 0.95, 0.9]
                    }}
                    transition={{
                      rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                  />
                  
                  <motion.div
                    className="text-blue-400"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotateY: [0, 360]
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      rotateY: { duration: 6, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <Bell size={64} />
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Orbiting particles */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-blue-400/50"
                    style={{
                      x, y,
                      translateX: '-50%',
                      translateY: '-50%'
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                      boxShadow: [
                        '0 0 0px 0px rgba(37,99,235,0)',
                        '0 0 10px 2px rgba(37,99,235,0.5)',
                        '0 0 0px 0px rgba(37,99,235,0)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                );
              })}
              
              {/* Circular data paths */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full border border-blue-500/10"
                style={{
                  translateX: '-50%',
                  translateY: '-50%'
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight mb-0 relative"
            >
              <GlitchEffect>
                <motion.span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-200 to-blue-300"
                  animate={{
                    backgroundPosition: ['0% center', '200% center', '0% center']
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200%'
                  }}
                >
                  Meet L.I.N.A.
                </motion.span>
              </GlitchEffect>
              
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-lg -z-10 opacity-50 blur-xl"
                animate={{
                  background: [
                    'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(0,0,0,0) 70%)',
                    'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(0,0,0,0) 70%)',
                    'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(0,0,0,0) 70%)'
                  ],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.h1>
            
            <motion.div variants={itemVariants} className="relative">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-1">
                Logical Interceptor for Notification & Assurance
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100/90 mb-4 backdrop-blur-sm font-light"
            >
              The advanced AI notification system for mission-critical security environments
              
              {/* Text hover effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
              />
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            >
              <GlowingBorder intensity={1.2} color="blue">
                <motion.a 
                  href="#demo"
                  className="relative px-8 py-4 bg-gradient-to-r from-blue-900/80 to-blue-900/80 hover:from-blue-800/80 hover:to-blue-800/80 text-white font-bold rounded-md flex items-center justify-center shadow-lg shadow-blue-900/30 border border-blue-500/20 group transition-all duration-300 overflow-hidden backdrop-blur-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">
                      <motion.div
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Eye size={18} className="text-blue-300 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
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
                  
                  {/* Digital data lines */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`line-${i}`}
                      className="absolute h-[1px] bg-blue-400/40 w-full"
                      style={{
                        top: `${20 * (i + 1)}%`
                      }}
                      animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 0.5, 0],
                        left: ['0%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.a>
              </GlowingBorder>
              
              <GlowingBorder intensity={0.8} color="purple">
                <motion.a 
                  href="#features" 
                  className="relative px-8 py-4 bg-black/30 border border-blue-500/30 hover:border-blue-400/60 hover:bg-black/50 text-blue-300 hover:text-blue-100 font-medium rounded-md transition-all duration-300 flex items-center group backdrop-blur-sm overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
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
                </motion.a>
              </GlowingBorder>
            </motion.div>
            
            {/* Animated tech indicators */}
            <motion.div 
              className="absolute bottom-10 left-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <div className="flex space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-blue-900 relative"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-blue-400 rounded-full"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                        boxShadow: [
                          '0 0 0px 0px rgba(37,99,235,0)',
                          '0 0 10px 2px rgba(37,99,235,0.5)',
                          '0 0 0px 0px rgba(37,99,235,0)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section with interactive elements */}
      <section id="benefits" className="relative py-16 bg-gradient-to-b from-black to-gray-950">
        <TechGrid intensity={1} color="blue" />
        <ScannerEffect color="blue" />
        
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <GlowingBorder className="inline-block" color="blue">
                <div className="p-px bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-blue-800/40 rounded-md">
                  <div className="px-4 py-1 bg-black/80 rounded-md text-sm text-blue-400 uppercase tracking-wider font-medium">
                    <GlitchEffect intensity={0.5}>Key Benefits</GlitchEffect>
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
              <GlitchEffect>Why L.I.N.A. Transforms Security</GlitchEffect>
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
          
          {/* Animated stats counter section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 p-8 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 border border-blue-700/30 rounded-lg relative overflow-hidden"
          >
            <DataFlowEffect density={10} color="multi">
              <DigitalOrnament type="circuit" position="top-right" color="blue" />
              <DigitalOrnament type="circuit" position="bottom-left" color="blue" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="text-center p-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-blue-500/30"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(37,99,235,0)',
                          '0 0 15px 5px rgba(37,99,235,0.3)',
                          '0 0 0px 0px rgba(37,99,235,0)'
                        ],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        boxShadow: { duration: 3, repeat: Infinity },
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                      }}
                      className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center"
                    >
                      <Lock size={24} className="text-blue-400" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl font-bold text-blue-300 mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <CounterAnimation from={0} to={99.8} suffix="%" duration={2.5} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-blue-400/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Detection Accuracy
                  </motion.div>
                </div>
                
                <div className="text-center p-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.9,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center border border-purple-500/30"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(147,51,234,0)',
                          '0 0 15px 5px rgba(147,51,234,0.3)',
                          '0 0 0px 0px rgba(147,51,234,0)'
                        ],
                        rotate: [0, -360]
                      }}
                      transition={{ 
                        boxShadow: { duration: 3, repeat: Infinity, delay: 0.5 },
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                      }}
                      className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center"
                    >
                      <Zap size={24} className="text-purple-400" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl font-bold text-purple-300 mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <CounterAnimation from={0} to={96} suffix="%" duration={2} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-purple-400/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    Faster Response Time
                  </motion.div>
                </div>
                
                <div className="text-center p-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/30"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(8,145,178,0)',
                          '0 0 15px 5px rgba(8,145,178,0.3)',
                          '0 0 0px 0px rgba(8,145,178,0)'
                        ],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        boxShadow: { duration: 3, repeat: Infinity, delay: 1 },
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                      }}
                      className="w-12 h-12 rounded-full bg-cyan-900/50 flex items-center justify-center"
                    >
                      <Shield size={24} className="text-cyan-400" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl font-bold text-cyan-300 mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <CounterAnimation from={0} to={67} suffix="%" duration={1.5} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-cyan-400/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    Fewer False Positives
                  </motion.div>
                </div>
              </div>
              
              {/* Animated scan line */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full w-full"
                animate={{
                  top: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2
                }}
              />
            </DataFlowEffect>
          </motion.div>
        </div>
      </section>

      {/* Demo Section with advanced animated terminal */}
      <section id="demo" className="py-20 bg-black relative overflow-hidden">
        <TechGrid intensity={0.8} color="multi" />
        <ScannerEffect color="blue" />
        <BinaryBackground opacity={0.02} />
        
        <DataFlowEffect density={15} color="multi">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                className="order-2 lg:order-1"
              >
                <motion.div 
                  className="inline-block p-px bg-gradient-to-r from-blue-700/40 via-purple-500/40 to-blue-700/40 rounded-md mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px 0px rgba(37,99,235,0)',
                      '0 0 10px 2px rgba(37,99,235,0.2)',
                      '0 0 0px 0px rgba(37,99,235,0)'
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 3, repeat: Infinity }
                  }}
                >
                  <div className="px-4 py-1 bg-black rounded-md text-sm text-blue-400 uppercase tracking-wider backdrop-blur-sm">
                    <GlitchEffect intensity={0.5}>See L.I.N.A. in Action</GlitchEffect>
                  </div>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300"
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
                    <span className="text-blue-400">Real-time</span> Threat Response
                  </motion.span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-3/4 h-px bg-gradient-to-r from-blue-500/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(37,99,235,0)',
                        '0 0 5px 1px rgba(37,99,235,0.3)',
                        '0 0 0px 0px rgba(37,99,235,0)'
                      ]
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity, delay: 0.5 }
                    }}
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
                  className="border border-blue-700/30 bg-gray-900/30 rounded-lg p-6 mt-8 relative overflow-hidden"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{
                    boxShadow: '0 0 30px 5px rgba(37,99,235,0.2)'
                  }}
                >
                  <h3 className="text-blue-300 font-bold mb-4 text-lg flex items-center">
                    <motion.div
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="mr-2"
                    >
                      <Clock size={20} />
                    </motion.div>
                    Response Time Comparison
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 relative overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 5px 20px 0px rgba(239,68,68,0.2)'
                      }}
                    >
                      <h4 className="text-red-300 font-medium mb-2">Without L.I.N.A.</h4>
                      <div className="text-3xl font-bold text-red-400 mb-1">
                        <CounterAnimation from={0} to={6} suffix="+ Hours" duration={2.5} />
                      </div>
                      <div className="text-red-300/70 text-sm">Average detection & response time</div>
                      <div className="text-red-300/70 text-sm mt-2">Potential cost: $245K+</div>
                      
                      <motion.div
                        className="absolute -right-4 -top-4 w-12 h-12 border-t border-r border-red-500/20 opacity-50"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 relative overflow-hidden"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 5px 20px 0px rgba(34,197,94,0.2)'
                      }}
                    >
                      <h4 className="text-green-300 font-medium mb-2">With L.I.N.A.</h4>
                      <div className="text-3xl font-bold text-green-400 mb-1">
                        <CounterAnimation from={0} to={15} suffix=" Minutes" duration={2} />
                      </div>
                      <div className="text-green-300/70 text-sm">Complete resolution time</div>
                      <div className="text-green-300/70 text-sm mt-2">Savings: $240K+</div>
                      
                      <motion.div
                        className="absolute -right-4 -top-4 w-12 h-12 border-t border-r border-green-500/20 opacity-50"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full w-full"
                    animate={{
                      top: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 3
                    }}
                  />
                </motion.div>
                
                <motion.div
                  className="flex items-center mt-6"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex -space-x-2">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-blue-200 text-xs border border-blue-600"
                      whileHover={{ scale: 1.1, y: -5 }}
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(37,99,235,0)',
                          '0 0 10px 2px rgba(37,99,235,0.3)',
                          '0 0 0px 0px rgba(37,99,235,0)'
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity }
                      }}
                    >JS</motion.div>
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center text-purple-200 text-xs border border-purple-600"
                      whileHover={{ scale: 1.1, y: -5 }}
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(147,51,234,0)',
                          '0 0 10px 2px rgba(147,51,234,0.3)',
                          '0 0 0px 0px rgba(147,51,234,0)'
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity, delay: 0.7 }
                      }}
                    >TK</motion.div>
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-cyan-800 flex items-center justify-center text-cyan-200 text-xs border border-cyan-600"
                      whileHover={{ scale: 1.1, y: -5 }}
                      animate={{
                        boxShadow: [
                          '0 0 0px 0px rgba(8,145,178,0)',
                          '0 0 10px 2px rgba(8,145,178,0.3)',
                          '0 0 0px 0px rgba(8,145,178,0)'
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity, delay: 1.4 }
                      }}
                    >MR</motion.div>
                  </div>
                  <motion.div 
                    className="ml-4 text-blue-300/80 text-sm"
                    animate={{
                      color: ['rgb(147,197,253,0.8)', 'rgb(191,219,254,0.8)', 'rgb(147,197,253,0.8)']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="font-medium">96% of potential customers</span> identify LINA as a game changer after a seeing a live demo. 
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="relative lg:h-[700px] order-1 lg:order-2" 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Terminal demo interface with enhanced animations */}
                <motion.div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 40px 0px rgba(37,99,235,0.3)'
                  }}
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
                      <div className="text-xs text-blue-500 font-mono tracking-wider font-medium">
                        <GlitchEffect intensity={0.3}>L.I.N.A. INCIDENT RESPONSE</GlitchEffect>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.div
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <Server size={14} className="text-blue-500" />
                        </motion.div>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Shield size={14} className="text-blue-500" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Demo content */}
                    <div className="p-6 h-full flex flex-col">
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center text-sm text-purple-400">
                            <motion.div
                              animate={{
                                opacity: [1, 0.5, 1],
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                  '0 0 0px 0px rgba(168,85,247,0)',
                                  '0 0 5px 2px rgba(168,85,247,0.5)',
                                  '0 0 0px 0px rgba(168,85,247,0)'
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-2 h-2 rounded-full bg-purple-500 mr-2"
                            />
                            <GlitchEffect intensity={0.2}>Incident #RT-7842 | Priority: Critical</GlitchEffect>
                          </div>
                          <motion.div 
                            className="text-xs text-blue-400 font-mono"
                            animate={{
                              color: ['rgb(96,165,250)', 'rgb(59,130,246)', 'rgb(96,165,250)']
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {new Date().toLocaleTimeString()}
                          </motion.div>
                        </div>
                        
                        <motion.div
                          className="p-3 bg-gray-900/50 border border-blue-700/30 rounded-lg mb-4 relative overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          whileHover={{
                            boxShadow: '0 0 20px 0px rgba(37,99,235,0.2)'
                          }}
                        >
                          <div className="text-sm text-blue-300 font-medium mb-1">Detected Issue:</div>
                          <div className="text-blue-100 font-mono text-sm bg-gray-950/70 p-2 rounded border border-gray-800 mb-2 overflow-x-auto relative">
                            <motion.span 
                              className="text-red-400"
                              animate={{
                                textShadow: [
                                  '0 0 0px rgba(248,113,113,0)',
                                  '0 0 5px rgba(248,113,113,0.5)',
                                  '0 0 0px rgba(248,113,113,0)'
                                ]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              API key leaked in public GitHub repository
                            </motion.span> - auth_key: k1_987x****************************
                            
                            {/* Animated cursor effect */}
                            <motion.span 
                              className="inline-block w-2 h-4 bg-blue-400 ml-1"
                              animate={{
                                opacity: [1, 0, 1]
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 0.5
                              }}
                            />
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <div className="text-blue-400">Repository: frontend/config.js</div>
                            <div className="text-blue-400">Detected: 6 minutes ago</div>
                          </div>
                          
                          {/* Scan line effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full w-full"
                            animate={{
                              top: ["-100%", "200%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 3
                            }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Steps visualization with enhanced animations */}
                      <div className="flex-grow">
                        <div className="text-sm text-blue-300 font-medium mb-4">Incident Timeline:</div>
                        
                        <div className="relative">
                          {/* Progress line with animated pulse */}
                          <motion.div 
                            className="absolute left-4 top-0 w-px h-full bg-gray-700"
                            animate={{
                              backgroundImage: [
                                'linear-gradient(to bottom, rgba(37,99,235,0.1), rgba(37,99,235,0.3), rgba(37,99,235,0.1))',
                                'linear-gradient(to bottom, rgba(37,99,235,0.3), rgba(37,99,235,0.6), rgba(37,99,235,0.3))',
                                'linear-gradient(to bottom, rgba(37,99,235,0.1), rgba(37,99,235,0.3), rgba(37,99,235,0.1))'
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Animated progress indicator */}
                          <motion.div
                            className="absolute left-4 w-px h-0 bg-blue-500 z-10"
                            style={{
                              transformOrigin: 'top'
                            }}
                            animate={{
                              height: ['0%', '100%'],
                              boxShadow: [
                                '0 0 0px 0px rgba(37,99,235,0)',
                                '0 0 5px 2px rgba(37,99,235,0.5)',
                                '0 0 0px 0px rgba(37,99,235,0)'
                              ]
                            }}
                            transition={{
                              height: { 
                                duration: 3, 
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 1
                              },
                              boxShadow: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }}
                          />
                          
                          {/* Steps */}
                          {scenarioSteps.map((step, index) => (
                            <motion.div
                              key={step.id}
                              className={`flex items-start mb-6 relative ${index <= currentStep ? 'opacity-100' : 'opacity-50'}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ 
                                opacity: index <= currentStep ? 1 : 0.5, 
                                x: 0,
                                transition: {
                                  duration: 0.5,
                                  delay: index * 0.1
                                }
                              }}
                              whileHover={{
                                x: 5
                              }}
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
                                  scale: [1, 1.1, 1],
                                  boxShadow: [
                                    '0 0 0px 0px rgba(37,99,235,0)',
                                    '0 0 10px 2px rgba(37,99,235,0.3)',
                                    '0 0 0px 0px rgba(37,99,235,0)'
                                  ]
                                } : index < currentStep ? {
                                  boxShadow: [
                                    '0 0 0px 0px rgba(34,197,94,0)',
                                    '0 0 5px 1px rgba(34,197,94,0.2)',
                                    '0 0 0px 0px rgba(34,197,94,0)'
                                  ]
                                } : {}}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity
                                }}
                              >
                                {index < currentStep ? (
                                  <motion.div
                                    animate={{
                                      rotate: [0, 360]
                                    }}
                                    transition={{
                                      duration: 6,
                                      repeat: Infinity,
                                      ease: "linear"
                                    }}
                                  >
                                    <Check size={16} />
                                  </motion.div>
                                ) : (
                                  index + 1
                                )}
                              </motion.div>
                              
                              <div className="flex-grow">
                                <div className={`font-medium ${
                                  index <= currentStep ? 'text-blue-200' : 'text-gray-400'
                                }`}>
                                  <GlitchEffect intensity={index === currentStep ? 0.3 : 0}>
                                    {step.title}
                                  </GlitchEffect>
                                </div>
                                <div 
                                  className={index <= currentStep ? 'text-blue-400/80' : 'text-gray-500'} 
                                  style={{fontSize: '0.85rem'}}
                                >
                                  {step.description}
                                </div>
                              </div>
                              
                              {index < currentStep && (
                                <motion.div 
                                  className="text-xs text-green-400 font-mono"
                                  animate={{
                                    textShadow: [
                                      '0 0 0px rgba(34,197,94,0)',
                                      '0 0 5px rgba(34,197,94,0.5)',
                                      '0 0 0px rgba(34,197,94,0)'
                                    ]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  Completed
                                </motion.div>
                              )}
                              
                              {index === currentStep && (
                                <motion.div 
                                  className="text-xs text-blue-400 font-mono"
                                  animate={{
                                    opacity: [1, 0.5, 1],
                                    textShadow: [
                                      '0 0 0px rgba(37,99,235,0)',
                                      '0 0 5px rgba(37,99,235,0.5)',
                                      '0 0 0px rgba(37,99,235,0)'
                                    ]
                                  }}
                                  transition={{ 
                                    opacity: { duration: 1.5, repeat: Infinity },
                                    textShadow: { duration: 2, repeat: Infinity }
                                  }}
                                >
                                  In progress...
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Status bar with animations */}
                      <div className="mt-auto pt-4 border-t border-blue-900/30 flex justify-between items-center">
                        <div className="text-xs text-blue-400">Status: Active Incident</div>
                        <motion.div
                          animate={{
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center text-xs text-blue-400"
                        >
                          <motion.span 
                            className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                            animate={{
                              boxShadow: [
                                '0 0 0px 0px rgba(37,99,235,0)',
                                '0 0 5px 2px rgba(37,99,235,0.5)',
                                '0 0 0px 0px rgba(37,99,235,0)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          L.I.N.A. monitoring
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Advanced scanner animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-32"
                      animate={{
                        top: ["0%", "100%", "0%"],
                        opacity: [0, 0.2, 0],
                        boxShadow: [
                          '0 0 0px 0px rgba(37,99,235,0)',
                          '0 0 20px 5px rgba(37,99,235,0.1)',
                          '0 0 0px 0px rgba(37,99,235,0)'
                        ]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Binary code background animation */}
                    <div className="absolute inset-0 font-mono text-xs text-blue-500/10 overflow-hidden pointer-events-none">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={`terminal-binary-${i}`}
                          className="absolute whitespace-nowrap"
                          style={{
                            top: `${i * 10}%`,
                            left: 0
                          }}
                          animate={{
                            x: [0, -500, 0]
                          }}
                          transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2
                          }}
                        >
                          {Array(100).fill().map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Decorative tech elements with animated glow effects */}
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
                    boxShadow: { duration: 3, repeat: Infinity, repeatType: "reverse" }
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
                    boxShadow: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1.5 }
                  }}
                />
                
                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const radius = 260;
                  const xPos = Math.cos(angle) * radius;
                  const yPos = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={`orbit-particle-${i}`}
                      className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        x: xPos,
                        y: yPos,
                        margin: '-2px 0 0 -2px'
                      }}
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 20 + i * 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  );
                })}
              </motion.div>
            </div>
          </div>
        </DataFlowEffect>
      </section>

      {/* Features section with enhanced animations */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-950 to-black relative">
        <TechGrid intensity={0.7} color="multi" />
        <ScannerEffect color="blue" />
        
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <GlowingBorder className="inline-block" color="multi">
                <div className="p-px bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-blue-800/40 rounded-md">
                  <div className="px-4 py-1 bg-black/80 rounded-md text-sm text-blue-400 uppercase tracking-wider font-medium">
                    <GlitchEffect intensity={0.5}>Core Features</GlitchEffect>
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
              <GlitchEffect>
                How <span className="text-blue-400">L.I.N.A.</span> Works
              </GlitchEffect>
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
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-br from-blue-900/30 to-black border border-blue-700/30 p-6 rounded-lg relative group overflow-hidden h-full"
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 30px 0px rgba(37,99,235,0.2)'
              }}
            >
              <DataFlowEffect density={5} color="blue">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 p-2 bg-blue-900/20 inline-flex rounded-lg border border-blue-700/30 text-blue-400"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Brain size={24} />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-blue-100 mb-3"
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(37,99,235,0)',
                        '0 0 8px rgba(37,99,235,0.3)',
                        '0 0 0px rgba(37,99,235,0)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    AI-Powered Analysis
                  </motion.h3>
                  
                  <ul className="space-y-3 text-blue-300/80">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(59,130,246)', 'rgb(96,165,250)', 'rgb(59,130,246)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-blue-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Context-aware neural networks identify genuine threats</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(59,130,246)', 'rgb(96,165,250)', 'rgb(59,130,246)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.7
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-blue-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Advanced pattern recognition reduces false positives</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(59,130,246)', 'rgb(96,165,250)', 'rgb(59,130,246)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.4
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-blue-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Continuous learning from response patterns</span>
                    </motion.li>
                  </ul>
                </div>
                
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" color="blue" />
                <DigitalOrnament type="corner" position="bottom-left" className="-mb-2 -ml-2 rotate-180" color="blue" />
              </DataFlowEffect>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-700/30 p-6 rounded-lg relative group overflow-hidden h-full"
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 30px 0px rgba(147,51,234,0.2)'
              }}
            >
              <DataFlowEffect density={5} color="purple">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 p-2 bg-purple-900/20 inline-flex rounded-lg border border-purple-700/30 text-purple-400"
                    animate={{
                      rotateY: [0, 360]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Bell size={24} />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-purple-100 mb-3"
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(147,51,234,0)',
                        '0 0 8px rgba(147,51,234,0.3)',
                        '0 0 0px rgba(147,51,234,0)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Smart Notification System
                  </motion.h3>
                  
                  <ul className="space-y-3 text-purple-300/80">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(147,51,234)', 'rgb(168,85,247)', 'rgb(147,51,234)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-purple-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Behavioral analysis targets the right stakeholders</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(147,51,234)', 'rgb(168,85,247)', 'rgb(147,51,234)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.7
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-purple-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Prioritizes channels based on response patterns</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(147,51,234)', 'rgb(168,85,247)', 'rgb(147,51,234)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.4
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-purple-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Persistent follow-up until acknowledgment</span>
                    </motion.li>
                  </ul>
                </div>
                
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" color="purple" />
                <DigitalOrnament type="corner" position="bottom-left" className="-mb-2 -ml-2 rotate-180" color="purple" />
              </DataFlowEffect>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-700/30 p-6 rounded-lg relative group overflow-hidden h-full"
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 30px 0px rgba(8,145,178,0.2)'
              }}
            >
              <DataFlowEffect density={5} color="cyan">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 p-2 bg-cyan-900/20 inline-flex rounded-lg border border-cyan-700/30 text-cyan-400"
                    animate={{
                      rotateZ: [0, 360]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Cpu size={24} />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-cyan-100 mb-3"
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(8,145,178,0)',
                        '0 0 8px rgba(8,145,178,0.3)',
                        '0 0 0px rgba(8,145,178,0)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Integration & Analytics
                  </motion.h3>
                  
                  <ul className="space-y-3 text-cyan-300/80">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(8,145,178)', 'rgb(34,211,238)', 'rgb(8,145,178)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-cyan-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Seamless integration with existing security tools</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(8,145,178)', 'rgb(34,211,238)', 'rgb(8,145,178)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.7
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-cyan-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Real-time analytics dashboard with KPIs</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          color: ['rgb(8,145,178)', 'rgb(34,211,238)', 'rgb(8,145,178)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.4
                        }}
                        className="mt-0.5 mr-2 flex-shrink-0 text-cyan-500"
                      >
                        <Check size={18} />
                      </motion.div>
                      <span>Detailed response auditing for compliance</span>
                    </motion.li>
                  </ul>
                </div>
                
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" color="cyan" />
                <DigitalOrnament type="corner" position="bottom-left" className="-mb-2 -ml-2 rotate-180" color="cyan" />
              </DataFlowEffect>
            </motion.div>
          </div>
          
          {/* Workflow visualization animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-gradient-to-b from-gray-900/50 to-black border border-blue-700/30 rounded-lg p-8 relative overflow-hidden"
          >
            <DataFlowEffect density={10} color="multi">
              <DigitalOrnament type="circuit" position="top-right" color="blue" />
              <DigitalOrnament type="circuit" position="bottom-left" color="blue" />
              
              <motion.h3 
                className="text-2xl font-bold text-blue-200 mb-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <GlitchEffect>
                  <motion.span
                    className="inline-block"
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(37,99,235,0)',
                        '0 0 8px rgba(37,99,235,0.3)',
                        '0 0 0px rgba(37,99,235,0)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    L.I.N.A. Workflow
                  </motion.span>
                </GlitchEffect>
              </motion.h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(37,99,235,0.2)' }}
                  className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-700/30 rounded-lg p-4 relative"
                >
                  <motion.div
                    className="absolute -right-2 -top-2 w-6 h-6 bg-blue-900/50 rounded-full text-blue-200 flex items-center justify-center text-sm border border-blue-600/50 z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(37,99,235,0)',
                        '0 0 10px 2px rgba(37,99,235,0.3)',
                        '0 0 0px 0px rgba(37,99,235,0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    1
                  </motion.div>
                  
                  <motion.div
                    className="p-2 bg-blue-900/40 inline-flex rounded-lg border border-blue-700/40 text-blue-300 mb-3"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Globe size={20} />
                  </motion.div>
                  
                  <h4 className="text-blue-200 font-medium mb-1">Data Collection</h4>
                  <p className="text-blue-300/70 text-sm">Multi-source intelligence gathering from security feeds</p>
                  
                  {/* Animated flow lines */}
                  <motion.div
                    className="absolute -right-2 top-1/2 w-8 lg:w-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent hidden lg:block"
                    animate={{
                      width: [0, 30],
                      opacity: [0, 1, 0.3]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                    style={{
                      transformOrigin: 'left',
                      zIndex: 5
                    }}
                  />
                </motion.div>
                
                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(147,51,234,0.2)' }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-700/30 rounded-lg p-4 relative"
                >
                  <motion.div
                    className="absolute -right-2 -top-2 w-6 h-6 bg-purple-900/50 rounded-full text-purple-200 flex items-center justify-center text-sm border border-purple-600/50 z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(147,51,234,0)',
                        '0 0 10px 2px rgba(147,51,234,0.3)',
                        '0 0 0px 0px rgba(147,51,234,0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                  >
                    2
                  </motion.div>
                  
                  <motion.div
                    className="p-2 bg-purple-900/40 inline-flex rounded-lg border border-purple-700/40 text-purple-300 mb-3"
                    animate={{
                      rotateY: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Brain size={20} />
                  </motion.div>
                  
                  <h4 className="text-purple-200 font-medium mb-1">AI Analysis</h4>
                  <p className="text-purple-300/70 text-sm">Neural network threat assessment and categorization</p>
                  
                  {/* Animated flow lines */}
                  <motion.div
                    className="absolute -right-2 top-1/2 w-8 lg:w-6 h-px bg-gradient-to-r from-purple-500/50 to-transparent hidden lg:block"
                    animate={{
                      width: [0, 30],
                      opacity: [0, 1, 0.3]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{
                      transformOrigin: 'left',
                      zIndex: 5
                    }}
                  />
                </motion.div>
                
                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(220,38,38,0.2)' }}
                  className="bg-gradient-to-br from-red-900/30 to-red-900/10 border border-red-700/30 rounded-lg p-4 relative"
                >
                  <motion.div
                    className="absolute -right-2 -top-2 w-6 h-6 bg-red-900/50 rounded-full text-red-200 flex items-center justify-center text-sm border border-red-600/50 z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(220,38,38,0)',
                        '0 0 10px 2px rgba(220,38,38,0.3)',
                        '0 0 0px 0px rgba(220,38,38,0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  >
                    3
                  </motion.div>
                  
                  <motion.div
                    className="p-2 bg-red-900/40 inline-flex rounded-lg border border-red-700/40 text-red-300 mb-3"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <AlertTriangle size={20} />
                  </motion.div>
                  
                  <h4 className="text-red-200 font-medium mb-1">Threat Validation</h4>
                  <p className="text-red-300/70 text-sm">Multi-stage verification to eliminate false positives</p>
                  
                  {/* Animated flow lines */}
                  <motion.div
                    className="absolute -right-2 top-1/2 w-8 lg:w-6 h-px bg-gradient-to-r from-red-500/50 to-transparent hidden lg:block"
                    animate={{
                      width: [0, 30],
                      opacity: [0, 1, 0.3]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    style={{
                      transformOrigin: 'left',
                      zIndex: 5
                    }}
                  />
                </motion.div>
                
                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(8,145,178,0.2)' }}
                  className="bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 border border-cyan-700/30 rounded-lg p-4 relative"
                >
                  <motion.div
                    className="absolute -right-2 -top-2 w-6 h-6 bg-cyan-900/50 rounded-full text-cyan-200 flex items-center justify-center text-sm border border-cyan-600/50 z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(8,145,178,0)',
                        '0 0 10px 2px rgba(8,145,178,0.3)',
                        '0 0 0px 0px rgba(8,145,178,0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2
                    }}
                  >
                    4
                  </motion.div>
                  
                  <motion.div
                    className="p-2 bg-cyan-900/40 inline-flex rounded-lg border border-cyan-700/40 text-cyan-300 mb-3"
                    animate={{
                      rotateY: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <MessageCircle size={20} />
                  </motion.div>
                  
                  <h4 className="text-cyan-200 font-medium mb-1">Smart Notification</h4>
                  <p className="text-cyan-300/70 text-sm">Behavioral routing to optimal responder via preferred channels</p>
                  
                  {/* Animated flow lines */}
                  <motion.div
                    className="absolute -right-2 top-1/2 w-8 lg:w-6 h-px bg-gradient-to-r from-cyan-500/50 to-transparent hidden lg:block"
                    animate={{
                      width: [0, 30],
                      opacity: [0, 1, 0.3]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                      delay: 3
                    }}
                    style={{
                      transformOrigin: 'left',
                      zIndex: 5
                    }}
                  />
                </motion.div>
                
                {/* Step 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(22,163,74,0.2)' }}
                  className="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-700/30 rounded-lg p-4 relative"
                >
                  <motion.div
                    className="absolute -right-2 -top-2 w-6 h-6 bg-green-900/50 rounded-full text-green-200 flex items-center justify-center text-sm border border-green-600/50 z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(22,163,74,0)',
                        '0 0 10px 2px rgba(22,163,74,0.3)',
                        '0 0 0px 0px rgba(22,163,74,0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.6
                    }}
                  >
                    5
                  </motion.div>
                  
                  <motion.div
                    className="p-2 bg-green-900/40 inline-flex rounded-lg border border-green-700/40 text-green-300 mb-3"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <BarChart2 size={20} />
                  </motion.div>
                  
                  <h4 className="text-green-200 font-medium mb-1">Response Tracking</h4>
                  <p className="text-green-300/70 text-sm">Continuous monitoring of resolution and adaptive follow-up</p>
                </motion.div>
              </div>
            </DataFlowEffect>
          </motion.div>
        </div>
      </section>

      {/* Call to Action with ultra-futuristic elements */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Futuristic tech grid background */}
        <TechGrid intensity={0.5} color="multi" />
        <ScannerEffect color="blue" />
        <BinaryBackground opacity={0.02} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlowingBorder intensity={1.5} className="block rounded-xl" color="multi">
              <div className="text-center p-10 border border-blue-700/20 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/80 relative overflow-hidden shadow-2xl backdrop-blur-sm">
                {/* Tech decoration effects */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                <DigitalOrnament type="corner" position="top-right" className="w-10 h-10" color="blue" />
                <DigitalOrnament type="corner" position="bottom-left" className="w-10 h-10 rotate-180" color="blue" />
                
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
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Bell size={30} className="text-blue-300" />
                  </motion.div>
                  
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
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-6 relative inline-block"
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
                  <GlitchEffect>
                  <span className="text-blue-400"> Ready to transform your security alert management?</span>?
                  </GlitchEffect>
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-blue-100/60 mb-8 font-light"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(37,99,235,0)',
                      '0 0 5px rgba(37,99,235,0.2)',
                      '0 0 0px rgba(37,99,235,0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Contact our team to schedule a demonstration of L.I.N.A.'s capabilities.
                </motion.p>
                
                <GlowingBorder intensity={1.2} className="inline-block" color="multi">
                  <motion.a 
                    href="/contact" 
                    className="relative px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-800 hover:to-blue-900 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-blue-900/20 group border border-blue-700/30 overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px 5px rgba(37,99,235,0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Request L.I.N.A. Demo</span>
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
                    
                    {/* Digital particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`button-particle-${i}`}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: '50%'
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.a>
                </GlowingBorder>
              </div>
            </GlowingBorder>
          </motion.div>
        </div>
      </section>
      
      {/* Technical Specifications section with futuristic elements */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
        <TechGrid intensity={0.7} color="multi" />
        <ScannerEffect color="blue" />
        <BinaryBackground opacity={0.02} />
        
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <GlowingBorder className="inline-block" color="multi">
                <div className="p-px bg-gradient-to-r from-blue-800/40 via-purple-500/40 to-blue-800/40 rounded-md">
                  <div className="px-4 py-1 bg-black/80 rounded-md text-sm text-blue-400 uppercase tracking-wider font-medium">
                    <GlitchEffect intensity={0.5}>Technical Specifications</GlitchEffect>
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
              <GlitchEffect>Advanced Technology Stack</GlitchEffect>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-br from-blue-900/10 to-black border border-blue-700/20 rounded-lg p-6 relative overflow-hidden"
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 40px 0px rgba(37,99,235,0.15)'
              }}
            >
              <DataFlowEffect density={5} color="blue">
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" color="blue" />
                <DigitalOrnament type="corner" position="bottom-left" className="-mb-2 -ml-2 rotate-180" color="blue" />
                
                <motion.h3 
                  className="text-xl font-bold text-blue-200 mb-6 flex items-center"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(37,99,235,0)',
                      '0 0 8px rgba(37,99,235,0.3)',
                      '0 0 0px rgba(37,99,235,0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="mr-3 text-blue-400"
                  >
                    <Cpu size={20} />
                  </motion.div>
                  System Architecture
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="border border-blue-800/30 rounded-lg p-4 bg-blue-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ 
                      x: 5,
                      boxShadow: '0 0 20px 0px rgba(37,99,235,0.15)'
                    }}
                  >
                    <div className="text-blue-200 font-medium mb-1">Core AI Engine</div>
                    <p className="text-blue-300/70 text-sm">Advanced neural networks optimized for threat pattern recognition and behavioral analysis</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="border border-blue-800/30 rounded-lg p-4 bg-blue-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ 
                      x: 5,
                      boxShadow: '0 0 20px 0px rgba(37,99,235,0.15)'
                    }}
                  >
                    <div className="text-blue-200 font-medium mb-1">Deployment Options</div>
                    <p className="text-blue-300/70 text-sm">Available as cloud-based SaaS or on-premises solution for high-security environments</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                        delay: 0.7
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="border border-blue-800/30 rounded-lg p-4 bg-blue-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ 
                      x: 5,
                      boxShadow: '0 0 20px 0px rgba(37,99,235,0.15)'
                    }}
                  >
                    <div className="text-blue-200 font-medium mb-1">Processing Capacity</div>
                    <p className="text-blue-300/70 text-sm">Handles 100K+ events per second with sub-10ms response time for critical alerts</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                        delay: 1.4
                      }}
                    />
                  </motion.div>
                </div>
              </DataFlowEffect>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-br from-purple-900/10 to-black border border-purple-700/20 rounded-lg p-6 relative overflow-hidden"
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 40px 0px rgba(147,51,234,0.15)'
              }}
            >
              <DataFlowEffect density={5} color="purple">
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" color="purple" />
                <DigitalOrnament type="corner" position="bottom-left" className="-mb-2 -ml-2 rotate-180" color="purple" />
                
                <motion.h3 
                  className="text-xl font-bold text-purple-200 mb-6 flex items-center"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(147,51,234,0)',
                      '0 0 8px rgba(147,51,234,0.3)',
                      '0 0 0px rgba(147,51,234,0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      rotateY: [0, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="mr-3 text-purple-400"
                  >
                    <Lock size={20} />
                  </motion.div>
                  Security & Compliance
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="border border-purple-800/30 rounded-lg p-4 bg-purple-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ 
                      x: -5,
                      boxShadow: '0 0 20px 0px rgba(147,51,234,0.15)'
                    }}
                  >
                    <div className="text-purple-200 font-medium mb-1">Data Encryption</div>
                    <p className="text-purple-300/70 text-sm">End-to-end encryption with quantum-resistant algorithms for all data in transit and at rest</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="border border-purple-800/30 rounded-lg p-4 bg-purple-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ 
                      x: -5,
                      boxShadow: '0 0 20px 0px rgba(147,51,234,0.15)'
                    }}
                  >
                    <div className="text-purple-200 font-medium mb-1">Compliance</div>
                    <p className="text-purple-300/70 text-sm">LINA is being developed to meet CMMC 2.0 Level 3 standards, FedRAMP Moderate requirements, and full implementation of NIST 800-53 controls. Formal certification processes will be initiated upon operational maturity.</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                        delay: 0.7
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="border border-purple-800/30 rounded-lg p-4 bg-purple-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    whileHover={{ 
                      x: -5,
                      boxShadow: '0 0 20px 0px rgba(147,51,234,0.15)'
                    }}
                  >
                    <div className="text-purple-200 font-medium mb-1">Audit Trail</div>
                    <p className="text-purple-300/70 text-sm">Comprehensive audit logging and reporting for compliance and forensic analysis</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                        delay: 1.4
                      }}
                    />
                  </motion.div>
                </div>
              </DataFlowEffect>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-br from-cyan-900/10 to-black border border-cyan-700/20 rounded-lg p-6 relative overflow-hidden lg:col-span-2"
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 40px 0px rgba(8,145,178,0.15)'
              }}
            >
              <DataFlowEffect density={5} color="cyan">
                <DigitalOrnament type="corner" position="top-right" className="-mt-2 -mr-2" color="cyan" />
                <DigitalOrnament type="corner" position="bottom-left" className="-mb-2 -ml-2 rotate-180" color="cyan" />
                
                <motion.h3 
                  className="text-xl font-bold text-cyan-200 mb-6 flex items-center"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(8,145,178,0)',
                      '0 0 8px rgba(8,145,178,0.3)',
                      '0 0 0px rgba(8,145,178,0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="mr-3 text-cyan-400"
                  >
                    <Server size={20} />
                  </motion.div>
                  Integration Capabilities
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div 
                    className="border border-cyan-800/30 rounded-lg p-4 bg-cyan-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 0 20px 0px rgba(8,145,178,0.15)'
                    }}
                  >
                    <div className="text-cyan-200 font-medium mb-1">API Connectivity</div>
                    <p className="text-cyan-300/70 text-sm">RESTful and GraphQL APIs with comprehensive SDK support for custom integrations</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="border border-cyan-800/30 rounded-lg p-4 bg-cyan-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 0 20px 0px rgba(8,145,178,0.15)'
                    }}
                  >
                    <div className="text-cyan-200 font-medium mb-1">SIEM Integration</div>
                    <p className="text-cyan-300/70 text-sm">Out-of-the-box connectors for major SIEM platforms including Splunk, IBM QRadar, and Microsoft Sentinel</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                        delay: 0.7
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="border border-cyan-800/30 rounded-lg p-4 bg-cyan-900/10 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 0 20px 0px rgba(8,145,178,0.15)'
                    }}
                  >
                    <div className="text-cyan-200 font-medium mb-1">Notification Channels</div>
                    <p className="text-cyan-300/70 text-sm">Multi-channel delivery including email, SMS, push, Slack, Teams, and custom webhooks</p>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-full w-full"
                      animate={{
                        top: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                        delay: 1.4
                      }}
                    />
                  </motion.div>
                </div>
              </DataFlowEffect>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Counter animation component
const CounterAnimation = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const controls = useAnimation();
  const nodeRef = useRef();
  
  useEffect(() => {
    const animateCount = async () => {
      await controls.start({
        count: to,
        transition: { duration, ease: "easeOut" }
      });
    };
    
    animateCount();
  }, [controls, to, duration]);
  
  return (
    <motion.span
      ref={nodeRef}
      animate={controls}
      onUpdate={latest => {
        if (latest.count !== undefined) {
          setCount(latest.count);
        }
      }}
    >
      {count.toFixed(to % 1 === 0 ? 0 : 1)}
      {suffix}
    </motion.span>
  );
};

export default LinaShowcase;