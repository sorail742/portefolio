import React from 'react';
import { Github, Linkedin, Facebook, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/sorail742", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/sory-keita-7434b239a/", label: "LinkedIn" },
    { icon: <Facebook size={20} />, url: "https://facebook.com/sory.keita.241594", label: "Facebook" },
    //{ icon: <Twitter size={20} />, url: "https://twitter.com/sory_keita", label: "Twitter" },
    { icon: <Mail size={20} />, url: "mailto:keithsorail@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative mt-20 border-t border-slate-800/50 bg-[#0a1526]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">

        {/* Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-2xl font-bold font-mono text-slate-200">
            Sory<span className="text-cyanAccent">.</span>Keïta
          </span>
          <p className="text-slate-500 text-sm mt-1 font-mono">
            Développeur Full-Stack & Mobile
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyanAccent transition-colors duration-300 relative group"
              whileHover={{ y: -3 }}
              aria-label={link.label}
            >
              {link.icon}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-mono text-cyanAccent transition-opacity duration-300">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-sm font-mono text-center md:text-right">
          <p>© {currentYear} Tous droits réservés.</p>
          <p className="text-xs mt-1 opacity-60">Conçu & Développé avec ��</p>
        </div>
      </div>
    </footer>
  );
}
