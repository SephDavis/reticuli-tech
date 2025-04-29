import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Cpu, Users, Award, Clock, Star, ChevronRight } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import HexGrid from '../components/ui/HexGrid';

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

  return (
    <Layout>
      <PageHeader 
        title="About Reticuli Technologies" 
        subtitle="Building the foundation for advanced defense solutions"
        backgroundImage="/images/about-header.jpg"
      />

      {/* Mission & Vision */}
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
                Our <span className="text-blue-400">Mission</span>
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
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Our Capabilities <ChevronRight className="ml-2" size={18} />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Connect With Us
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
                  Our <span className="text-blue-400">Vision</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  We envision contributing to a future where defense technology effectively integrates advanced computing, secure communications, and intelligent systems to provide robust protection against evolving threats while maintaining the highest ethical standards.
                </p>
                
                <h4 className="text-xl font-semibold text-white mt-8 mb-4">Core Values</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Excellence in Security</h5>
                      <p className="text-gray-400 text-sm">Unwavering commitment to implementing robust security practices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Lock size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Integrity & Responsibility</h5>
                      <p className="text-gray-400 text-sm">Ethical development and transparent business practices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-400">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Innovation</h5>
                      <p className="text-gray-400 text-sm">Exploring new approaches to solve challenging problems</p>
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

      {/* Expertise Areas */}
      <section className="py-16 bg-navy-800 relative overflow-hidden">
        <HexGrid className="absolute inset-0 opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Areas of <span className="text-blue-400">Expertise</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
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
              Leadership <span className="text-blue-400">Team</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
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
      <section className="py-20 bg-navy-800 relative">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-blue-400">Journey</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Building a foundation for growth and innovation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-600/30"></div>

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
              Our <span className="text-blue-400">Approach</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
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
    </Layout>
  );
};

// Expertise Card Component
const ExpertiseCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div 
      className="bg-navy-900/70 border border-white/5 p-6 rounded-lg text-center backdrop-blur-sm"
      variants={variants}
    >
      <div className="text-blue-400 mb-4 mx-auto p-3 bg-blue-900/20 inline-block rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
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
    >
      <div className="bg-navy-800 border border-white/5 rounded-lg overflow-hidden">
        <div className="aspect-[3/4] bg-navy-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent z-10"></div>
          <div 
            className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
          ></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-blue-400 font-medium mb-3">{position}</p>
          <p className="text-gray-400">{bio}</p>
        </div>
      </div>
      
      {/* Decorative tech elements */}
      <div className="absolute top-0 right-0 w-8 h-16 border-r border-t border-blue-500/20 rounded-tr-md"></div>
      <div className="absolute bottom-0 left-0 w-8 h-16 border-l border-b border-blue-500/20 rounded-bl-md"></div>
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
        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">{year}</span>
        <h3 className="text-xl font-bold text-white mt-1 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      
      <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-navy-800 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <div className="w-1/2"></div>
    </motion.div>
  );
};

// Approach Card Component
const ApproachCard = ({ number, title, description }) => {
  return (
    <motion.div 
      className="bg-navy-800/70 border border-white/5 p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-blue-400 text-5xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default About;