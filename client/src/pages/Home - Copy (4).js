import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Brain, Cpu, Code, Clock, ChevronRight, ArrowRight, Zap } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';

// Custom CSS for interactive elements
const techStyles = `
  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 10px rgba(0, 48, 99, 0.3),
                  0 0 20px rgba(0, 48, 99, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 48, 99, 0.5),
                  0 0 40px rgba(0, 48, 99, 0.4);
    }
  }
  
  .subtle-shimmer {
    background: linear-gradient(90deg, 
      #112233 0%, 
      #224466 25%, 
      #336699 50%, 
      #224466 75%, 
      #112233 100%);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: silverShimmer 3s linear infinite;
  }
  
  @keyframes silverShimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  .btn-navy {
    background: linear-gradient(145deg, #001a33, #003366, #001a33);
    transition: all 0.3s ease;
  }
  
  .btn-navy:hover {
    background: linear-gradient(145deg, #002244, #004488, #002244);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .tech-grid {
    background-image: 
      linear-gradient(rgba(0, 48, 99, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 48, 99, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: center center;
  }

  .data-stream {
    position: absolute;
    width: 1px;
    opacity: 0;
    background: linear-gradient(to bottom, transparent, #003366, transparent);
    animation: dataStream 8s linear infinite;
  }

  @keyframes dataStream {
    0% { transform: translateY(-100%); opacity: 0; }
    10% { opacity: 0.3; }
    90% { opacity: 0.3; }
    100% { transform: translateY(100vh); opacity: 0; }
  }

  .hover-rise {
    transition: transform 0.3s ease-out;
  }
  
  .hover-rise:hover {
    transform: translateY(-5px);
  }

  .glow-border {
    position: relative;
  }

  .glow-border::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(0,48,99,0.5), rgba(0,48,99,0.1));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
    animation: glowPulse 3s infinite;
  }
`;

