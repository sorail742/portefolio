import React from 'react';
import { motion } from 'framer-motion';

// Titre de section : numéro en mono, titre, puis une ligne dégradée qui se dessine
export default function SectionTitle({ number, children, center = false, className = 'mb-8' }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-display font-bold flex items-baseline ${center ? 'justify-center' : ''} ${className}`}>
      <span className="text-cyanAccent font-mono text-xl md:text-2xl mr-3">{number}.</span>
      {children}
      {!center && (
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden sm:block self-center ml-6 h-px flex-1 max-w-xs origin-left bg-gradient-to-r from-cyanAccent/50 via-slate-700 to-transparent"
        />
      )}
    </h2>
  );
}
