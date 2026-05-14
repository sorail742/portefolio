import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/#home' },
    { name: 'À propos', path: '/#about' },
    { name: 'Compétences', path: '/#skills' },
    { name: 'Projets', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkBg/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-mono text-2xl font-bold flex items-center">
            <span className="text-cyanAccent">S</span>K
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-cyanAccent ml-1"
            >_</motion.span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="text-gray-300 hover:text-cyanAccent font-mono text-sm transition-colors">
                {link.name}
              </a>
            ))}
            <Link to="/cv" className="px-5 py-2 border border-cyanAccent text-cyanAccent rounded-md hover:bg-cyanAccent/10 transition-colors font-mono text-sm">
              Voir CV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
