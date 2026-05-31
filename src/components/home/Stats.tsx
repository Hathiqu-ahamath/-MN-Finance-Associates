import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Businesses Served', value: 1200, suffix: '+' },
  { label: 'Financial Projects', value: 3500, suffix: '+' },
  { label: 'Success Rate', value: 99, suffix: '%' },
];

const Stats = () => {
  return (
    <section className="bg-white section-padding border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-textSecondary text-xs sm:text-sm lg:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
