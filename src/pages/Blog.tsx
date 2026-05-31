import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { HiOutlineCalendar, HiOutlineArrowRight, HiSearch } from 'react-icons/hi';

const posts = [
  { id: 1, title: 'Navigating Corporate Tax Changes in 2026', excerpt: 'Stay ahead of the curve with our comprehensive guide to the latest corporate tax regulations.', author: 'Sarah Williams', date: 'May 15, 2026', category: 'Taxation', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80' },
  { id: 2, title: 'The Future of Digital Auditing and Transparency', excerpt: 'Explore how blockchain and AI are transforming the auditing process, providing security.', author: 'Robert Miller', date: 'May 10, 2026', category: 'Auditing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Strategic Financial Planning for Tech Startups', excerpt: 'A deep dive into the unique financial challenges faced by fast-growing tech companies.', author: 'Jennifer Davis', date: 'May 05, 2026', category: 'Advisory', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Maximizing Operational Efficiency Through Lean Finance', excerpt: 'Learn how to apply lean principles to your financial operations to reduce waste.', author: 'Michael Thompson', date: 'April 28, 2026', category: 'Business Growth', image: 'https://images.unsplash.com/photo-1454165833762-02ac4f40c5e8?auto=format&fit=crop&q=80' },
  { id: 5, title: 'The Impact of Global VAT Reforms on Trade', excerpt: 'Understanding the implications of recent international VAT changes for companies.', author: 'Sarah Williams', date: 'April 20, 2026', category: 'Taxation', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80' },
  { id: 6, title: 'Cybersecurity Risks in Financial Reporting', excerpt: 'Protecting your financial data is more critical than ever. We discuss the threats.', author: 'Robert Miller', date: 'April 15, 2026', category: 'Compliance', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80' }
];

const categories = ['All', 'Taxation', 'Auditing', 'Advisory', 'Business Growth', 'Compliance'];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEO title="Financial Insights & Blog" description="Stay updated with the latest financial trends, tax regulations, and business advisory insights." />
      <PageHero 
        title="Financial Insights" 
        subtitle="Expert analysis and perspectives on the evolving landscape of corporate finance and business strategy."
        image="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 bg-light p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-border shadow-sm">
            <div className="relative w-full lg:w-96">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:border-accent focus:outline-none transition-all text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    selectedCategory === cat 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white text-textSecondary hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-8">Latest Insights</h2>
          {/* Results Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-primary text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4 font-bold">
                        <span className="flex items-center space-x-1">
                          <HiOutlineCalendar className="text-secondary" />
                          <span>{post.date}</span>
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-textSecondary mb-8 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-light flex items-center justify-center text-xs font-bold text-primary">
                            {post.author[0]}
                          </div>
                          <span className="text-xs font-bold text-textSecondary">{post.author}</span>
                        </div>
                        <Link to={`/blog/${post.id}`} className="text-secondary group-hover:text-accent transition-colors">
                          <HiOutlineArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-primary mb-4">No articles found</h3>
              <p className="text-textSecondary">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-8 text-secondary font-bold hover:text-accent underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
