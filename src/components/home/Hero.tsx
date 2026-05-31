import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative min-h-[700px] lg:h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Corporate Finance"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        
        {/* Liquid Glass Blobs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container-custom relative z-10 pt-32 lg:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Businesses Through <span className="text-accent">Strategic Financial</span> Excellence
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Professional accounting, taxation, auditing, and business advisory solutions tailored for modern enterprises. Partner with experts who drive your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary flex items-center justify-center space-x-2 px-8">
                <span>Get Consultation</span>
                <HiArrowRight />
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md font-semibold transition-all backdrop-blur-sm border border-white/20 text-center">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center space-x-8"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-primary overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-white">
              <p className="font-bold text-xl">500+</p>
              <p className="text-gray-400 text-sm">Trusted by Industry Leaders</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-accent rounded-full"></div>
            </div>
            <div>
              <p className="text-white font-bold">Revenue Growth</p>
              <p className="text-accent text-sm">+24% Average</p>
            </div>
          </div>
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-accent"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
