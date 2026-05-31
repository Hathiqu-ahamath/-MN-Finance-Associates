import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow Solutions',
    content: 'MN Finance Associates has been instrumental in our international expansion. Their tax consultancy and strategic planning saved us significant resources and ensured complete compliance across multiple jurisdictions.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'David Chen',
    role: 'Founder, Urban Build Co.',
    content: 'The level of professionalism and attention to detail provided by the MN team is unmatched. They handled our complex auditing and payroll management with ease, allowing us to focus on our core construction projects.',
    image: 'https://i.pravatar.cc/150?u=david'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CFO, Global Logistics Inc.',
    content: 'Switching to MN Finance for our financial reporting was the best decision we made this year. Their insights are sharp, and their reporting is crystal clear. They are truly partners in our financial success.',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8">What Our Clients Say</h2>
            <p className="text-gray-600 text-base lg:text-lg mb-10 leading-relaxed">
              We take pride in building long-term relationships with our clients by delivering consistent results and exceptional service quality.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-light p-12 lg:p-16 rounded-3xl relative">
              <div className="absolute top-0 right-0 p-8 text-accent opacity-20">
                <FaQuoteLeft size={80} />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-primary italic mb-8 leading-relaxed relative z-10">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-accent"
                    />
                    <div>
                      <h4 className="font-bold text-primary text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
