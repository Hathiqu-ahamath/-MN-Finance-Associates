import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Industries from '../components/home/Industries';
import Process from '../components/home/Process';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <>
      <SEO title="Strategic Financial Excellence" />
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
