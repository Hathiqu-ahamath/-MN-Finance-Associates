import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with MN Finance Associates for professional financial consulting and business advisory services." />
      <PageHero 
        title="Get in Touch" 
        subtitle="Our experts are ready to assist you with your financial and business advisory needs."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Reach out to us via any of the following channels. We aim to respond to all inquiries within 24 business hours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <FaPhone />, title: 'Phone', details: ['+1 (234) 567-890', '+1 (234) 567-891'] },
                  { icon: <FaEnvelope />, title: 'Email', details: ['info@mnfinance.com', 'support@mnfinance.com'] },
                  { icon: <FaMapMarkerAlt />, title: 'Location', details: ['123 Finance Plaza, Business District, City, Country'] },
                  { icon: <FaClock />, title: 'Business Hours', details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'] },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-light transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-white shadow-md text-secondary rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-gray-50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      {item.details.map((detail, dIdx) => (
                        <p key={dIdx} className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-20"
                    >
                      <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center text-5xl mx-auto mb-8">
                        <FaCheckCircle />
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Message Sent!</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        Thank you for reaching out. One of our financial experts will contact you shortly.
                      </p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 text-secondary font-bold hover:text-accent transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>
                      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/5 focus:outline-none bg-light transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/5 focus:outline-none bg-light transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                          <input 
                            type="tel" 
                            placeholder="+1 (234) 567-890"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/5 focus:outline-none bg-light transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1">Inquiry Type</label>
                          <select className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/5 focus:outline-none bg-light transition-all appearance-none cursor-pointer">
                            <option>General Inquiry</option>
                            <option>Tax Consultancy</option>
                            <option>Audit Support</option>
                            <option>Business Advisory</option>
                            <option>Company Registration</option>
                          </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="text-sm font-bold text-primary ml-1">Your Message</label>
                          <textarea 
                            required
                            rows={5}
                            placeholder="How can we help your business thrive?"
                            className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/5 focus:outline-none bg-light transition-all resize-none"
                          ></textarea>
                        </div>
                        <div className="md:col-span-2 mt-4">
                          <button 
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className="btn-primary w-full py-4 text-lg flex items-center justify-center space-x-3 disabled:opacity-70"
                          >
                            {formStatus === 'submitting' ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <span>Request Consultation</span>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Polish */}
      <section className="h-[500px] w-full relative group">
        <div className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
            alt="Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl z-10 text-center max-w-sm border border-white/20"
          >
            <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl">
              <FaMapMarkerAlt />
            </div>
            <h4 className="text-2xl font-bold text-primary mb-2">MN Headquarters</h4>
            <p className="text-gray-600 text-sm mb-6">123 Finance Plaza, Business District, City, Country</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary font-bold hover:text-accent transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Directions</span>
              <HiChevronRight />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
