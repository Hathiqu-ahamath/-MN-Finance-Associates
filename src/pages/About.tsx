import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiLightBulb, HiCube, HiTrendingUp } from 'react-icons/hi';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of integrity in all of our actions.',
    icon: <HiCheckCircle />
  },
  {
    title: 'Excellence',
    description: 'We provide outstanding products and unsurpassed service that deliver premium value.',
    icon: <HiTrendingUp />
  },
  {
    title: 'Innovation',
    description: 'We apply creative thinking and advanced technologies to solve complex financial problems.',
    icon: <HiLightBulb />
  },
  {
    title: 'Client Focus',
    description: 'We are dedicated to achieving our clients goals and exceeding their expectations.',
    icon: <HiCube />
  }
];

const team = [
  {
    name: 'Michael Thompson',
    role: 'Managing Partner',
    image: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Tax & VAT',
    image: 'https://i.pravatar.cc/150?u=sarahw'
  },
  {
    name: 'Robert Miller',
    role: 'Director of Auditing',
    image: 'https://i.pravatar.cc/150?u=robert'
  },
  {
    name: 'Jennifer Davis',
    role: 'Business Advisory Lead',
    image: 'https://i.pravatar.cc/150?u=jennifer'
  }
];

const About = () => {
  return (
    <>
      <SEO title="About Our Firm" description="Learn more about MN Finance Associates, our mission, vision, and the leadership team driving financial excellence." />
      <PageHero 
        title="Our Story & Vision" 
        subtitle="Dedicated to empowering businesses with strategic financial clarity and corporate excellence."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Our Purpose</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Mission & Vision</h2>
              <div className="space-y-8">
                <div className="bg-light p-6 lg:p-8 rounded-2xl border-l-4 border-accent">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-textSecondary text-sm lg:text-base leading-relaxed">
                    To provide unparalleled financial consulting and business advisory services that enable our clients to achieve sustainable growth and maintain absolute regulatory compliance in an ever-evolving global market.
                  </p>
                </div>
                <div className="bg-light p-6 lg:p-8 rounded-2xl border-l-4 border-secondary">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-textSecondary text-sm lg:text-base leading-relaxed">
                    To be the most trusted and influential financial partner for corporate enterprises worldwide, recognized for our integrity, expertise, and commitment to driving financial excellence.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f30c46f?auto=format&fit=crop&q=80" 
                alt="Working together" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-textSecondary text-lg">
              The principles that guide our work and define our relationship with every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-textSecondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Leadership Team</h2>
            <p className="text-textSecondary text-lg">
              Meet the experts who lead our firm and ensure the success of our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">Dedicated to financial excellence and strategic client growth.</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
