import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We start by understanding your business needs, goals, and current financial situation.'
  },
  {
    number: '02',
    title: 'Financial Assessment',
    description: 'Our experts conduct a thorough analysis of your records and processes to identify opportunities.'
  },
  {
    number: '03',
    title: 'Strategy Planning',
    description: 'We develop a customized roadmap and financial strategy tailored to your specific objectives.'
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'We work closely with your team to execute the strategy and ensure long-term success.'
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-light overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Our Process</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">How We Work</h2>
          <p className="text-gray-600 text-base lg:text-lg">
            A systematic and transparent approach to delivering financial excellence for your business.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 relative group"
              >
                <div className="w-14 h-14 bg-primary text-accent rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
                
                {/* Decorative Dot for Timeline */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full hidden lg:block border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
