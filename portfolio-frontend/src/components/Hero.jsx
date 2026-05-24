import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Typewriter = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts]);

  return (
    <span className="border-r-4 border-cyanAccent pr-1">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow Effects */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyanAccent/5 rounded-full blur-3xl">
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-greenAccent/5 rounded-full blur-3xl">
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-greenAccent font-mono mb-4 text-lg">Hello World, je suis</p>
          <h1 className="text-5xl md:text-7xl font-bold font-mono text-slate-100 mb-6">
            Sory Keita.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-slate-400 mb-8 min-h-[96px] md:min-h-[auto] md:whitespace-nowrap">
            <Typewriter texts={['Étudiant L2 Informatique', 'Développeur Full-Stack', 'React · Node.js · Mobile']} />
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl font-sans">
            Je construis des applications web et mobile performantes depuis Labé, Guinée.
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-4 bg-cyanAccent text-darkBg font-bold rounded hover:bg-cyanAccent/90 transition-colors">
              Voir mes projets
            </a>
            <Link to="/cv" className="px-8 py-4 border border-slate-600 text-slate-300 font-bold rounded hover:border-cyanAccent hover:text-cyanAccent transition-colors">
              Voir mon CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
