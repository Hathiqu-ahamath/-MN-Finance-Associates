import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                <img src="/logo.svg" alt="MN Finance" loading="lazy" className="w-10 h-10" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MN Finance <span className="text-accent font-medium">Associates</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Providing world-class financial consulting, accounting, and business advisory solutions tailored for modern enterprises and corporate excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-accent transition-colors duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-accent transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-accent transition-colors duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-accent transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-accent transition-colors">Financial Insights</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Accounting Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Tax Consultancy</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Audit Support</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Payroll Management</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Business Advisory</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                <span>Addalaichenai</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-accent flex-shrink-0" />
                <span>+94 711762153</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <span>mnfinasso@gmail.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="font-bold mb-4">Newsletter</h4>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full border border-gray-700 focus:border-accent"
                />
                <button type="submit" aria-label="Subscribe to Newsletter" className="bg-accent text-primary px-4 py-2 rounded-r-md font-bold hover:bg-opacity-90 transition-all">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} MN Finance Associates. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
