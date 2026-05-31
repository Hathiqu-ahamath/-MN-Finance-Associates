import { motion } from 'framer-motion';
import { HiShieldCheck, HiLightningBolt, HiUsers, HiTrendingUp } from 'react-icons/hi';

const features = [
  {
    title: 'Certified Experts',
    description: 'Our team consists of highly qualified CPAs and financial consultants with decades of experience.',
    icon: <HiShieldCheck />
  },
  {
    title: 'Fast Turnaround',
    description: 'We prioritize efficiency without compromising quality, ensuring your projects are delivered on time.',
    icon: <HiLightningBolt />
  },
  {
    title: 'Personalized Solutions',
    description: 'We don\'t believe in one-size-fits-all. Every strategy is tailored to your specific business goals.',
    icon: <HiUsers />
  },
  {
    title: 'Compliance Focus',
    description: 'We stay ahead of regulatory changes to ensure your business remains fully compliant at all times.',
    icon: <HiTrendingUp />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              A Trusted Partner for Your <span className="text-accent">Financial Future</span>
            </h2>
            <p className="text-gray-400 text-base lg:text-lg mb-12 leading-relaxed">
              At MN Finance Associates, we combine international expertise with local market knowledge to deliver exceptional value to our clients. Our commitment to integrity and excellence has made us a leading choice for corporate financial advisory.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-accent text-2xl lg:text-3xl">{feature.icon}</div>
                  <h3 className="text-lg lg:text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
                alt="Working together"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t-8 border-r-8 border-accent opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-8 border-l-8 border-accent opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
