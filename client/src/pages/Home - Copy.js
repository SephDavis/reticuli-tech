import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Globe, Cpu, ChevronRight } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import ParticleBackground from '../components/ui/ParticleBackground';
import HexGrid from '../components/ui/HexGrid';

const Home = () => {
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

  return (
    <Layout>
      {/* Hero Section with Particle Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/80 to-navy-900 z-10"></div>
        
        <div className="container mx-auto px-4 z-20 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              <span className="text-blue-400">Advanced</span> Defense Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Securing the future with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/services" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Our Capabilities <ChevronRight className="ml-2" size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-md transition-colors duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent z-10"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Core <span className="text-blue-400">Capabilities</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Reticuli Technologies delivers exceptional solutions for the most demanding defense applications
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServiceCard 
              icon={<Shield size={40} />}
              title="Defense Systems"
              description="Advanced defensive capabilities leveraging cutting-edge technology for maximum security and resilience."
              variants={itemVariants}
            />
            <ServiceCard 
              icon={<Lock size={40} />}
              title="Cybersecurity"
              description="Robust protection for critical infrastructure and sensitive information against evolving threats."
              variants={itemVariants}
            />
            <ServiceCard 
              icon={<Globe size={40} />}
              title="Global Intelligence"
              description="Comprehensive intelligence gathering and analysis systems for operational awareness."
              variants={itemVariants}
            />
            <ServiceCard 
              icon={<Cpu size={40} />}
              title="Advanced Computing"
              description="High-performance computing solutions optimized for mission-critical applications."
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* About Preview with Tech Background */}
      <section className="py-20 relative overflow-hidden bg-navy-800">
        <HexGrid className="absolute inset-0 opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advancing the <span className="text-blue-400">Future</span> of Defense
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                At Reticuli Technologies, we develop cutting-edge systems that address emerging global security challenges. Our team of experts combines innovation with practical implementation to deliver solutions that protect critical infrastructure and personnel.
              </p>
              <p className="text-gray-300 mb-8">
                We work closely with defense agencies and contractors to understand their unique requirements and develop customized technologies that exceed expectations.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
              >
                Learn more about our approach <ChevronRight className="ml-1" size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg overflow-hidden border border-white/10 shadow-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-navy-900/40"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-navy-900/80 rounded backdrop-blur-sm">
                  <p className="text-white font-medium">Reticuli Technologies: Advanced Defense Systems</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most innovative defense solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Quantum-Enhanced Cryptography"
              category="Cybersecurity"
              image="/images/project-1.jpg"
            />
            <ProjectCard 
              title="Advanced Aerospace Defense Systems"
              category="Aerospace"
              image="/images/project-2.jpg"
            />
            <ProjectCard 
              title="Neural Intelligence Platform"
              category="AI Systems"
              image="/images/project-3.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-transparent border border-blue-600/50 hover:bg-blue-600/10 text-blue-400 font-medium rounded-md transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to enhance your defense capabilities?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today to discuss how Reticuli Technologies can develop tailored solutions for your requirements.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-md transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div 
      className="bg-navy-800 border border-white/5 p-6 rounded-lg hover:shadow-soft hover:border-blue-600/20 transition-all duration-300 group"
      variants={variants}
    >
      <div className="text-blue-400 mb-4 p-3 bg-blue-900/20 inline-block rounded-lg group-hover:bg-blue-900/30 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <Link 
        to={`/services`} 
        className="mt-4 inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors"
      >
        Learn more <ChevronRight className="ml-1 group-hover:ml-2 transition-all duration-300" size={16} />
      </Link>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ title, category, image }) => {
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="aspect-[4/3] bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <Link 
          to="/projects" 
          className="mt-2 inline-flex items-center text-gray-300 font-medium group-hover:text-white transition-colors"
        >
          View details <ChevronRight className="ml-1 opacity-0 group-hover:opacity-100" size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;