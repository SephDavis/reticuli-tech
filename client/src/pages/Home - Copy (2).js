import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, Terminal, FileText, ChevronRight, Calendar, ExternalLink } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import ParticleBackground from '../components/ui/ParticleBackground';
import HexGrid from '../components/ui/HexGrid';

// Custom CSS for silver shimmer effect
const silverShimmerStyle = `
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

  .metallic-box {
    background: linear-gradient(145deg, #1c1c1c, #2a2a2a);
    border: 1px solid #444;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }

  .metallic-box:hover {
    border-color: #888;
    box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  }

  .border-shimmer {
    position: relative;
  }

  .border-shimmer::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid #555;
    border-radius: 0.375rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .border-shimmer:hover::after {
    opacity: 1;
    animation: silverShimmer 2s linear infinite;
  }
`;

const Home = () => {
  // User segment state
  const [userSegment, setUserSegment] = useState('federal');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Inject the custom CSS for the silver shimmer effect
    const styleElement = document.createElement('style');
    styleElement.textContent = silverShimmerStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
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
      {/* Hero Section with Particle Effect & Primary CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121620]/80 to-[#121620] z-10"></div>
        
        <div className="container mx-auto px-4 z-20 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center items-center space-x-2 mb-4">
              <span className="text-xs font-semibold text-[#121620] bg-[#C0C0C0] px-2 py-1 rounded">SAM Active ✓</span>
              <span className="text-xs font-semibold text-[#121620] bg-[#C0C0C0] px-2 py-1 rounded">CAGE Verified ✓</span>
              <span className="text-xs font-semibold text-[#121620] bg-[#C0C0C0] px-2 py-1 rounded">CMMC L2 Ready ✓</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              <span className="silver-shimmer">AI-Driven</span> Defense. <span className="silver-shimmer">Zero</span> Dilution.
            </h1>
            <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8">
              Advanced threat intelligence and compliance solutions for defense contractors and federal agencies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="https://calendly.com/reticuli-tech/compliance-gap-call"
                className="px-8 py-3 btn-metallic text-[#121620] font-medium rounded-md flex items-center justify-center shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2" size={18} />
                Book a 30-min Compliance Gap Call
              </Link>
              <Link 
                to="/intel-briefs" 
                className="px-8 py-3 bg-transparent border border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/10 text-white font-medium rounded-md transition-colors duration-300"
              >
                Get Weekly Intel Brief
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121620] to-transparent z-10"></div>
      </section>

      {/* Audience Segmentation Tabs */}
      <section className="py-6 bg-[#1A1E28] border-y border-[#C0C0C0]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <button 
              className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                userSegment === 'federal' ? 'silver-shimmer border-b-2 border-[#C0C0C0]' : 'text-[#C0C0C0] hover:text-white'
              }`}
              onClick={() => setUserSegment('federal')}
            >
              Federal
            </button>
            <button 
              className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                userSegment === 'commercial' ? 'silver-shimmer border-b-2 border-[#C0C0C0]' : 'text-[#C0C0C0] hover:text-white'
              }`}
              onClick={() => setUserSegment('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                userSegment === 'investors' ? 'silver-shimmer border-b-2 border-[#C0C0C0]' : 'text-[#C0C0C0] hover:text-white'
              }`}
              onClick={() => setUserSegment('investors')}
            >
              Investors
            </button>
            <button 
              className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                userSegment === 'talent' ? 'silver-shimmer border-b-2 border-[#C0C0C0]' : 'text-[#C0C0C0] hover:text-white'
              }`}
              onClick={() => setUserSegment('talent')}
            >
              Talent
            </button>
          </div>
        </div>
      </section>

      {/* Monetization Services Section */}
      <section className="py-20 bg-[#121620]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="silver-shimmer">Immediate</span> Compliance & Security
            </h2>
            {userSegment === 'federal' && (
              <p className="mt-4 text-xl text-[#C0C0C0] max-w-2xl mx-auto">
                NIST 800-171 and CMMC 2.0 compliance solutions aligned with DFARS 252.204-7012 requirements
              </p>
            )}
            {userSegment === 'commercial' && (
              <p className="mt-4 text-xl text-[#C0C0C0] max-w-2xl mx-auto">
                Defense-grade threat intelligence and compliance solutions for DIB contractors
              </p>
            )}
            {userSegment === 'investors' && (
              <p className="mt-4 text-xl text-[#C0C0C0] max-w-2xl mx-auto">
                Non-dilutive revenue generation through SBIR/STTR and OTA contract vehicles
              </p>
            )}
            {userSegment === 'talent' && (
              <p className="mt-4 text-xl text-[#C0C0C0] max-w-2xl mx-auto">
                Join our team of cleared professionals working on cutting-edge defense technology
              </p>
            )}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServiceCard 
              icon={<Shield size={40} />}
              title="Compliance-as-a-Service"
              description="CMMC 2.0 and NIST 800-171 assessment, remediation, and documentation. Fixed-fee pricing with rapid turnaround."
              price="Starting at $7.5K"
              ctaText="Get Instant Quote"
              ctaLink="/services/compliance"
              variants={itemVariants}
            />
            <ServiceCard 
              icon={<Terminal size={40} />}
              title="Threat Intel Platform"
              description="Real-time defense intelligence feeds customized for your threat surface. Subscription includes weekly analyst briefings."
              price="$1.5K/month"
              ctaText="Schedule Demo"
              ctaLink="https://calendly.com/reticuli-tech/threat-intel-demo"
              variants={itemVariants}
            />
            <ServiceCard 
              icon={<Server size={40} />}
              title="Red Team Assessment"
              description="Layer 3-4 exploitation testing by cleared professionals. Detailed findings and remediation roadmap included."
              price="Custom Quote"
              ctaText="Book Consultation"
              ctaLink="https://calendly.com/reticuli-tech/red-team-consultation"
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Federal/Contract Credibility Section */}
      <section className="py-20 relative overflow-hidden bg-[#1A1E28]">
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
                Defense <span className="silver-shimmer">Credentials</span> & Experience
              </h2>
              
              {userSegment === 'federal' && (
                <>
                  <p className="text-[#C0C0C0] mb-6 text-lg">
                    Reticuli Technologies is an active participant in multiple DARPA and OUSD(R&E) OTA consortiums with a track record of delivering secure, compliant solutions to federal customers.
                  </p>
                  <p className="text-[#C0C0C0] mb-8">
                    Our team brings decades of combined experience from DoD, intelligence agencies, and defense prime contractors. All engineering staff maintain security clearances.
                  </p>
                </>
              )}
              
              {userSegment === 'commercial' && (
                <>
                  <p className="text-[#C0C0C0] mb-6 text-lg">
                    As a trusted DIB partner, we understand the unique compliance and security challenges faced by defense contractors. Our solutions are designed to get you contract-ready quickly.
                  </p>
                  <p className="text-[#C0C0C0] mb-8">
                    Our services are tailored to align with DFARS requirements and can be customized to meet specific prime contractor flow-down obligations.
                  </p>
                </>
              )}
              
              {userSegment === 'investors' && (
                <>
                  <p className="text-[#C0C0C0] mb-6 text-lg">
                    Reticuli Technologies operates on a zero-dilution strategy, leveraging non-dilutive funding sources including SBIR/STTR, OTAs, and direct commercial revenue.
                  </p>
                  <p className="text-[#C0C0C0] mb-8">
                    Our focus on immediate revenue generation through compliance services funds our advanced R&D in neuromorphic defense systems and AI-driven threat intelligence.
                  </p>
                </>
              )}
              
              {userSegment === 'talent' && (
                <>
                  <p className="text-[#C0C0C0] mb-6 text-lg">
                    Join our elite team of security-cleared professionals working on cutting-edge defense technology. We offer competitive compensation and the opportunity to work on national security challenges.
                  </p>
                  <p className="text-[#C0C0C0] mb-8">
                    We actively recruit SkillBridge fellows and transitioning military personnel with expertise in cybersecurity, AI/ML, and systems engineering.
                  </p>
                </>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/federal"
                  className="px-6 py-3 bg-transparent border border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/10 text-[#C0C0C0] font-medium rounded-md transition-colors duration-300 flex items-center"
                >
                  <FileText className="mr-2" size={18} />
                  Download Capabilities Statement
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="metallic-box bg-[#121620]/80 border border-[#444] p-8 rounded-lg relative z-10 border-shimmer">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contract <span className="silver-shimmer">Vehicles</span>
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#C0C0C0]">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">CAGE Code: 8URTP</h5>
                      <p className="text-[#C0C0C0] text-sm">SAM.gov Registered & Active</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#C0C0C0]">
                      <Lock size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">OTA Consortium Member</h5>
                      <p className="text-[#C0C0C0] text-sm">Rapid prototype contracting available</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#C0C0C0]">
                      <Server size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">NAICS Primary: 541512</h5>
                      <p className="text-[#C0C0C0] text-sm">Computer Systems Design Services</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 bg-[#2A2A2A] p-4 rounded border border-[#444]">
                  <h4 className="text-white font-semibold mb-2">SBIR Topic: DoD23-D004</h4>
                  <p className="text-[#C0C0C0] text-sm mb-2">
                    AI/ML Techniques for Enhanced Cyber Threat Detection
                  </p>
                  <Link
                    to="/federal/sbir-portfolio"
                    className="text-[#C0C0C0] text-sm flex items-center hover:text-white"
                  >
                    View Project Details <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Decorative tech elements */}
              <div className="absolute top-0 right-0 w-12 h-24 border-r-2 border-t-2 border-[#444] -mr-2 -mt-2"></div>
              <div className="absolute bottom-0 left-0 w-12 h-24 border-l-2 border-b-2 border-[#444] -ml-2 -mb-2"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#888]/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C0C0C0]/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intel Briefs / Lead Magnet */}
      <section className="py-20 bg-[#121620]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest <span className="silver-shimmer">Intel Briefs</span>
            </h2>
            <p className="mt-4 text-xl text-[#C0C0C0] max-w-2xl mx-auto">
              Subscribe to our weekly threat intelligence briefs for defense contractors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IntelBrief 
              title="Critical Vulnerabilities in Remote Authentication Systems"
              date="April 18, 2025"
              category="Cyber Threats"
              excerpt="Analysis of recently discovered vulnerabilities affecting common DIB authentication systems and remediation guidance."
            />
            <IntelBrief 
              title="Supply Chain Risk Management: New DFARS Requirements"
              date="April 11, 2025"
              category="Compliance"
              excerpt="Breakdown of upcoming changes to DFARS clauses impacting supply chain security for defense contractors."
            />
            <IntelBrief 
              title="Advanced Persistent Threat Targeting Defense Industrial Base"
              date="April 4, 2025"
              category="Threat Actor"
              excerpt="Technical analysis of APT activity specifically targeting defense contractors and recommended countermeasures."
            />
          </div>

          <div className="mt-12 max-w-xl mx-auto">
            <div className="metallic-box bg-[#1A1E28] rounded-lg border border-[#444] p-6">
              <h3 className="text-xl font-bold text-white mb-4">Get the Weekly Intel Brief</h3>
              <p className="text-[#C0C0C0] mb-4">
                Subscribe to receive our defense-focused threat intelligence analysis every Friday.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 bg-[#121620] border border-[#444] rounded-md text-white focus:outline-none focus:border-[#888]"
                />
                <button className="px-6 py-2 btn-metallic text-[#121620] font-medium rounded-md shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#C0C0C0]/50 mt-3 text-xs">
                We respect your privacy. All information is handled according to our strict data policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#121620] to-[#1A1E28]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Defense-Grade Compliance & Security?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Schedule your 30-minute Compliance Gap Call today and receive an actionable roadmap for your organization.
            </p>
            <Link 
              to="https://calendly.com/reticuli-tech/compliance-gap-call"
              className="px-8 py-3 btn-metallic text-[#121620] font-medium rounded-md shadow-lg flex items-center justify-center mx-auto w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2" size={18} />
              Book Your Compliance Gap Call
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Service Card Component with Pricing
const ServiceCard = ({ icon, title, description, price, ctaText, ctaLink, variants }) => {
  return (
    <motion.div 
      className="metallic-box bg-[#1A1E28] border border-[#444] p-6 rounded-lg hover:shadow-lg border-shimmer flex flex-col h-full"
      variants={variants}
    >
      <div className="text-[#C0C0C0] mb-4 p-3 bg-[#2A2A2A] inline-block rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#C0C0C0] mb-4 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <div className="silver-shimmer font-bold mb-4">{price}</div>
        <Link 
          to={ctaLink} 
          className="w-full px-4 py-2 btn-metallic text-[#121620] font-medium rounded-md shadow-lg text-center block"
          target={ctaLink.startsWith('http') ? "_blank" : ""}
          rel={ctaLink.startsWith('http') ? "noopener noreferrer" : ""}
        >
          {ctaText}
        </Link>
      </div>
    </motion.div>
  );
};

// Intel Brief Card Component
const IntelBrief = ({ title, date, category, excerpt }) => {
  return (
    <motion.div 
      className="metallic-box bg-[#1A1E28] border border-[#444] p-6 rounded-lg hover:shadow-lg border-shimmer flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-3">
        <span className="text-xs font-semibold text-[#121620] bg-[#C0C0C0] px-2 py-1 rounded">
          {category}
        </span>
        <span className="text-xs text-[#C0C0C0] ml-2">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#C0C0C0] mb-4 flex-grow">{excerpt}</p>
      <Link 
        to="/intel-briefs" 
        className="mt-auto text-[#C0C0C0] font-medium flex items-center hover:text-white"
      >
        Read Full Brief <ChevronRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default Home;