import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Cpu, 
  AlertTriangle, 
  Zap, 
  Database, 
  Network, 
  ChevronRight,
  Code,
  Hexagon,
  Server,
  Eye,
  Globe,
  Radio,
  Compass,
  Brain,
} from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ParticleBackground from '../components/ui/ParticleBackground';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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

  // Tech grid lines
  const TechGrid = () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute w-full h-full grid grid-cols-12 gap-px opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-gray-300 h-full"></div>
        ))}
      </div>
      <div className="absolute w-full h-full grid grid-rows-12 gap-px opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-b border-gray-300 w-full"></div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <PageHeader 
        title="Research Areas & Projects" 
        subtitle="Developing advanced technology solutions to address emerging challenges"
        backgroundImage="/images/projects-header.jpg"
      />

      {/* Research Focus Areas */}
      <section className="py-20 bg-black relative overflow-hidden">
        <ParticleBackground />
        <TechGrid />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-black rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Strategic Initiative
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Our Research <span className="text-gray-400">Focus</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Core technology areas we're developing to address critical challenges
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ResearchAreaCard 
              icon={<Brain size={36} />}
              title="Multi-Architecture AI"
              description="Developing revolutionary AI frameworks that integrate multiple computational paradigms for unprecedented performance and efficiency"
              technologies={["Neuromorphic Computing", "Tensor Decomposition", "Meta-Learning"]}
              variants={itemVariants}
            />
            <ResearchAreaCard 
              icon={<Globe size={36} />}
              title="Underwater Infrastructure"
              description="Pioneering submersible data center technologies with advanced cooling systems for ultra-efficient high-performance computing"
              technologies={["Thermal Efficiency", "Sealed Environments", "Renewable Power"]}
              variants={itemVariants}
            />
            <ResearchAreaCard 
              icon={<AlertTriangle size={36} />}
              title="OSINT Threat Intelligence (Reticuli TI)"
              description="Creating advanced SaaS systems to aggregate, analyze, and deliver actionable threat intelligence from diverse sources"
              technologies={["OSINT Integration", "AI Summarization", "Vulnerability Intelligence"]}
              variants={itemVariants}
            />
            <ResearchAreaCard 
              icon={<Brain size={36} />}
              title="Next Generation Robotics Systems"
              description="Developing next-generation robotics systems with enhanced detection capabilities for security and scientific applications"
              technologies={["Signal Processing", "Pattern Recognition", "Remote Sensing"]}
              variants={itemVariants}
            />
            <ResearchAreaCard 
              icon={<Lock size={36} />}
              title="Post-Quantum Cryptography"
              description="Developing BlackLock encryption standard to address post-quantum security challenges"
              technologies={["RLWR", "Quantum-Resistant Algorithms", "Encryption Standards"]}
              variants={itemVariants}
            />
            <ResearchAreaCard 
              icon={<Network size={36} />}
              title="Advanced XDR Systems"
              description="Building neuromorphic-optimized extended detection and response platforms for enhanced security monitoring"
              technologies={["AI Threat Detection", "Behavioral Analysis", "Automated Response"]}
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-950 relative">
        <TechGrid />
        
        {/* Moving tech elements background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"
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
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Development Pipeline
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Current <span className="text-gray-400">Initiatives</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Our active development focus areas
            </p>
          </motion.div>

          <div className="space-y-12">
            <ProjectCard 
              title="Reticuli TI"
              description="Next-generation threat intelligence platform with advanced signal processing and autonomous pattern recognition capabilities. Designed to identify subtle anomalies across multiple data streams with remarkable precision."
              image="/images/project-reticuli.jpg"
              tags={["Threat Intelligence", "Signal Processing", "Priority 1"]}
              links={[
                { text: "Explore Reticuli", url: "https://prototype.reticulitech.com" }
              ]}
            />
            
            <ProjectCard 
            title="LINA (Linguistic Intelligence Notification Agent)"
            description="Autonomous AI notification system built for high-stakes security environments. LINA persistently delivers verifiable, context-aware alerts across multiple platforms, eliminating response ambiguity and ensuring rapid action through multi-stage threat verification pipelines."
            image="/images/project-lina.jpg"
              tags={["NLP", "Security", "Analytics", "Priority 2"]}
              links={[
                { text: "View LINA", url: "/capabilities/lina" }
              ]}
              reversed
            />
            
            <ProjectCard 
              title="BlackLock (Post-Quantum Encryption)"
              description="Developing what aims to be the world's best encryption method, leveraging RLWR for post-quantum security. Potentially industry-defining technology to replace existing encryption standards."
              image="/images/project-blacklock.jpg"
              tags={["Encryption", "Post-Quantum", "RLWR", "Priority 3"]}
              links={[
                { text: "Explore BlackLock", url: "/capabilities/blacklock" }
              ]}
            />
            
            <ProjectCard 
              title="Biloxi Underwater Data Center"
              description="Pioneering submersible data center with revolutionary cooling technology leveraging natural ocean temperature gradients. Projected 87% reduction in cooling costs with 30% higher compute density compared to traditional facilities."
              image="/images/project-underwater.jpg"
              tags={["Infrastructure", "Sustainability", "Priority 4"]}
              links={[
                { text: "Learn More", url: "/capabilities/underwater" }
              ]}
              reversed
            />
            
            <ProjectCard 
              title="Project Unity"
              description="Revolutionary multi-architecture AI framework integrating probabilistic computing, temporal processing, and adaptive optimization. Achieves up to 4× faster processing on complex tasks with 2-3 orders of magnitude better energy efficiency than conventional systems."
              image="/images/project-Unity.jpg"
              tags={["Multi-Architecture AI", "Neuromorphic", "Priority 5"]}
              links={[
                { text: "Explore Unity", url: "/capabilities/Unity" }
              ]}
            />
            
            <ProjectCard 
              title="ZR-01"
              description="Advanced research initiative focusing on next-generation technology capabilities. Combines multiple cutting-edge approaches to solve complex challenges in security and intelligence applications."
              image="/images/project-zr01.jpg"
              tags={["Research", "Advanced Tech", "Priority 6"]}
              links={[
                { text: "Coming Soon", url: "/roadmap" }
              ]}
              reversed
            />
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-20 bg-black relative">
        <ParticleBackground />
        <TechGrid />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-black rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Strategic Progression
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Development <span className="text-gray-400">Roadmap</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Our strategic technology development plan
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-600/30"></div>

            <div className="space-y-16">
              <RoadmapItem 
                quarter="Q3-Q4 2025"
                title="Reticuli TI Production Release"
                description="Prototyping to Full-scale deployment of our advanced threat intelligence platform with enhanced pattern recognition and signal processing capabilities."
                side="left"
              />
              <RoadmapItem 
                quarter="Q3-Q4 2025"
                title="LINA Neural Architecture Implementation"
                description="Prototyping and Deployment of our specialized linguistic intelligence network with context-aware analysis engines for security applications."
                side="right"
              />
              <RoadmapItem 
                quarter="Q1 2026"
                title="BlackLock Encryption Standard"
                description="Prototype release of our post-quantum encryption technology for cryptographic validation and early government/military adoption."
                side="left"
              />
              <RoadmapItem 
                quarter="Q1-2 2026"
                title="Biloxi Underwater Data Center Pilot"
                description="Deployment of Mississippi's first submersible data center module with initial thermal efficiency and performance testing."
                side="right"
              />
              <RoadmapItem 
                quarter="Q1-3 2026"
                title="Project Unity Framework Testing"
                description="Finalization and Initial Testing of the theoretical foundations, mathematical models, and initial architecture specifications for the Unity framework."
                side="left"
              />
              <RoadmapItem 
                quarter="Q3 2026 and beyond"
                title="ZR-01 Initial Research Phase"
                description="Beginning exploration of advanced technology capabilities with potential applications in security and intelligence domains. Lobbying for the creation and contract for a Classified Special Access project."
                side="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Federal Focus */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <TechGrid />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Government Relations
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Federal <span className="text-gray-400">Engagement</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-48 h-px bg-gradient-to-r from-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-3xl">
              Our strategic approach to federal and defense opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                boxShadow: "0 0 30px 0 rgba(75,85,99,0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              
              <motion.div 
                className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
                animate={{ 
                  boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="text-gray-400 mb-4 p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30">
                <Code size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-4 relative">
                OTA & SBIR Focus
                <span className="absolute -bottom-2 left-0 w-16 h-px bg-gray-500/40"></span>
              </h3>
              
              <p className="text-gray-400 mb-6">
                We're developing specialized solutions for Other Transaction Authority (OTA) and Small Business Innovation Research (SBIR) opportunities to establish a strong presence in the defense technology ecosystem.
              </p>
              
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1 rounded-md">
                    <ChevronRight size={16} />
                  </div>
                  <span>Prototype development targeting specific defense requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1 rounded-md">
                    <ChevronRight size={16} />
                  </div>
                  <span>White papers and capability briefs for rapidly evolving needs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1 rounded-md">
                    <ChevronRight size={16} />
                  </div>
                  <span>Non-dilutive funding approaches to fuel innovation</span>
                </li>
              </ul>
              
              {/* Tech decoration */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20"></div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                boxShadow: "0 0 30px 0 rgba(75,85,99,0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              
              <motion.div 
                className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
                animate={{ 
                  boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              <div className="text-gray-400 mb-4 p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30">
                <Shield size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-4 relative">
                Defense Industry Support
                <span className="absolute -bottom-2 left-0 w-16 h-px bg-gray-500/40"></span>
              </h3>
              
              <p className="text-gray-400 mb-6">
                Providing specialized tools and expertise to help defense contractors meet evolving compliance and security requirements.
              </p>
              
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1 rounded-md">
                    <ChevronRight size={16} />
                  </div>
                  <span>CMMC 2.0 readiness assessment and remediation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1 rounded-md">
                    <ChevronRight size={16} />
                  </div>
                  <span>NIST 800-171 assessment and documentation support</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1 rounded-md">
                    <ChevronRight size={16} />
                  </div>
                  <span>Technology integration for enhanced security posture</span>
                </li>
              </ul>
              
              {/* Tech decoration */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative overflow-hidden">
        <ParticleBackground />
        
        {/* Tech grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-gray-800/10 to-gray-900/20"></div>
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-gray-500/5 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-b border-gray-500/5 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/10 to-transparent h-32"
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
                className="mb-6 p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30"
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 20px 5px rgba(75,85,99,0.15)", "0 0 0px 0px rgba(75,85,99,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Eye size={30} className="text-gray-300" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                Interested in our <span className="text-gray-400">technology development</span>?
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Contact our team to discuss potential collaboration or to learn more about our solutions.
              </p>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/20 group border border-gray-600/30"
              >
                Schedule a Discussion
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
    </Layout>
  );
};

// Research Area Card Component
const ResearchAreaCard = ({ icon, title, description, technologies, variants }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative group h-full flex flex-col"
      variants={variants}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(75,85,99,0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="text-gray-400 mb-4 p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-gray-50 transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 mb-6 group-hover:text-gray-400 transition-colors duration-300">{description}</p>
      
      <div className="mt-auto">
        <h4 className="text-sm font-semibold text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">TECHNOLOGIES</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-900/30 text-gray-300 px-2 py-1 rounded border border-gray-700/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, image, tags, links, reversed }) => {
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 rounded-lg overflow-hidden relative group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        boxShadow: "0 0 30px 0 rgba(0,0,0,0.2), 0 0 15px 0 rgba(75,85,99,0.1)",
      }}
    >
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 md:hidden"></div>
        <div 
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
        ></div>
        
        {/* Tech overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-transparent to-transparent opacity-50"></div>
        
        {/* Scan effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/10 to-transparent h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            top: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-800/60 text-gray-300 px-2 py-1 rounded border border-gray-700/30">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        
        <div className="mt-auto flex flex-wrap gap-3">
          {links.map((link, index) => (
            <Link 
              key={index}
              to={link.url} 
              className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-md transition-all duration-300 text-sm flex items-center shadow-md border border-gray-600/20 group"
            >
              {link.text} 
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </Link>
          ))}
        </div>
      </div>
      
      {/* Tech decoration */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Roadmap Item Component
const RoadmapItem = ({ quarter, title, description, side }) => {
  return (
    <motion.div 
      className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`w-1/2 ${side === 'left' ? 'pr-12 text-right' : 'pl-12'}`}>
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{quarter}</span>
        <h3 className="text-xl font-bold text-gray-100 mt-1 mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      
      <motion.div 
        className="w-8 h-8 bg-gray-700 rounded-full border-4 border-black z-10 flex items-center justify-center relative"
        whileHover={{ scale: 1.2 }}
        animate={{
          boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 2px rgba(75,85,99,0.3)", "0 0 0px 0px rgba(75,85,99,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
      
      <div className="w-1/2"></div>
    </motion.div>
  );
};

export default Projects;