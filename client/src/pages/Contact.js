import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Shield, Zap, Send, Hexagon, ChevronRight } from 'lucide-react';

// Components
import PageHeader from '../components/ui/PageHeader';
import ParticleBackground from '../components/ui/ParticleBackground';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
    interest: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    setError(null);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }
      
      // Success
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
        interest: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setSubmitStatus('error');
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
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team"
        backgroundImage="/images/contact-header.jpg"
      />

      {/* Contact Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <ParticleBackground />
        <TechGrid />
        <ScanLine />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-black rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Communication Hub
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Direct <span className="text-gray-400">Communication</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg h-full relative group"
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
                
                <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
                  <div className="px-4 py-1 bg-gray-900/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                    Connect With Us
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-100 mb-6 relative inline-block">
                  Contact <span className="text-gray-400">Information</span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </h2>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start group">
                    <div className="mr-4 p-3 bg-gray-900/20 rounded-full text-gray-400 border border-gray-700/30 group-hover:border-gray-600/50 transition-colors duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-gray-200 font-medium mb-1 group-hover:text-white transition-colors duration-300">Address</h3>
                      <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        123 Placeholder Ave, Suite Placeholder<br />
                        Starkville, MS 39759
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mr-4 p-3 bg-gray-900/20 rounded-full text-gray-400 border border-gray-700/30 group-hover:border-gray-600/50 transition-colors duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-gray-200 font-medium mb-1 group-hover:text-white transition-colors duration-300">Email</h3>
                      <a href="mailto:info@reticuli-tech.com" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                         Contact@ReticuliTech.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mr-4 p-3 bg-gray-900/20 rounded-full text-gray-400 border border-gray-700/30 group-hover:border-gray-600/50 transition-colors duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-gray-200 font-medium mb-1 group-hover:text-white transition-colors duration-300">Phone</h3>
                      <a href="tel:+16015550199" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                        (000) 000-0000 (We've yet to get a corporate # )
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mr-4 p-3 bg-gray-900/20 rounded-full text-gray-400 border border-gray-700/30 group-hover:border-gray-600/50 transition-colors duration-300">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-gray-200 font-medium mb-1 group-hover:text-white transition-colors duration-300">Hours</h3>
                      <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        Monday - Friday<br />
                        8:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700/20">
                  <div className="flex items-center">
                    <Shield size={20} className="text-gray-400 mr-3" />
                    <span className="text-gray-200 font-medium">Security First</span>
                  </div>
                  <p className="text-gray-500 mt-2 text-sm">
                    Our communications are secure and confidential. For sensitive inquiries, please request secure communication channels.
                  </p>
                </div>
                
                {/* Tech decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative group">
                <motion.div 
                  className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
                  animate={{ 
                    boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
                  <div className="px-4 py-1 bg-gray-900/80 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                    Message System
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-100 mb-6 relative inline-block">
                  Get in <span className="text-gray-400">Touch</span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </h2>
                
                {submitStatus === 'success' ? (
                  <motion.div 
                    className="bg-green-900/10 border border-green-500/30 rounded-lg p-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div 
                      className="mb-6 p-3 bg-green-900/20 inline-block rounded-full border border-green-500/30"
                      animate={{
                        boxShadow: ["0 0 0px 0px rgba(34,197,94,0)", "0 0 20px 5px rgba(34,197,94,0.2)", "0 0 0px 0px rgba(34,197,94,0)"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Send size={30} className="text-green-400" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">Transmission Complete</h3>
                    <p className="text-gray-300 mb-2">
                      Your message has been received and encrypted.
                    </p>
                    <p className="text-gray-400">
                      Our team will analyze your inquiry and respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-900/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400">{error || 'An error occurred. Please try again.'}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-200 font-medium mb-2">Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full bg-black border border-gray-700/50 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-gray-500 transition-all duration-300"
                          />
                          <motion.div 
                            className="absolute inset-0 border border-gray-500/0 rounded-md pointer-events-none"
                            animate={{ 
                              borderColor: focusedField === 'name' 
                                ? ['rgba(75,85,99,0.2)', 'rgba(75,85,99,0.5)', 'rgba(75,85,99,0.2)'] 
                                : 'rgba(75,85,99,0)'
                            }}
                            transition={{ duration: 2, repeat: focusedField === 'name' ? Infinity : 0 }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-200 font-medium mb-2">Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full bg-black border border-gray-700/50 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-gray-500 transition-all duration-300"
                          />
                          <motion.div 
                            className="absolute inset-0 border border-gray-500/0 rounded-md pointer-events-none"
                            animate={{ 
                              borderColor: focusedField === 'email' 
                                ? ['rgba(75,85,99,0.2)', 'rgba(75,85,99,0.5)', 'rgba(75,85,99,0.2)'] 
                                : 'rgba(75,85,99,0)'
                            }}
                            transition={{ duration: 2, repeat: focusedField === 'email' ? Infinity : 0 }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="organization" className="block text-gray-200 font-medium mb-2">Organization</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('organization')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-black border border-gray-700/50 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-gray-500 transition-all duration-300"
                          />
                          <motion.div 
                            className="absolute inset-0 border border-gray-500/0 rounded-md pointer-events-none"
                            animate={{ 
                              borderColor: focusedField === 'organization' 
                                ? ['rgba(75,85,99,0.2)', 'rgba(75,85,99,0.5)', 'rgba(75,85,99,0.2)'] 
                                : 'rgba(75,85,99,0)'
                            }}
                            transition={{ duration: 2, repeat: focusedField === 'organization' ? Infinity : 0 }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-200 font-medium mb-2">Phone (Optional)</label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-black border border-gray-700/50 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-gray-500 transition-all duration-300"
                          />
                          <motion.div 
                            className="absolute inset-0 border border-gray-500/0 rounded-md pointer-events-none"
                            animate={{ 
                              borderColor: focusedField === 'phone' 
                                ? ['rgba(75,85,99,0.2)', 'rgba(75,85,99,0.5)', 'rgba(75,85,99,0.2)'] 
                                : 'rgba(75,85,99,0)'
                            }}
                            transition={{ duration: 2, repeat: focusedField === 'phone' ? Infinity : 0 }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="interest" className="block text-gray-200 font-medium mb-2">Area of Interest</label>
                      <div className="relative">
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('interest')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-black border border-gray-700/50 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-gray-500 transition-all duration-300 appearance-none"
                        >
                          <option value="">Select an Option</option>
                          <option value="threat-intelligence">OSINT Threat Intelligence SaaS</option>
                          <option value="neuromorphic-xdr">Neuromorphic XDR</option>
                          <option value="blacklock">BlackLock Encryption</option>
                          <option value="neuromorphic-cloud">Neuromorphic Cloud Computing</option>
                          <option value="air-gapped-ids">Air-Gapped IDS Systems</option>
                          <option value="general">General Inquiry</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <Hexagon size={14} className="text-gray-500" />
                        </div>
                        <motion.div 
                          className="absolute inset-0 border border-gray-500/0 rounded-md pointer-events-none"
                          animate={{ 
                            borderColor: focusedField === 'interest' 
                              ? ['rgba(75,85,99,0.2)', 'rgba(75,85,99,0.5)', 'rgba(75,85,99,0.2)'] 
                              : 'rgba(75,85,99,0)'
                          }}
                          transition={{ duration: 2, repeat: focusedField === 'interest' ? Infinity : 0 }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-200 font-medium mb-2">Message</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows="5"
                          className="w-full bg-black border border-gray-700/50 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-gray-500 transition-all duration-300"
                        ></textarea>
                        <motion.div 
                          className="absolute inset-0 border border-gray-500/0 rounded-md pointer-events-none"
                          animate={{ 
                            borderColor: focusedField === 'message' 
                              ? ['rgba(75,85,99,0.2)', 'rgba(75,85,99,0.5)', 'rgba(75,85,99,0.2)'] 
                              : 'rgba(75,85,99,0)'
                          }}
                          transition={{ duration: 2, repeat: focusedField === 'message' ? Infinity : 0 }}
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className={`relative px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-md transition-all duration-300 overflow-hidden group ${
                        submitStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      <span className="relative z-10 flex items-center">
                        {submitStatus === 'sending' ? 'Transmitting...' : 'Send Message'}
                        <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      
                      {/* Button animation */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/30 to-gray-600/0"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </button>
                  </form>
                )}
                
                {/* Tech decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Demo Section */}
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
                Schedule a <span className="text-gray-400">Product Demo</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Interested in seeing our technology in action? Schedule a personalized demonstration with our team.
              </p>
              
              <button 
                onClick={() => document.getElementById('interest').focus()}
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/20 group border border-gray-600/30"
              >
                Request Demo
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
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;