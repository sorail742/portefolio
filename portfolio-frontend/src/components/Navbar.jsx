import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Accueil', href: '#home' },
    { title: 'À propos', href: '#about' },
    { title: 'Projets', href: '#projects' },
    { title: 'Compétences', href: '#skills' },
    { title: 'Expériences', href: '#experience' },
    { title: 'Contact', href: '#contact' },
  ];

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: '#3b82f6',
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent hover-glow">
              SK
            </a>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium smooth-transition relative group"
                  variants={linkVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-300 hover:bg-white/5 focus:outline-none smooth-transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden bg-white/5 backdrop-blur-lg border-b border-slate-700/50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <motion.a 
                key={link.title} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-gray-300 hover:text-blue-300 hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium smooth-transition"
                whileHover={{ scale: 1.05 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;