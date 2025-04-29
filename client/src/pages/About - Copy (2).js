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
  Network
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
        subtitle="Building the foundation for advanced defense solutions"
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
                  Foundational Principles
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6 relative inline-block">
                Our <span className="text-gray-400">Mission</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg">
                At Reticuli Technologies, we are committed to developing reliable defense solutions that address emerging security challenges. Our mission is to support defense capabilities through innovative approaches to protect critical infrastructure, secure sensitive information, and enhance operational effectiveness.
              </p>
              <p className="text-gray-300 mb-8">
                We bring together expertise in computing, cybersecurity, and systems engineering to create integrated solutions designed to meet demanding requirements. Through collaboration with defense agencies and established contractors, we aim to deliver technologies that meet the highest standards of reliability and security.
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
                    Strategic Direction
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-100 mb-6 relative inline-block">
                  Our <span className="text-gray-400">Vision</span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </h3>
                
                <p className="text-gray-300 mb-6">
                  We envision contributing to a future where defense technology effectively integrates advanced computing, secure communications, and intelligent systems to provide robust protection against evolving threats while maintaining the highest ethical standards.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-100 mt-8 mb-4">Core Values</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1.5 rounded-md">
                      <Shield size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-200">Excellence in Security</h5>
                      <p className="text-gray-400 text-sm">Unwavering commitment to implementing robust security practices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1.5 rounded-md">
                      <Lock size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-200">Integrity & Responsibility</h5>
                      <p className="text-gray-400 text-sm">Ethical development and transparent business practices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-400 bg-gray-900/30 p-1.5 rounded-md">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-200">Innovation</h5>
                      <p className="text-gray-400 text-sm">Exploring new approaches to solve challenging problems</p>
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

      {/* Expertise Areas */}
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
                Specialized Proficiency
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Areas of <span className="text-gray-400">Expertise</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Our team brings specialized knowledge and capabilities to defense challenges
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExpertiseCard 
              icon={<Shield size={36} />}
              title="Systems Integration"
              description="Connecting disparate technologies into cohesive solutions"
              variants={itemVariants}
            />
            <ExpertiseCard 
              icon={<Lock size={36} />}
              title="Cybersecurity"
              description="Implementing multi-layered protection for sensitive systems"
              variants={itemVariants}
            />
            <ExpertiseCard 
              icon={<Cpu size={36} />}
              title="Software Development"
              description="Creating custom applications for specialized requirements"
              variants={itemVariants}
            />
            <ExpertiseCard 
              icon={<Users size={36} />}
              title="Consulting Services"
              description="Strategic guidance on technology implementation"
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
                Executive Command
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
              Our founding team brings valuable experience from technology and defense sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Alex Mitchell"
              position="Chief Executive Officer"
              bio="15 years of experience in technology leadership roles with a background in systems engineering and defense contracting."
              image="/images/team-1.jpg"
            />
            <TeamMember 
              name="Sarah Chen"
              position="Chief Technology Officer"
              bio="Computer scientist specializing in secure systems with previous experience at leading technology firms and research institutions."
              image="/images/team-2.jpg"
            />
            <TeamMember 
              name="James Reynolds"
              position="Chief Operations Officer"
              bio="Operations expert with experience managing technology implementation for government and private sector clients."
              image="/images/team-3.jpg"
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
                Strategic Development
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
              Building a foundation for growth and innovation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-600/30"></div>

            <div className="space-y-16">
              <TimelineItem 
                year="2023"
                title="Company Founded"
                description="Reticuli Technologies established with a focus on delivering specialized technology solutions for defense applications."
                side="left"
              />
              <TimelineItem 
                year="2024"
                title="Initial Projects"
                description="Began work on initial consulting engagements and proof-of-concept systems integration projects."
                side="right"
              />
              <TimelineItem 
                year="2025"
                title="Team Expansion"
                description="Growing our team of engineers and analysts to support increased client demand."
                side="left"
              />
              <TimelineItem 
                year="2025"
                title="Capability Development"
                description="Building specialized expertise in emerging defense technology areas and establishing partner relationships."
                side="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
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
                Operational Methodology
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
              How we work with clients to deliver effective solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ApproachCard 
              number="01"
              title="Understand"
              description="We begin by thoroughly understanding your unique challenges, requirements, and constraints."
            />
            <ApproachCard 
              number="02"
              title="Analyze"
              description="Our team analyzes available technologies and approaches to determine the most effective solution path."
            />
            <ApproachCard 
              number="03"
              title="Implement"
              description="We develop and implement solutions with clear communication and regular progress updates."
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
                <Zap size={30} className="text-gray-300" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                Ready to discuss your <span className="text-gray-400">defense technology</span> needs?
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Contact our team to explore how Reticuli Technologies can support your requirements.
              </p>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/20 group border border-gray-600/30"
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
    </Layout>
  );
};

// Expertise Card Component
const ExpertiseCard = ({ icon, title, description, variants }) => {
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