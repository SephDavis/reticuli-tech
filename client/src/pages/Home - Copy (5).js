import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Cpu, AlertTriangle, ChevronRight, Network, Database } from 'lucide-react';

// REMOVE THIS IMPORT - Layout is already provided in App.js
// import Layout from '../components/layout/Layout';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // REMOVE THE LAYOUT WRAPPER - it's already in App.js
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/80 to-navy-900/95"></div>
        
        <div className="container mx-auto px-4 z-20 relative py-24">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-blue-400">RETICULI</span> TECHNOLOGIES
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Advanced defense technology solutions for emerging security challenges
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                to="/projects"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md flex items-center justify-center shadow-lg"
              >
                Our Solutions
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-md transition-colors duration-300 flex items-center"
              >
                Request Demo <ChevronRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our <span className="text-blue-400">Focus Areas</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Developing innovative solutions to address defense security challenges
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <CapabilityItem 
                icon={<AlertTriangle size={32} />}
                title="Threat Intelligence"
                description="OSINT-based threat intelligence platform for defense contractors and enterprise security teams"
                emphasis="Priority 1"
              />
              <CapabilityItem 
                icon={<Cpu size={32} />}
                title="Neuromorphic Computing"
                description="Next-generation computing architectures optimized for defense applications"
                emphasis="Priority 2"
              />
              <CapabilityItem 
                icon={<Lock size={32} />}
                title="Post-Quantum Security"
                description="BlackLock encryption standard leveraging RLWR for post-quantum security"
                emphasis="Priority 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-blue-400">OSINT</span> Threat Intelligence
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our highest priority platform provides summarized vulnerability intelligence via subscription. Designed for cybersecurity firms, defense contractors, and enterprises needing actionable threat data in real-time.
              </p>
              <p className="text-gray-300 mb-8">
                The platform combines automated data collection with custom analytics to deliver insights that help organizations stay ahead of emerging threats.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-white/10 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl font-bold mb-1">Multi-source</div>
                  <div className="text-gray-400 text-sm">Intelligence gathering</div>
                </div>
                <div className="border border-white/10 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl font-bold mb-1">Automated</div>
                  <div className="text-gray-400 text-sm">Analysis & reporting</div>
                </div>
                <div className="border border-white/10 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl font-bold mb-1">Custom</div>
                  <div className="text-gray-400 text-sm">OSINT integrations</div>
                </div>
                <div className="border border-white/10 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl font-bold mb-1">Executive</div>
                  <div className="text-gray-400 text-sm">Dashboard & reporting</div>
                </div>
              </div>

              <Link 
                to="/capabilities/tiaas" 
                className="inline-flex items-center text-gray-300 font-medium hover:text-white transition-colors"
              >
                Learn more about our platform <ChevronRight className="ml-1" size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative h-80 md:h-96 lg:h-[400px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 border border-white/10 rounded-xl overflow-hidden bg-navy-800 flex items-center justify-center">
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                  <div className="mb-6 p-4 bg-blue-900/20 rounded-full">
                    <AlertTriangle className="w-16 h-16 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Threat Intelligence Platform</h3>
                  <p className="text-gray-300 mb-4">Real-time security insights for defense contractors</p>
                  <div className="flex space-x-4">
                    <Link to="/capabilities/tiaas" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
                      Platform Details
                    </Link>
                    <Link to="/contact" className="px-4 py-2 bg-transparent border border-white/20 text-gray-300 hover:bg-white/5 rounded-md text-sm">
                      Request Demo
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Decorative tech elements */}
              <div className="absolute top-0 right-0 w-12 h-24 border-r-2 border-t-2 border-blue-500/20 -mr-2 -mt-2"></div>
              <div className="absolute bottom-0 left-0 w-12 h-24 border-l-2 border-b-2 border-blue-500/20 -ml-2 -mb-2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Research */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Advanced <span className="text-blue-400">Research</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our innovative technologies in development
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchCard 
              icon={<Cpu size={24} />}
              title="Neuromorphic XDR"
              description="AI-driven extended detection & response platform optimized for neuromorphic chips, offering superior speed and efficiency."
              status="Development"
              linkTo="/capabilities/xdr"
            />
            <ResearchCard 
              icon={<Lock size={24} />}
              title="BlackLock Encryption"
              description="Post-quantum encryption technology leveraging RLWR to provide industry-leading security for sensitive communications."
              status="Research"
              linkTo="/capabilities/blacklock"
            />
            <ResearchCard 
              icon={<Network size={24} />}
              title="Neuromorphic Computing"
              description="Specialized infrastructure for neuromorphic processors, enabling ultra-efficient AI workloads for defense applications."
              status="Planning"
              linkTo="/roadmap"
            />
          </div>
        </div>
      </section>

      {/* Federal Focus */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-navy-800 border border-white/5 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Defense <span className="text-blue-400">Contracting</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  We're targeting OTA and SBIR opportunities for non-dilutive funding and establishing a strong presence in the defense technology ecosystem.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">CMMC Compliance</h5>
                      <p className="text-gray-400 text-sm">Gap assessment and compliance assistance for defense contractors</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Database size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Targeted Prototypes</h5>
                      <p className="text-gray-400 text-sm">Solutions designed for specific defense requirements</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-navy-800 border border-white/5 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Technology <span className="text-blue-400">Roadmap</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Our strategic development plan focuses on creating innovative technologies that address critical defense and security challenges.
                </p>
                <ul className="space-y-3">
                  <li className="pb-3 border-b border-white/5">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">OSINT Platform</span>
                      <span className="text-blue-400 text-sm">Q1-Q2 2025</span>
                    </div>
                    <p className="text-gray-400 text-sm">Initial release of our threat intelligence platform</p>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">Neuromorphic XDR</span>
                      <span className="text-blue-400 text-sm">Q3 2025</span>
                    </div>
                    <p className="text-gray-400 text-sm">Alpha release for partner testing</p>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">BlackLock Encryption</span>
                      <span className="text-blue-400 text-sm">Q4 2025</span>
                    </div>
                    <p className="text-gray-400 text-sm">Prototype validation with select partners</p>
                  </li>
                </ul>
                <Link 
                  to="/roadmap" 
                  className="mt-6 inline-flex items-center text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  View complete roadmap <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to discuss your defense technology needs?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact our team to explore how Reticuli Technologies can support your requirements.
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
    </>
  );
};

// Capability item component
const CapabilityItem = ({ icon, title, description, emphasis }) => {
  return (
    <motion.div 
      className="bg-navy-900/70 border border-white/5 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-blue-400 mb-4 p-3 bg-blue-900/20 inline-block rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex items-center">
        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full">
          {emphasis}
        </span>
      </div>
    </motion.div>
  );
};

// Research card component
const ResearchCard = ({ icon, title, description, status, linkTo }) => {
  return (
    <motion.div 
      className="bg-navy-900/70 border border-white/5 p-6 rounded-lg h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 flex justify-between items-start">
        <div className="p-2 bg-blue-900/20 rounded-full text-blue-400">
          {icon}
        </div>
        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full">
          {status}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <Link 
        to={linkTo} 
        className="text-gray-300 text-sm flex items-center hover:text-white mt-auto"
      >
        Learn more <ChevronRight size={14} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default Home;