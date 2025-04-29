import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Shield } from 'lucide-react';

// Components
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('sending');
    
    setTimeout(() => {
      // This would normally be an API call
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
    }, 1500);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team"
        backgroundImage="/images/contact-header.jpg"
      />

      {/* Contact Section */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-navy-800 border border-white/5 p-8 rounded-lg h-full"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact <span className="text-blue-400">Information</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-900/20 rounded-full text-blue-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Address</h3>
                      <p className="text-gray-400">
                        1123 Defense Ave, Suite 500<br />
                        Starkville, MS 39759
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-900/20 rounded-full text-blue-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <a href="mailto:info@reticuli-tech.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                        info@reticuli-tech.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-900/20 rounded-full text-blue-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Phone</h3>
                      <a href="tel:+16015550199" className="text-gray-400 hover:text-blue-400 transition-colors">
                        (601) 555-0199
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-900/20 rounded-full text-blue-400">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Hours</h3>
                      <p className="text-gray-400">
                        Monday - Friday<br />
                        8:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex items-center">
                    <Shield size={20} className="text-blue-400 mr-3" />
                    <span className="text-white font-medium">Security First</span>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm">
                    Our communications are secure and confidential. For sensitive inquiries, please request secure communication channels.
                  </p>
                </div>
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
              <div className="bg-navy-800 border border-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get in <span className="text-blue-400">Touch</span>
                </h2>
                
                {submitStatus === 'success' ? (
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300">
                      Your message has been received. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy-900 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy-900 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="organization" className="block text-white font-medium mb-2">Organization</label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full bg-navy-900 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">Phone (Optional)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-navy-900 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="interest" className="block text-white font-medium mb-2">Area of Interest</label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy-900 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select an Option</option>
                        <option value="threat-intelligence">OSINT Threat Intelligence SaaS</option>
                        <option value="neuromorphic-xdr">Neuromorphic XDR</option>
                        <option value="blacklock">BlackLock Encryption</option>
                        <option value="neuromorphic-cloud">Neuromorphic Cloud Computing</option>
                        <option value="air-gapped-ids">Air-Gapped IDS Systems</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full bg-navy-900 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 ${
                        submitStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Demo Section */}
      <section className="py-16 bg-navy-800">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Schedule a Product Demo
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Interested in seeing our technology in action? Schedule a personalized demonstration with our team.
              </p>
              <button 
                onClick={() => document.getElementById('interest').focus()}
                className="px-8 py-3 bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-md transition-colors duration-300"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;