// Network visualization component
const NetworkVisualization = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Clear any existing elements
    container.innerHTML = '';
    
    // Create nodes
    const nodeCount = 15;
    const nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      node.style.position = 'absolute';
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.width = `${4 + Math.random() * 6}px`;
      node.style.height = node.style.width;
      node.style.backgroundColor = '#003366';
      node.style.borderRadius = '50%';
      node.style.opacity = `${0.3 + Math.random() * 0.5}`;
      node.style.zIndex = '1';
      
      nodes.push({ element: node, x, y });
      container.appendChild(node);
    }
    
    // Create connections
    nodes.forEach((node, i) => {
      // Connect each node to a few others
      for (let j = 0; j < 2; j++) {
        const targetIdx = Math.floor(Math.random() * nodeCount);
        if (targetIdx !== i) {
          const target = nodes[targetIdx];
          
          const line = document.createElement('div');
          line.style.position = 'absolute';
          line.style.opacity = '0.2';
          line.style.backgroundColor = '#003366';
          line.style.height = '1px';
          line.style.width = '100%';
          line.style.top = `${node.y + parseInt(node.element.style.width) / 2}px`;
          line.style.left = `${node.x + parseInt(node.element.style.width) / 2}px`;
          line.style.transformOrigin = 'left center';
          
          // Calculate angle and length
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          
          line.style.width = `${length}px`;
          line.style.transform = `rotate(${angle}deg)`;
          
          // Randomize animation
          line.style.animation = `pulseOpacity ${2 + Math.random() * 3}s ease-in-out infinite alternate ${Math.random() * 2}s`;
          
          container.appendChild(line);
        }
      }
    });
    
    // Create data streams
    for (let i = 0; i < 10; i++) {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      
      stream.style.left = `${Math.random() * 100}%`;
      stream.style.height = `${50 + Math.random() * 150}px`;
      stream.style.animationDelay = `${Math.random() * 8}s`;
      
      container.appendChild(stream);
    }
    
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 opacity-80"
      style={{ overflow: 'hidden' }}
    ></div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Inject custom styles
    const styleElement = document.createElement('style');
    styleElement.textContent = techStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section with Network Visualization */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#010A14]">
        <div className="absolute inset-0 tech-grid"></div>
        <NetworkVisualization />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010A14]/95 via-[#010A14]/60 to-[#010A14]/95"></div>
        
        <div className="container mx-auto px-4 z-20 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="subtle-shimmer">Sentinel</span><br />Research <span className="subtle-shimmer">Group</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#8BA3C1] mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Advanced cognitive systems for defense intelligence operations
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link 
                to="/platform"
                className="px-8 py-4 btn-navy text-white font-bold rounded-md flex items-center justify-center shadow-lg"
              >
                <Brain className="mr-2" size={18} />
                Cognitive Systems
              </Link>
              <Link 
                to="/capabilities" 
                className="px-8 py-4 bg-transparent border border-[#003366]/50 hover:bg-[#003366]/10 text-white font-medium rounded-md transition-colors duration-300 flex items-center"
              >
                Capabilities <ChevronRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-[#8BA3C1] text-sm mb-2">Scroll to discover</span>
            <ArrowRight className="text-[#8BA3C1] animate-bounce" size={18} style={{ transform: 'rotate(90deg)' }} />
          </div>
        </motion.div>
      </section>

      {/* Strategic Capabilities */}
      <section className="py-24 bg-[#010A14] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Strategic <span className="subtle-shimmer">Capabilities</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-[#8BA3C1] max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Advanced research and development with select government partners
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <CapabilityItem 
                icon={<Shield size={32} />}
                title="Secure Frameworks"
                description="Multi-domain security architecture with classified-level encryption and compartmentalized processing"
                metrics="TS/SCI"
                metricsLabel="Clearance Level"
              />
              <CapabilityItem 
                icon={<Clock size={32} />}
                title="Adaptive Systems"
                description="Dynamic cognitive processing for rapid response and computational flexibility in contested environments"
                metrics="Real-time"
                metricsLabel="Processing"
              />
              <CapabilityItem 
                icon={<Cpu size={32} />}
                title="Advanced Architecture"
                description="Proprietary neural processing with hardware-level security and multi-spectral data analysis"
                metrics="Petaflop"
                metricsLabel="Computing Power"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform */}
      <section className="py-24 bg-[#011119] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                <span className="subtle-shimmer">RETINA</span> Platform
              </h2>
              <p className="text-[#8BA3C1] mb-6 text-lg">
                Our proprietary cognitive architecture deploys advanced analytics for threat detection in real-time. Designed for multi-domain operations, the system delivers superior situational awareness with minimal false positives.
              </p>
              <p className="text-[#8BA3C1] mb-8">
                The platform combines specialized hardware acceleration with custom cryptographic protocols, enabling secure cross-domain data processing at multiple classification levels.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-[#003366]/10 p-4 rounded-lg">
                  <div className="subtle-shimmer text-2xl font-bold mb-1">Multilayer</div>
                  <div className="text-[#8BA3C1] text-sm">Cognitive processing</div>
                </div>
                <div className="border border-[#003366]/10 p-4 rounded-lg">
                  <div className="subtle-shimmer text-2xl font-bold mb-1">60%</div>
                  <div className="text-[#8BA3C1] text-sm">Reduced false positives</div>
                </div>
                <div className="border border-[#003366]/10 p-4 rounded-lg">
                  <div className="subtle-shimmer text-2xl font-bold mb-1">14ms</div>
                  <div className="text-[#8BA3C1] text-sm">Response latency</div>
                </div>
                <div className="border border-[#003366]/10 p-4 rounded-lg">
                  <div className="subtle-shimmer text-2xl font-bold mb-1">FIPS 140-3</div>
                  <div className="text-[#8BA3C1] text-sm">Security compliance</div>
                </div>
              </div>

              <Link 
                to="/platform" 
                className="inline-flex items-center text-[#8BA3C1] font-medium hover:text-white transition-colors"
              >
                Platform specifications <ChevronRight className="ml-1" size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative h-80 md:h-96 lg:h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 glow-border rounded-xl overflow-hidden bg-[#010A14]/80 flex items-center justify-center">
                <div className="absolute inset-0 tech-grid"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                  <div className="mb-6 p-4 bg-[#010A14]/40 rounded-full">
                    <Brain className="w-16 h-16 text-[#003366]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Cognitive Analysis System</h3>
                  <p className="text-[#8BA3C1] mb-4">Secure visualization of operational capabilities</p>
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-transparent border border-[#003366]/30 text-[#8BA3C1] rounded-md text-sm">
                      View Metrics
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-[#003366]/30 text-[#8BA3C1] rounded-md text-sm">
                      System Specs
                    </button>
                  </div>
                </div>
                
                {/* Animated elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bg-[#003366]/20 rounded-full"
                      style={{
                        width: `${4 + Math.random() * 8}px`,
                        height: `${4 + Math.random() * 8}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: '0 0 8px rgba(0, 48, 99, 0.6)',
                        animation: `glowPulse ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Decorative tech elements */}
              <div className="absolute top-0 right-0 w-12 h-24 border-r-2 border-t-2 border-[#003366] -mr-2 -mt-2"></div>
              <div className="absolute bottom-0 left-0 w-12 h-24 border-l-2 border-b-2 border-[#003366] -ml-2 -mb-2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Programs */}
      <section className="py-24 bg-[#010A14] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Research <span className="subtle-shimmer">Programs</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-[#8BA3C1] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Current initiatives with defense and intelligence partners
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard 
              title="Adaptive Sensor Analytics"
              category="DARPA"
              value="Phase II"
              description="Multi-spectrum data analysis for enhanced situational awareness in contested environments"
            />
            <ProgramCard 
              title="Tactical Edge Computing"
              category="DoD"
              value="Prototype"
              description="Hardened cognitive systems for mission-critical operations with limited connectivity"
            />
            <ProgramCard 
              title="Quantum-Resistant Security"
              category="Intelligence Community"
              value="Research"
              description="Next-generation cryptographic solutions for securing sensitive communications"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#011119] to-[#010A14]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready for next-generation <span className="subtle-shimmer">intelligence?</span>
            </h2>
            <p className="text-xl text-[#8BA3C1] mb-10 max-w-2xl mx-auto">
              Schedule a classified briefing on our cognitive systems and security capabilities
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 btn-navy text-white font-bold rounded-md flex items-center justify-center shadow-lg mx-auto w-fit"
            >
              <Zap className="mr-2" size={18} />
              Request Secure Briefing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Capability item component
const CapabilityItem = ({ icon, title, description, metrics, metricsLabel }) => {
  return (
    <motion.div 
      className="bg-[#011119] border border-[#003366] p-8 rounded-lg hover-rise glow-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-[#003366] mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-[#8BA3C1] mb-6">{description}</p>
      <div className="subtle-shimmer text-3xl font-bold mb-1">{metrics}</div>
      <div className="text-[#8BA3C1] text-sm">{metricsLabel}</div>
    </motion.div>
  );
};

// Program card component
const ProgramCard = ({ title, category, value, description }) => {
  return (
    <motion.div 
      className="bg-[#011119] border border-[#003366] p-6 rounded-lg hover-rise"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 flex justify-between items-start">
        <span className="text-xs font-semibold text-[#010A14] bg-[#003366] px-2 py-1 rounded">
          {category}
        </span>
        <span className="subtle-shimmer font-bold text-xl">{value}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#8BA3C1] mb-4">{description}</p>
      <Link 
        to="/platform/programs" 
        className="text-[#8BA3C1] text-sm flex items-center hover:text-white"
      >
        Program Details <ChevronRight size={14} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default Home;