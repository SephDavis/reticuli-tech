import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Cpu, 
  Users, 
  ChevronRight,
  Code,
  Hexagon,
  Server,
  Eye,
  Zap,
  Database,
  Network,
  Brain,
  Radio,
  AlertTriangle,
  Globe,
  Bell
} from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ParticleBackground from '../components/ui/ParticleBackground';

const About = () => {
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

  // Scan line animation
  const ScanLine = () => (
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
  );

  return (
    <Layout>
      <PageHeader 
        title="About Reticuli Technologies" 
        subtitle="Pioneering advanced intelligence and security solutions"
        backgroundImage="/images/about-header.jpg"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-black relative overflow-hidden">
        <ParticleBackground />
        <TechGrid />
        <ScanLine />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
                <div className="px-4 py-1 bg-black rounded-md text-sm text-gray-400 uppercase tracking-wider">
                  Core Mission
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6 relative inline-block">
                Our <span className="text-gray-400">Purpose</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg">
                At Reticuli Technologies, we develop advanced threat intelligence and security solutions that transform how organizations identify, analyze, and respond to complex threats. Our mission is to provide unparalleled situational awareness through innovative applications of signal processing, pattern recognition, and effective notification systems.
              </p>
              <p className="text-gray-300 mb-8">
                We bring together expertise in data analysis, notification delivery, cryptography, and infrastructure to create integrated platforms that address critical security challenges. Through our suite of specialized solutions—including Reticuli TI, LINA notification system, and BlackLock—we're building the next generation of intelligence and security tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  to="/capabilities" 
                  className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center shadow-lg shadow-black/20 border border-gray-600/20 group"
                >
                  Our Capabilities 
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
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-transparent border border-gray-700/30 hover:border-gray-500/60 hover:bg-gray-900/20 text-gray-300 hover:text-gray-100 font-medium rounded-md transition-all duration-300 flex items-center group"
                >
                  Connect With Us
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative z-10 group">
                <motion.div 
                  className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
                  animate={{ 
                    boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
                  <div className="px-4 py-1 bg-gray-900/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                    Strategic Vision
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-100 mb-6 relative inline-block">
                  Our <span className="text-gray-400">Future</span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </h3>
                
                <p className="text-gray-300 mb-6">
                  We envision a future where our technologies form the backbone of next-generation security infrastructure—providing unmatched threat intelligence, reliable notification delivery, quantum-resistant encryption, and sustainable computing power through revolutionary approaches to architecture and infrastructure.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-100 mt-8 mb-4">Core Values</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1.5 rounded-md">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-200">Proactive Intelligence</h5>
                      <p className="text-gray-400 text-sm">Identifying threats through advanced pattern recognition and ensuring timely notification</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1.5 rounded-md">
                      <Bell size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-200">Reliable Communication</h5>
                      <p className="text-gray-400 text-sm">Ensuring critical information reaches the right people through multiple channels</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1.5 rounded-md">
                      <Globe size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-200">Sustainable Solutions</h5>
                      <p className="text-gray-400 text-sm">Creating technologies that maximize performance while minimizing resource consumption</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Tech decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-32 border-r-2 border-t-2 border-gray-600/20 -mr-4 -mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 5px 1px rgba(75,85,99,0.3)", "0 0 0px 0px rgba(75,85,99,0)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 w-16 h-32 border-l-2 border-b-2 border-gray-600/20 -ml-4 -mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 5px 1px rgba(75,85,99,0.3)", "0 0 0px 0px rgba(75,85,99,0)"]
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

      {/* Core Technologies */}
      <section className="py-16 bg-gray-950 relative overflow-hidden">
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
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Advanced Technologies
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Our <span className="text-gray-400">Innovations</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Pioneering solutions at the forefront of technology
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TechnologyCard 
              icon={<AlertTriangle size={36} />}
              title="Reticuli TI"
              description="Next-generation threat intelligence platform with advanced signal processing and pattern recognition capabilities"
              variants={itemVariants}
            />
            <TechnologyCard 
              icon={<Bell size={36} />}
              title="LINA"
              description="Linguistic Intelligence Notification Agent - Multi-channel alert system designed to deliver critical security notifications across various platforms"
              variants={itemVariants}
            />
            <TechnologyCard 
              icon={<Lock size={36} />}
              title="BlackLock"
              description="Revolutionary post-quantum encryption standard leveraging RLWR for unmatched cryptographic security"
              variants={itemVariants}
            />
            <TechnologyCard 
              icon={<Globe size={36} />}
              title="Underwater Infrastructure"
              description="Pioneering submersible data center technology with revolutionary cooling and sustainability advantages"
              variants={itemVariants}
            />
            <TechnologyCard 
              icon={<Brain size={36} />}
              title="Project UNITY"
              description="Multi-architecture AI framework integrating probabilistic computing with temporal processing"
              variants={itemVariants}
            />
            <TechnologyCard 
              icon={<Eye size={36} />}
              title="ZR-01"
              description="Advanced research initiative focusing on next-generation observation and analysis capabilities"
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
                Executive Team
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Leadership <span className="text-gray-400">Team</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Experts in security technology, notification systems, and advanced computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Toby Davis"
            position="Founder & CEO"
            bio="Computer science professional with expertise in HPC, neuromorphic computing, and AI. DoD Cyber Service Academy Scholar at Mississippi State University pursuing an M.S. in Cyber Security & Operations with a perfect 4.0 GPA."
            image="/api/placeholder/400/500"
          />
          <TeamMember 
            name="Nick Welch"
            position="Co-Founder & Director of Outreach"
            bio="Security notification expert specializing in multi-channel alert systems with previous experience developing critical communication networks."
            image="/api/placeholder/400/500"
          />
          <TeamMember 
            name="Coming Soon"
            position="Undisclosed"
            bio="We plan to begin actively hiring in Q3 2025."
            image="/api/placeholder/400/500"
          />
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-950 relative">
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
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Growth Trajectory
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Our <span className="text-gray-400">Journey</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Rapid development of groundbreaking technologies
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-600/30"></div>

            <div className="space-y-16">
              <TimelineItem 
                year="Early March, 2025"
                title="Company Founding"
                description="Reticuli Technologies legally established under the name Reticuli LLC."
                side="left"
              />
              <TimelineItem 
                year="Late March, 2025"
                title="Reticuli TI Development"
                description="Began development of our flagship threat intelligence platform with advanced signal processing capabilities."
                side="right"
              />
              <TimelineItem 
                year="Mid April, 2025"
                title="LINA Notification System"
                description="Launched development of our multi-channel notification system for security applications and critical alerts."
                side="left"
              />
      
            </div>
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-20 bg-black relative overflow-hidden">
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
                Research Methodology
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Our <span className="text-gray-400">Approach</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              How we develop breakthrough technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ApproachCard 
    number="01"
    title="Identify"
    description="We identify emerging threats across digital, physical, and hybrid environments that require innovative detection methods, advanced pattern recognition, and improved communication systems."
  />
  <ApproachCard 
    number="02"
    title="Innovate"
    description="Our cross-functional teams develop breakthrough technologies spanning underwater infrastructure, quantum-resistant encryption, multi-channel notification systems, and next-generation threat intelligence platforms."
  />
  <ApproachCard 
    number="03"
    title="Implement"
    description="We deploy comprehensive, integrated solutions that combine our diverse technologies to address complex security challenges across government, enterprise, and critical infrastructure sectors."
  />

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
                <Bell size={30} className="text-gray-300" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                Explore our <span className="text-gray-400">technology portfolio</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Discover how our advanced notification systems and security platforms can transform your threat intelligence capabilities.
              </p>
              
              <Link 
                to="/projects" 
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/20 group border border-gray-600/30"
              >
                View Our Projects
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

// Technology Card Component
const TechnologyCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg text-center transition-all duration-500 hover:-translate-y-2 relative group"
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
      
      <div className="text-gray-400 mb-4 mx-auto p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-gray-50 transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{description}</p>
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Team Member Component
const TeamMember = ({ name, position, bio, image }) => {
  return (
    <motion.div 
      className="relative group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(75,85,99,0.1)",
      }}
    >
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 rounded-lg overflow-hidden">
        <div className="aspect-[3/4] bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <div 
            className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
          ></div>
          
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
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">{name}</h3>
          <p className="text-gray-400 font-medium mb-3">{position}</p>
          <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{bio}</p>
        </div>
        
        {/* Tech decoration */}
        <div className="absolute top-0 right-0 w-8 h-16 border-r border-t border-gray-500/20 group-hover:border-gray-400/40 transition-colors duration-300 rounded-tr-md"></div>
        <div className="absolute bottom-0 left-0 w-8 h-16 border-l border-b border-gray-500/20 group-hover:border-gray-400/40 transition-colors duration-300 rounded-bl-md"></div>
      </div>
    </motion.div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description, side }) => {
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

// Approach Card Component
const ApproachCard = ({ number, title, description }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
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
      
      <div className="text-gray-400 text-5xl font-bold mb-4 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">{number}</div>
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{description}</p>
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default About;