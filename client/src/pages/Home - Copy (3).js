import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Brain, Cpu, Code, Clock, ChevronRight, ArrowRight, Zap } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';

// Custom CSS for interactive elements
const hiTechStyles = `
  @keyframes silverShimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  .silver-shimmer {
    background: linear-gradient(90deg, 
      #888 0%, 
      #ccc 25%, 
      #f8f8f8 50%, 
      #ccc 75%, 
      #888 100%);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: silverShimmer 3s linear infinite;
  }
  
  .btn-metallic {
    background: linear-gradient(145deg, #a0a0a0, #d4d4d4, #a0a0a0);
    transition: all 0.3s ease;
  }
  
  .btn-metallic:hover {
    background: linear-gradient(145deg, #b8b8b8, #e8e8e8, #b8b8b8);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(192, 192, 192, 0.3),
                  0 0 20px rgba(192, 192, 192, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(192, 192, 192, 0.5),
                  0 0 40px rgba(192, 192, 192, 0.4);
    }
  }

  .tech-grid {
    background-image: 
      linear-gradient(rgba(192, 192, 192, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(192, 192, 192, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: center center;
  }

  .neural-line {
    position: absolute;
    opacity: 0.2;
    background: linear-gradient(90deg, transparent, #C0C0C0, transparent);
    height: 1px;
    width: 100%;
    transform-origin: left;
    animation: expandLine 3s ease-in-out infinite alternate;
  }
  
  @keyframes expandLine {
    from { transform: scaleX(0.3); opacity: 0.1; }
    to { transform: scaleX(1); opacity: 0.3; }
  }

  .data-stream {
    position: absolute;
    width: 2px;
    opacity: 0;
    background: linear-gradient(to bottom, transparent, #C0C0C0, transparent);
    animation: dataStream 8s linear infinite;
  }

  @keyframes dataStream {
    0% { transform: translateY(-100%); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
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
    background: linear-gradient(135deg, rgba(192,192,192,0.5), rgba(192,192,192,0.1));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
    animation: pulseGlow 3s infinite;
  }
`;

