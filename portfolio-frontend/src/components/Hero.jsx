import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Command } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { education } from '../data/education';
import { OPEN_PALETTE_EVENT } from './CommandPalette';
import MagneticButton from './MagneticButton';

// Apparition en cascade des éléments du Hero après l'écran de démarrage
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const nameContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const letter = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', damping: 12, stiffness: 150 } },
};
const NAME = 'Sory Keita.';

// Chiffres clés calculés à partir des données réelles du portfolio
const stats = [
  { value: projects.length, label: 'Projets réalisés' },
  { value: new Set(Object.values(skills).flat()).size, label: 'Technologies' },
  { value: education.filter((e) => e.status === 'done').length, label: 'Formations validées' },
];

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

export default function Hero({ ready = true }) {
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
          variants={container}
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
          className="max-w-3xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-greenAccent/30 bg-greenAccent/10 text-greenAccent text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-greenAccent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-greenAccent"></span>
            </span>
            Disponible · Emploi, freelance & stage
          </motion.div>
          <motion.p variants={item} className="text-greenAccent font-mono mb-4 text-lg">Hello World, je suis</motion.p>
          <motion.h1
            variants={nameContainer}
            aria-label={NAME}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 [perspective:600px]"
          >
            {NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                aria-hidden="true"
                className="inline-block text-gradient-animated"
                style={{ backgroundPosition: `${(i / NAME.length) * 100}% 50%` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-semibold font-mono text-slate-400 mb-8 min-h-[80px] md:min-h-[auto] md:whitespace-nowrap">
            <Typewriter texts={['Développeur Full-Stack', 'Développeur Mobile', 'Freelance React & Node', 'Étudiant L3 Informatique']} />
          </motion.h2>
          <motion.p variants={item} className="text-xl text-slate-400 mb-4 max-w-2xl font-sans">
            Je conçois des applications web et mobiles rapides, fiables et agréables à utiliser — de l'interface jusqu'à l'API et la base de données.
          </motion.p>
          <motion.p variants={item} className="flex items-center text-sm text-slate-500 font-mono mb-10">
            <MapPin size={14} className="mr-1.5" /> {profile.location} · Ouvert au télétravail
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <MagneticButton>
              <a href="#projects" className="group relative inline-block overflow-hidden px-6 sm:px-8 py-4 whitespace-nowrap bg-cyanAccent text-darkBg font-bold rounded shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-shadow">
                <span className="relative z-10">Voir mes projets</span>
                {/* Reflet qui balaie le bouton au survol */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link to="/cv" className="inline-block px-6 sm:px-8 py-4 whitespace-nowrap border border-slate-600 text-slate-300 font-bold rounded hover:border-cyanAccent hover:text-cyanAccent hover:bg-cyanAccent/5 transition-colors">
                Voir mon CV
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5 mt-8">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyanAccent hover:-translate-y-0.5 transition-all">
              <Github size={22} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyanAccent hover:-translate-y-0.5 transition-all">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 hover:text-cyanAccent hover:-translate-y-0.5 transition-all">
              <Mail size={22} />
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
              className="hidden md:inline-flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded border border-slate-700 text-slate-500 hover:text-cyanAccent hover:border-cyanAccent/50 font-mono text-xs transition-colors"
            >
              Appuyez sur <Command size={12} /> K
            </button>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-3 gap-4 mt-14 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-cyanAccent/40 pl-4">
                <div className="text-3xl md:text-4xl font-bold font-display text-slate-100">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
