import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-2xl -z-0"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-accent rounded-2xl -z-0"></div>
            
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl z-20">
              <p className="text-primary font-bold text-2xl">15+ Years</p>
              <p className="text-gray-500 text-sm">Of Financial Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">About Our Firm</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Leading the Way in <span className="text-secondary">Corporate Financial</span> Strategy
            </h2>
            <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed">
              MN Finance Associates is a premier financial consulting firm dedicated to providing comprehensive accounting, taxation, and business advisory services. We empower enterprises with strategic insights and compliant financial frameworks.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Certified Public Accountants & Auditors",
                "Specialized Tax & VAT Consultancy",
                "Advanced Payroll & Financial Reporting",
                "Strategic Business Growth Advisory"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <HiCheckCircle className="text-accent text-xl lg:text-2xl flex-shrink-0" />
                  <span className="text-primary font-medium text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
              <Link to="/about" className="btn-primary w-full sm:w-auto text-center">
                Learn More
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-accent">
                  <img src="https://i.pravatar.cc/150?u=ceo" alt="CEO" />
                </div>
                <div>
                  <p className="text-primary font-bold leading-none text-sm lg:text-base">Michael N. Thompson</p>
                  <p className="text-gray-500 text-xs">Managing Partner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