// Neural network visualization component
const NeuralNetwork = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Clear any existing elements
    container.innerHTML = '';
    
    // Create neural nodes
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
      node.style.backgroundColor = '#C0C0C0';
      node.style.borderRadius = '50%';
      node.style.opacity = `${0.3 + Math.random() * 0.5}`;
      node.style.zIndex = '1';
      
      nodes.push({ element: node, x, y });
      container.appendChild(node);
    }
    
    // Create neural connections
    nodes.forEach((node, i) => {
      // Connect each node to a few others
      for (let j = 0; j < 2; j++) {
        const targetIdx = Math.floor(Math.random() * nodeCount);
        if (targetIdx !== i) {
          const target = nodes[targetIdx];
          
          const line = document.createElement('div');
          line.className = 'neural-line';
          line.style.top = `${node.y + parseInt(node.element.style.width) / 2}px`;
          line.style.left = `${node.x + parseInt(node.element.style.width) / 2}px`;
          
          // Calculate angle and length
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          
          line.style.width = `${length}px`;
          line.style.transform = `rotate(${angle}deg)`;
          line.style.transformOrigin = 'left center';
          
          // Randomize animation delay
          line.style.animationDelay = `${Math.random() * 2}s`;
          
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
    styleElement.textContent = hiTechStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section with Neural Network */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0D14]">
        <div className="absolute inset-0 tech-grid"></div>
        <NeuralNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14]/95 via-[#0A0D14]/60 to-[#0A0D14]/95"></div>
        
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
              <span className="silver-shimmer">Neuromorphic</span><br />Defense <span className="silver-shimmer">AI</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#C0C0C0] mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Advanced AI-driven threat intelligence and zero-dilution contract vehicles
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link 
                to="/platform"
                className="px-8 py-4 btn-metallic text-[#0A0D14] font-bold rounded-md flex items-center justify-center shadow-lg"
              >
                <Brain className="mr-2" size={18} />
                Neural Defense Platform
              </Link>
              <Link 
                to="/capabilities" 
                className="px-8 py-4 bg-transparent border border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/10 text-white font-medium rounded-md transition-colors duration-300 flex items-center"
              >
                Explore Capabilities <ChevronRight className="ml-2" size={18} />
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
            <span className="text-[#C0C0C0] text-sm mb-2">Scroll to discover</span>
            <ArrowRight className="text-[#C0C0C0] animate-bounce" size={18} style={{ transform: 'rotate(90deg)' }} />
          </div>
        </motion.div>
      </section>

      {/* Investment Proposition */}
      <section className="py-24 bg-[#0A0D14] relative overflow-hidden">
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
                Zero-Dilution <span className="silver-shimmer">Growth Strategy</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-[#C0C0C0] max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Leveraging non-dilutive contract vehicles to fund advanced neural defense R&D
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <ValueProposition 
                icon={<Shield size={32} />}
                title="SBIR"
                description="Strategic Small Business Innovation Research funding pipeline with direct Phase II transitions"
                metrics="$2.5M+"
                metricsLabel="Non-Dilutive Capital"
              />
              <ValueProposition 
                icon={<Clock size={32} />}
                title="OTA"
                description="Other Transaction Authority contracts fast-tracking prototype development for defense"
                metrics="18-24 mo"
                metricsLabel="Time to Revenue"
              />
              <ValueProposition 
                icon={<Cpu size={32} />}
                title="IP Portfolio"
                description="Patent-pending neural architecture for advanced threat detection at the edge"
                metrics="3"
                metricsLabel="Patents Pending"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform */}
      <section className="py-24 bg-[#0D1119] relative overflow-hidden">
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
                <span className="silver-shimmer">Neuromorphic</span> Defense Platform
              </h2>
              <p className="text-[#C0C0C0] mb-6 text-lg">
                Our proprietary neural architecture mimics biological structures to detect and mitigate threats in real-time. By processing data at the edge, we achieve a 3x faster detection rate with 60% less false positives.
              </p>
              <p className="text-[#C0C0C0] mb-8">
                The platform combines hardware-accelerated AI with specialized zero-knowledge cryptography to enable secure cross-domain data processing in classified environments.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-[#C0C0C0]/10 p-4 rounded-lg">
                  <div className="silver-shimmer text-2xl font-bold mb-1">3.2M</div>
                  <div className="text-[#C0C0C0] text-sm">Parameters per model</div>
                </div>
                <div className="border border-[#C0C0C0]/10 p-4 rounded-lg">
                  <div className="silver-shimmer text-2xl font-bold mb-1">60%</div>
                  <div className="text-[#C0C0C0] text-sm">Reduced false positives</div>
                </div>
                <div className="border border-[#C0C0C0]/10 p-4 rounded-lg">
                  <div className="silver-shimmer text-2xl font-bold mb-1">14ms</div>
                  <div className="text-[#C0C0C0] text-sm">Response latency</div>
                </div>
                <div className="border border-[#C0C0C0]/10 p-4 rounded-lg">
                  <div className="silver-shimmer text-2xl font-bold mb-1">7W</div>
                  <div className="text-[#C0C0C0] text-sm">Power consumption</div>
                </div>
              </div>

              <Link 
                to="/platform" 
                className="inline-flex items-center text-[#C0C0C0] font-medium hover:text-white transition-colors"
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
              <div className="absolute inset-0 glow-border rounded-xl overflow-hidden bg-[#0A0D14]/80 flex items-center justify-center">
                <div className="absolute inset-0 tech-grid"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                  <div className="mb-6 p-4 bg-[#0A0D14]/40 rounded-full">
                    <Brain className="w-16 h-16 text-[#C0C0C0]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Neural Architecture Visualization</h3>
                  <p className="text-[#C0C0C0] mb-4">Interactive simulation currently processing live data</p>
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-transparent border border-[#C0C0C0]/30 text-[#C0C0C0] rounded-md text-sm">
                      View Metrics
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-[#C0C0C0]/30 text-[#C0C0C0] rounded-md text-sm">
                      System Specs
                    </button>
                  </div>
                </div>
                
                {/* Animated circuit paths */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bg-[#C0C0C0]/20 rounded-full"
                      style={{
                        width: `${4 + Math.random() * 8}px`,
                        height: `${4 + Math.random() * 8}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: '0 0 8px rgba(192, 192, 192, 0.6)',
                        animation: `pulseGlow ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Decorative tech elements */}
              <div className="absolute top-0 right-0 w-12 h-24 border-r-2 border-t-2 border-[#444] -mr-2 -mt-2"></div>
              <div className="absolute bottom-0 left-0 w-12 h-24 border-l-2 border-b-2 border-[#444] -ml-2 -mb-2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-24 bg-[#0A0D14] relative overflow-hidden">
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
              Strategic <span className="silver-shimmer">Contracts</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-[#C0C0C0] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Current vehicles and contract opportunities
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StrategicPartnerCard 
              title="DoD Advanced Sensor Analytics"
              category="SBIR Phase II"
              value="$1.25M"
              description="Real-time analysis of multi-spectrum sensor data for enhanced situational awareness"
            />
            <StrategicPartnerCard 
              title="Tactical Edge Computing Platform"
              category="OTA Prototype"
              value="$750K"
              description="Hardened AI computation for mission systems in disconnected environments"
            />
            <StrategicPartnerCard 
              title="Quantum-Resistant Network Security"
              category="SBIR Phase I"
              value="$250K"
              description="Post-quantum cryptographic solutions for securing sensitive communications"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#0D1119] to-[#0A0D14]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to transform defense <span className="silver-shimmer">intelligence?</span>
            </h2>
            <p className="text-xl text-[#C0C0C0] mb-10 max-w-2xl mx-auto">
              Schedule a briefing on our neuromorphic defense platform and non-dilutive capital strategy
            </p>
            <Link 
              to="/contact"
              className="px-8 py-4 btn-metallic text-[#0A0D14] font-bold rounded-md flex items-center justify-center shadow-lg mx-auto w-fit"
            >
              <Zap className="mr-2" size={18} />
              Schedule Executive Briefing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Value proposition component
const ValueProposition = ({ icon, title, description, metrics, metricsLabel }) => {
  return (
    <motion.div 
      className="bg-[#0D1119] border border-[#444] p-8 rounded-lg hover-rise glow-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-[#C0C0C0] mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-[#C0C0C0] mb-6">{description}</p>
      <div className="silver-shimmer text-3xl font-bold mb-1">{metrics}</div>
      <div className="text-[#C0C0C0] text-sm">{metricsLabel}</div>
    </motion.div>
  );
};

// Strategic partner card
const StrategicPartnerCard = ({ title, category, value, description }) => {
  return (
    <motion.div 
      className="bg-[#0D1119] border border-[#444] p-6 rounded-lg hover-rise"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 flex justify-between items-start">
        <span className="text-xs font-semibold text-[#0A0D14] bg-[#C0C0C0] px-2 py-1 rounded">
          {category}
        </span>
        <span className="silver-shimmer font-bold text-xl">{value}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#C0C0C0] mb-4">{description}</p>
      <Link 
        to="/platform/contracts" 
        className="text-[#C0C0C0] text-sm flex items-center hover:text-white"
      >
        View Details <ChevronRight size={14} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default Home;