import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronUp } from 'react-icons/hi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[60] w-12 h-12 lg:w-14 lg:h-14 bg-accent text-primary rounded-full shadow-2xl flex items-center justify-center text-2xl lg:text-3xl hover:bg-primary hover:text-white transition-all duration-300"
          aria-label="Back to Top"
        >
          <HiChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
