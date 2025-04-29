import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Cpu, AlertTriangle, Zap, Database, Network, ChevronRight } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import HexGrid from '../components/ui/HexGrid';

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

  return (
    <Layout>
      <PageHeader 
        title="Research Areas & Projects" 
        subtitle="Developing defense technology solutions to address emerging challenges"
        backgroundImage="/images/projects-header.jpg"
      />

      {/* Research Focus Areas */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Research <span className="text-blue-400">Focus</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Core technology areas we're developing to address critical defense challenges
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
              icon={<AlertTriangle size={36} />}
              title="OSINT Threat Intelligence"
              description="Creating advanced SaaS systems to aggregate, analyze, and deliver actionable threat intelligence from diverse sources"
              technologies={["OSINT Integration", "AI Summarization", "Vulnerability Intelligence"]}
              variants={itemVariants}
            />
            <ResearchAreaCard 
              icon={<Cpu size={36} />}
              title="Neuromorphic Computing"
              description="Exploring next-generation computing architectures for advanced defense applications"
              technologies={["Neuromorphic Processors", "AI Acceleration", "Efficient Computing"]}
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
            <ResearchAreaCard 
              icon={<Shield size={36} />}
              title="Air-Gapped Security"
              description="Specialized intrusion detection systems for classified and critical infrastructure networks"
              technologies={["Isolated Networks", "Anomaly Detection", "Critical Infrastructure Protection"]}
              variants={itemVariants}
            />
            <ResearchAreaCard 
              icon={<Database size={36} />}
              title="Neuromorphic Cloud"
              description="Developing specialized cloud infrastructure for neuromorphic processing to enable ultra-efficient AI workloads"
              technologies={["Cloud Computing", "AI Infrastructure", "Scientific Computing"]}
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-navy-800 relative">
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
              Current <span className="text-blue-400">Initiatives</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Our active development focus areas
            </p>
          </motion.div>

          <div className="space-y-12">
            <ProjectCard 
              title="OSINT Threat Intelligence SaaS"
              description="Our highest priority platform providing real-time, summarized vulnerability intelligence via subscription. Targets cybersecurity firms, defense contractors, and enterprises needing actionable threat data."
              image="/images/project-threat.jpg"
              tags={["OSINT", "SaaS", "Threat Intel", "Priority 1"]}
              links={[
                { text: "View Platform", url: "/capabilities/tiaas" }
              ]}
            />
            
            <ProjectCard 
              title="Neuromorphic XDR"
              description="Next-gen AI-driven extended detection & response platform optimized for neuromorphic chips, offering superior speed and efficiency. Ideal for government contracts, critical infrastructure security, and enterprises."
              image="/images/project-xdr.jpg"
              tags={["XDR", "Neuromorphic", "AI", "Priority 2"]}
              links={[
                { text: "Learn More", url: "/capabilities/xdr" }
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
              title="Neuromorphic Cloud Computing"
              description="Cloud infrastructure built specifically for neuromorphic processors, enabling ultra-efficient AI workloads. Targeting long-term competitive edge in AI research, defense, and scientific computing."
              image="/images/project-cloud.jpg"
              tags={["Cloud", "Neuromorphic", "AI Infrastructure", "Priority 4"]}
              links={[
                { text: "Coming Soon", url: "/roadmap" }
              ]}
              reversed
            />
            
            <ProjectCard 
              title="Neuromorphic IDS for Air-Gapped Systems"
              description="Advanced intrusion detection system for classified and critical infrastructure networks, optimized for neuromorphic computing. Specialized for defense and industrial control security applications."
              image="/images/project-airgap.jpg"
              tags={["IDS", "Air-Gapped", "Critical Infrastructure", "Priority 5"]}
              links={[
                { text: "In Development", url: "/roadmap" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
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
              Development <span className="text-blue-400">Roadmap</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Our strategic technology development plan
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-600/30"></div>

            <div className="space-y-16">
              <RoadmapItem 
                quarter="Q1-Q2 2025"
                title="OSINT Threat Intelligence SaaS"
                description="Launch of our highest priority platform providing summarized vulnerability intelligence with subscription tiers for various organization sizes."
                side="left"
              />
              <RoadmapItem 
                quarter="Q3 2025"
                title="Neuromorphic XDR Alpha"
                description="Initial deployment of our AI-driven extended detection & response platform with select partners for field testing and validation."
                side="right"
              />
              <RoadmapItem 
                quarter="Q4 2025"
                title="BlackLock Encryption Standard"
                description="Prototype release of our post-quantum encryption technology for cryptographic validation and early government/military adoption."
                side="left"
              />
              <RoadmapItem 
                quarter="Q1-Q2 2026"
                title="Neuromorphic Cloud & IDS"
                description="Development of specialized cloud infrastructure and intrusion detection systems leveraging neuromorphic processing capabilities."
                side="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Federal Focus */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Federal <span className="text-blue-400">Engagement</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl">
              Our strategic approach to federal and defense opportunities
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
              <h3 className="text-2xl font-bold text-white mb-4">OTA & SBIR Focus</h3>
              <p className="text-gray-300 mb-6">
                We're developing specialized solutions for Other Transaction Authority (OTA) and Small Business Innovation Research (SBIR) opportunities to establish a strong presence in the defense technology ecosystem.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <ChevronRight size={16} />
                  </div>
                  <span>Prototype development targeting specific defense requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <ChevronRight size={16} />
                  </div>
                  <span>White papers and capability briefs for rapidly evolving needs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <ChevronRight size={16} />
                  </div>
                  <span>Non-dilutive funding approaches to fuel innovation</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-navy-900/70 border border-white/5 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Defense Industry Support</h3>
              <p className="text-gray-300 mb-6">
                Providing specialized tools and expertise to help defense contractors meet evolving compliance and security requirements.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <ChevronRight size={16} />
                  </div>
                  <span>CMMC 2.0 readiness assessment and remediation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <ChevronRight size={16} />
                  </div>
                  <span>NIST 800-171 assessment and documentation support</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <ChevronRight size={16} />
                  </div>
                  <span>Technology integration for enhanced security posture</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in our technology development?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact our team to discuss potential collaboration or to learn more about our solutions.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-md transition-colors duration-300"
            >
              Schedule a Discussion
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Research Area Card Component
const ResearchAreaCard = ({ icon, title, description, technologies, variants }) => {
  return (
    <motion.div 
      className="bg-navy-900/70 border border-white/5 p-6 rounded-lg h-full flex flex-col backdrop-blur-sm"
      variants={variants}
    >
      <div className="text-blue-400 mb-4 p-3 bg-blue-900/20 inline-block rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mt-auto">
        <h4 className="text-sm font-semibold text-blue-400 mb-2">TECHNOLOGIES</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, image, tags, links, reversed }) => {
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-navy-900/70 border border-white/5 rounded-lg overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10 md:hidden"></div>
        <div 
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
        ></div>
      </div>
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="mt-auto flex flex-wrap gap-3">
          {links.map((link, index) => (
            <Link 
              key={index}
              to={link.url} 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 text-sm flex items-center"
            >
              {link.text} <ChevronRight className="ml-1" size={16} />
            </Link>
          ))}
        </div>
      </div>
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
        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">{quarter}</span>
        <h3 className="text-xl font-bold text-white mt-1 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      
      <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-navy-900 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <div className="w-1/2"></div>
    </motion.div>
  );
};

export default Projects;