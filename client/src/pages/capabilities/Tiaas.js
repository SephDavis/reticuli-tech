import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, Server, Database, Shield, ChevronRight } from 'lucide-react';

// Components
import Layout from '../../components/layout/Layout';
import PageHeader from '../../components/ui/PageHeader';
import HexGrid from '../../components/ui/HexGrid';

const TiaasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader 
        title="OSINT Threat Intelligence SaaS" 
        subtitle="Real-time, actionable threat intelligence for cybersecurity teams"
        backgroundImage="/images/project-threat.jpg"
      />

      {/* Product Overview */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive <span className="text-blue-400">Threat Intelligence</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our OSINT Threat Intelligence SaaS platform provides real-time, actionable intelligence by aggregating and analyzing data from multiple sources. Designed for cybersecurity teams in defense contractors, government agencies, and enterprises, our platform delivers the insights you need to stay ahead of emerging threats.
              </p>
              <p className="text-gray-300 mb-8">
                With customizable dashboards, automated summaries, and integration capabilities, our platform transforms raw intelligence into strategic decision support for your security operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Request a Demo <ChevronRight className="ml-2" size={18} />
                </Link>
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Back to Projects
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
              <div className="bg-navy-800 border border-white/10 p-8 rounded-lg relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Key <span className="text-blue-400">Features</span>
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Real-time Threat Monitoring</h5>
                      <p className="text-gray-400 text-sm">Continuous ingestion and analysis of threat data from diverse sources</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Server size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">AI-Powered Analysis</h5>
                      <p className="text-gray-400 text-sm">Automated categorization and prioritization of threats</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Database size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Custom OSINT Integrations</h5>
                      <p className="text-gray-400 text-sm">Connect to specialized intelligence sources relevant to your industry</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Executive Dashboard</h5>
                      <p className="text-gray-400 text-sm">Clear visualization of threat landscape for decision makers</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
              
              {/* Tech decorative elements */}
              <div className="absolute top-0 right-0 w-12 h-24 border-r-2 border-t-2 border-blue-500/20 -mr-2 -mt-2"></div>
              <div className="absolute bottom-0 left-0 w-12 h-24 border-l-2 border-b-2 border-blue-500/20 -ml-2 -mb-2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to enhance your threat intelligence capabilities?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact our team to schedule a demo of our OSINT Threat Intelligence SaaS platform.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-md transition-colors duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TiaasPage;