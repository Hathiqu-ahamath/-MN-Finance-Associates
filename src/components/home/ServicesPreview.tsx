import { motion } from 'framer-motion';
import { HiChartBar, HiClipboardCheck, HiCurrencyDollar, HiBriefcase, HiDocumentReport, HiScale } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Accounting Services',
    description: 'Comprehensive bookkeeping and financial management tailored for your business needs.',
    icon: <HiClipboardCheck />,
    delay: 0.1
  },
  {
    title: 'Tax Consultancy',
    description: 'Expert tax planning and compliance services to optimize your financial position.',
    icon: <HiCurrencyDollar />,
    delay: 0.2
  },
  {
    title: 'Audit Support',
    description: 'Professional auditing services ensuring transparency and regulatory compliance.',
    icon: <HiDocumentReport />,
    delay: 0.3
  },
  {
    title: 'Payroll Management',
    description: 'Efficient and accurate payroll processing and employee benefits administration.',
    icon: <HiBriefcase />,
    delay: 0.4
  },
  {
    title: 'Business Advisory',
    description: 'Strategic consulting to drive growth, efficiency, and long-term sustainability.',
    icon: <HiChartBar />,
    delay: 0.5
  },
  {
    title: 'VAT Consultancy',
    description: 'Specialized VAT advice and compliance support for regional and international trade.',
    icon: <HiScale />,
    delay: 0.6
  }
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">Comprehensive Financial Solutions</h2>
          <p className="text-textSecondary text-base lg:text-lg">
            We provide a wide range of professional services designed to help your business thrive in today's complex financial landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-light p-10 rounded-2xl border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary text-3xl mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-textSecondary mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link to="/services" className="text-secondary font-bold flex items-center space-x-2 group-hover:text-accent transition-colors">
                <span>Learn More</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
