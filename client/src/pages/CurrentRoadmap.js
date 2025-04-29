import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Cpu, Lock, Network, Database, ChevronRight } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import HexGrid from '../components/ui/HexGrid';

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader 
        title="Product Roadmap" 
        subtitle="Our strategic technology development plan"
        backgroundImage="/images/roadmap-header.jpg"
      />

      {/* Roadmap Timeline */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <HexGrid className="absolute inset-0 opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technology <span className="text-blue-400">Roadmap</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Our strategic development plan for advanced defense technology solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-600/30"></div>

            <div className="space-y-20">
              <RoadmapItem 
                quarter="Q1-Q2 2025"
                title="OSINT Threat Intelligence SaaS"
                description="Launch of our highest priority platform providing summarized vulnerability intelligence with subscription tiers for various organization sizes."
                icon={<Calendar size={24} />}
                features={[
                  "Commercial tier launch with web portal and threat feed summaries",
                  "Enterprise tier with custom OSINT integrations",
                  "CISO dashboard with executive-ready reporting"
                ]}
                side="left"
                status="In Development"
              />
              
              <RoadmapItem 
                quarter="Q3 2025"
                title="Neuromorphic XDR Alpha"
                description="Initial deployment of our AI-driven extended detection & response platform with select partners for field testing and validation."
                icon={<Cpu size={24} />}
                features={[
                  "AI-powered threat detection engine",
                  "Neuromorphic processing optimization",
                  "Partner testing program with select clients"
                ]}
                side="right"
                status="Planning Phase"
              />
              
              <RoadmapItem 
                quarter="Q4 2025"
                title="BlackLock Encryption Standard"
                description="Prototype release of our post-quantum encryption technology for cryptographic validation and early government/military adoption."
                icon={<Lock size={24} />}
                features={[
                  "RLWR-based post-quantum security framework",
                  "Government validation program",
                  "SDK for integration with existing systems"
                ]}
                side="left"
                status="Research Phase"
              />
              
              <RoadmapItem 
                quarter="Q1-Q2 2026"
                title="Neuromorphic Cloud & IDS"
                description="Development of specialized cloud infrastructure and intrusion detection systems leveraging neuromorphic processing capabilities."
                icon={<Network size={24} />}
                features={[
                  "Neuromorphic cloud computing platform",
                  "Air-gapped IDS for critical infrastructure",
                  "Ultra-efficient AI workload processing"
                ]}
                side="right"
                status="Early Planning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Projects */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Coming <span className="text-blue-400">Soon</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Future projects in our development pipeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-navy-900/70 border border-white/5 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-blue-400 mb-4">
                <Database size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neuromorphic Cloud Computing</h3>
              <p className="text-gray-300 mb-6">
                A specialized cloud infrastructure built for neuromorphic processors, enabling ultra-efficient AI workloads for defense, research, and enterprise applications.
              </p>
              <div className="flex items-center text-blue-400">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm font-medium">Expected Q1 2026</span>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-navy-900/70 border border-white/5 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-blue-400 mb-4">
                <Network size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Air-Gapped IDS</h3>
              <p className="text-gray-300 mb-6">
                Advanced intrusion detection system designed specifically for isolated, classified, and critical infrastructure networks with neuromorphic computing optimization.
              </p>
              <div className="flex items-center text-blue-400">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm font-medium">Expected Q2 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in our development roadmap?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact our team to discuss current projects and future technologies.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-md transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Roadmap Item Component
const RoadmapItem = ({ quarter, title, description, icon, features, side, status }) => {
  return (
    <motion.div 
      className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`w-1/2 ${side === 'left' ? 'pr-12 text-right' : 'pl-12'}`}>
        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">{quarter}</span>
        <h3 className="text-xl font-bold text-white mt-1 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <ul className={`space-y-2 ${side === 'left' ? 'ml-auto' : ''}`}>
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${side === 'left' ? 'justify-end' : ''}`}>
              <div className={`flex-shrink-0 mt-1 text-blue-400 ${side === 'left' ? 'order-2 ml-3' : 'mr-3'}`}>
                <ChevronRight size={16} />
              </div>
              <span className="text-sm text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className={`mt-4 inline-block px-3 py-1 bg-blue-900/30 rounded-full ${side === 'left' ? 'ml-auto' : ''}`}>
          <span className="text-xs font-medium text-blue-300">{status}</span>
        </div>
      </div>
      
      <div className="w-10 h-10 bg-blue-600 rounded-full border-4 border-navy-900 z-10 flex items-center justify-center">
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <div className="w-1/2"></div>
    </motion.div>
  );
};

export default Roadmap;