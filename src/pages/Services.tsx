import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiChartBar, HiClipboardCheck, HiCurrencyDollar, HiBriefcase, HiDocumentReport, HiGlobe, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'accounting',
    title: 'Accounting Services',
    shortDesc: 'Precision financial management for corporate clarity.',
    description: 'Our accounting services are designed to provide you with a clear and accurate picture of your financial health. From daily bookkeeping to complex financial statement preparation, we ensure your records are meticulous and compliant.',
    benefits: ['Accurate Financial Reporting', 'Efficient Bookkeeping', 'Strategic Cash Flow Management', 'Customized Financial Dashboards'],
    icon: <HiClipboardCheck />,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
  },
  {
    id: 'tax',
    title: 'Tax Consultancy',
    shortDesc: 'Strategic planning to optimize your tax position.',
    description: 'Navigate the complex landscape of corporate and personal taxation with our expert consultants. We provide proactive tax planning and compliance services to minimize liabilities and ensure adherence to local and international laws.',
    benefits: ['Strategic Tax Planning', 'VAT & Indirect Tax Advisory', 'Corporate Tax Compliance', 'Transfer Pricing Documentation'],
    icon: <HiCurrencyDollar />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  },
  {
    id: 'audit',
    title: 'Audit Support',
    shortDesc: 'Transparency and trust through rigorous auditing.',
    description: 'We provide comprehensive audit support and internal review services that enhance transparency and provide stakeholders with confidence in your financial statements. Our approach is risk-based and highly professional.',
    benefits: ['Statutory Audit Support', 'Internal Control Reviews', 'Regulatory Compliance Audits', 'Special Purpose Investigations'],
    icon: <HiDocumentReport />,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    shortDesc: 'Efficient administration for your most valuable assets.',
    description: 'Outsource your payroll to specialists who ensure accuracy, confidentiality, and compliance. We handle everything from salary processing to social security contributions and employee benefits administration.',
    benefits: ['Timely Salary Processing', 'Tax & Social Security Compliance', 'Benefit Administration', 'Confidential Data Handling'],
    icon: <HiBriefcase />,
    image: 'https://images.unsplash.com/photo-1556742049-0ad338b3687c?auto=format&fit=crop&q=80'
  },
  {
    id: 'registration',
    title: 'Company Registration',
    shortDesc: 'Seamless entry into new markets and structures.',
    description: 'Setting up a new enterprise? We guide you through the entire process of company formation, licensing, and legal structuring, ensuring a smooth entry into the market.',
    benefits: ['Entity Selection Advice', 'Full Licensing Support', 'Legal Documentation', 'Government Liaison Services'],
    icon: <HiGlobe />,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80'
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    shortDesc: 'Actionable strategies for long-term growth.',
    description: 'Our strategic advisory services help you solve critical business challenges and unlock new growth opportunities. We provide data-driven insights and actionable strategies for long-term success.',
    benefits: ['Mergers & Acquisitions', 'Operational Efficiency', 'Strategic Growth Planning', 'Risk Management'],
    icon: <HiChartBar />,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <>
      <SEO title="Our Financial Services" description="Comprehensive financial services including accounting, tax consultancy, audit support, payroll management, and business advisory." />
      <PageHero 
        title="Professional Services" 
        subtitle="World-class financial solutions tailored to drive your corporate success and ensure absolute compliance."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32 space-y-2">
                <h3 className="hidden lg:block text-xl font-bold text-primary mb-6 px-4">Our Expertise</h3>
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 no-scrollbar scroll-smooth">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(service.id)}
                      className={`flex-shrink-0 lg:w-full text-left px-6 py-4 rounded-xl flex items-center justify-between group transition-all duration-300 ${
                        activeTab === service.id 
                          ? 'bg-primary text-white shadow-xl lg:translate-x-2' 
                          : 'bg-light text-primary hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className={`text-2xl ${activeTab === service.id ? 'text-accent' : 'text-secondary'}`}>
                          {service.icon}
                        </span>
                        <span className="font-bold whitespace-nowrap lg:whitespace-normal">{service.title}</span>
                      </div>
                      <HiChevronRight className={`hidden lg:block text-xl transition-transform ${activeTab === service.id ? 'rotate-90 text-accent' : 'group-hover:translate-x-1'}`} />
                    </button>
                  ))}
                </div>

                <div className="hidden lg:block mt-12 p-8 bg-accent/10 rounded-3xl border border-accent/20">
                  <h4 className="text-primary font-bold mb-4">Need a Custom Quote?</h4>
                  <p className="text-gray-600 text-sm mb-6">Our experts are ready to design a personalized strategy for your business.</p>
                  <Link to="/contact" className="btn-primary w-full text-center py-3">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-12"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-[21/9]">
                    <img 
                      src={activeService.image} 
                      alt={activeService.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                      <p className="text-white text-xl font-medium">{activeService.shortDesc}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-6">{activeService.title}</h2>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-10">
                      {activeService.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3 p-6 bg-light rounded-2xl border border-gray-100 hover:border-accent/30 transition-colors">
                          <div className="w-6 h-6 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <HiChevronRight />
                          </div>
                          <span className="text-primary font-bold text-sm lg:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary text-white p-10 lg:p-16 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 text-center lg:text-left">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Get Started?</h3>
                      <p className="text-gray-400 mb-8 max-w-xl">
                        Schedule a detailed consultation with our {activeService.title} experts today and take the first step towards financial excellence.
                      </p>
                      <Link to="/contact" className="btn-secondary px-10">
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Global Process Section for Services */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Service Excellence</h2>
            <p className="text-gray-600 text-lg">
              We follow a rigorous methodology to ensure the highest standards of delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: 'Quality Assurance', desc: 'Every deliverable undergoes a multi-layer review process by certified partners.' },
              { title: 'Compliance First', desc: 'Our strategies are strictly aligned with the latest international financial standards.' },
              { title: 'Personalized Care', desc: 'You get a dedicated relationship manager for all your financial queries.' }
            ].map((item, index) => (
              <div key={index} className="space-y-4 p-8 bg-white rounded-2xl shadow-sm border border-gray-50">
                <h4 className="text-xl font-bold text-secondary">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
