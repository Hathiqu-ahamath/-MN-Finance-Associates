import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl overflow-hidden relative"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-20"></div>
          
          <div className="relative z-10 px-6 py-16 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
              Ready to Transform Your <span className="text-accent">Business Finances?</span>
            </h2>
            <p className="text-base lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Schedule a consultation today and discover how our strategic financial solutions can drive your corporate success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link to="/contact" className="btn-secondary text-base lg:text-lg px-8 lg:px-10">
                Schedule Consultation
              </Link>
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 lg:px-10 py-4 rounded-md font-bold transition-all text-base lg:text-lg">
                Contact Us
              </Link>
            </div>
            
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-6 lg:gap-16 opacity-50">
              <span className="text-white font-bold text-sm lg:text-xl uppercase tracking-widest">Trust</span>
              <span className="text-white font-bold text-sm lg:text-xl uppercase tracking-widest">Integrity</span>
              <span className="text-white font-bold text-sm lg:text-xl uppercase tracking-widest">Excellence</span>
              <span className="text-white font-bold text-sm lg:text-xl uppercase tracking-widest">Compliance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
