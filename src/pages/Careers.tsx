import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineGlobe, HiOutlineSparkles } from 'react-icons/hi';

const benefits = [
  {
    title: 'Professional Growth',
    description: 'We invest in your career through continuous learning, certifications, and mentorship.',
    icon: <HiOutlineSparkles />
  },
  {
    title: 'Inclusive Culture',
    description: 'Work in a diverse and collaborative environment where every voice matters.',
    icon: <HiOutlineUserGroup />
  },
  {
    title: 'Global Impact',
    description: 'Work with international clients and solve complex financial challenges.',
    icon: <HiOutlineGlobe />
  },
  {
    title: 'Competitive Rewards',
    description: 'We offer industry-leading compensation and comprehensive benefits packages.',
    icon: <HiOutlineBriefcase />
  }
];

const positions = [
  {
    title: 'Senior Tax Consultant',
    department: 'Tax & Compliance',
    location: 'Headquarters',
    type: 'Full-time'
  },
  {
    title: 'Financial Auditor',
    department: 'Audit & Assurance',
    location: 'Remote / Hybrid',
    type: 'Full-time'
  },
  {
    title: 'Junior Accountant',
    department: 'Accounting Services',
    location: 'Headquarters',
    type: 'Full-time'
  },
  {
    title: 'Business Development Manager',
    department: 'Strategy',
    location: 'Regional Office',
    type: 'Full-time'
  }
];

const Careers = () => {
  return (
    <>
      <SEO title="Careers" description="Join the team at MN Finance Associates. Explore open positions and learn about our company culture and benefits." />
      <PageHero 
        title="Join Our Excellence" 
        subtitle="Build your career with a firm that values integrity, innovation, and professional growth."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
      />

      {/* Culture Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Our Culture</span>
              <h2 className="text-4xl font-bold text-primary mb-8">Work with the Best in the Industry</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At MN Finance Associates, we believe our people are our greatest asset. We foster a culture of excellence, where professional development goes hand-in-hand with personal well-being.
              </p>
              <div className="space-y-4">
                <p className="flex items-center space-x-3 text-primary font-medium">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span>Collaborative team environment</span>
                </p>
                <p className="flex items-center space-x-3 text-primary font-medium">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span>Commitment to ethical practices</span>
                </p>
                <p className="flex items-center space-x-3 text-primary font-medium">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span>Continuous learning opportunities</span>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-video"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Our Culture" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Why Join MN Finance?</h2>
            <p className="text-gray-600 text-lg">
              We offer a range of benefits designed to support your career and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl text-secondary mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Open Positions</h2>
            <p className="text-gray-600 text-lg">
              Find your next opportunity and help us shape the future of finance.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((pos, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-center hover:border-accent/30 transition-all group"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{pos.title}</h3>
                  <div className="flex space-x-4 mt-2 text-sm text-gray-500 font-medium">
                    <span>{pos.department}</span>
                    <span>•</span>
                    <span>{pos.location}</span>
                    <span>•</span>
                    <span>{pos.type}</span>
                  </div>
                </div>
                <button className="btn-primary py-2 px-8 text-sm">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6 italic">Don't see a position that fits? Send us your CV anyway!</p>
            <a href="mailto:careers@mnfinance.com" className="text-secondary font-bold hover:text-accent transition-colors">
              careers@mnfinance.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
