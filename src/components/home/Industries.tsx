import { motion } from 'framer-motion';
import { FaShoppingCart, FaBuilding, FaHospital, FaIndustry, FaHotel, FaLaptopCode, FaTruck, FaRocket } from 'react-icons/fa';

const industries = [
  { name: 'Retail', icon: <FaShoppingCart />, snippet: 'Optimizing inventory and VAT for high-volume retail.' },
  { name: 'Construction', icon: <FaBuilding />, snippet: 'Project-based accounting and long-term contract audit.' },
  { name: 'Healthcare', icon: <FaHospital />, snippet: 'Compliance-focused advisory for medical institutions.' },
  { name: 'Manufacturing', icon: <FaIndustry />, snippet: 'Cost accounting and supply chain financial efficiency.' },
  { name: 'Hospitality', icon: <FaHotel />, snippet: 'Payroll and tax planning for the leisure sector.' },
  { name: 'Technology', icon: <FaLaptopCode />, snippet: 'R&D tax credits and strategic growth for tech firms.' },
  { name: 'Logistics', icon: <FaTruck />, snippet: 'Cross-border VAT and international trade consultancy.' },
  { name: 'Startups', icon: <FaRocket />, snippet: 'Company registration and scalable financial systems.' },
];

const Industries = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Industries We Serve</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">Expertise Across Sectors</h2>
          <p className="text-textSecondary text-base lg:text-lg">
            We provide specialized financial solutions tailored to the unique challenges and opportunities of various industries.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              tabIndex={0}
              onFocus={() => {}}
              className="bg-light p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center space-y-4 transition-all duration-300 group cursor-default relative overflow-hidden h-44 sm:h-56 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <div className="text-3xl sm:text-4xl text-secondary group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                {industry.icon}
              </div>
              <h3 className="font-bold text-base sm:text-xl text-primary transition-colors group-hover:text-primary">{industry.name}</h3>
              
              <div className="absolute inset-0 bg-primary/95 p-4 sm:p-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
                  {industry.snippet}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
