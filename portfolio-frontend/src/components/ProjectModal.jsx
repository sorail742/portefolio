import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Smartphone, Monitor } from 'lucide-react';

// Fiche détaillée d'un projet (captures desktop + mobile, technos, liens)
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cardBg border border-slate-700 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-darkBg/80 text-slate-300 hover:text-cyanAccent transition-colors"
        >
          <X size={20} />
        </button>

        {project.image ? (
          <div className="relative bg-slate-900 p-6 md:p-10 flex items-end justify-center gap-6">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mb-2"><Monitor size={14} /> Desktop</div>
              <img src={project.image} alt={`${project.title} version desktop`} className="w-full rounded-lg border border-slate-700 shadow-2xl" />
            </div>
            {project.mobileImage && (
              <div className="hidden sm:block w-40 shrink-0">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mb-2"><Smartphone size={14} /> Mobile</div>
                <img src={project.mobileImage} alt={`${project.title} version mobile`} className="w-full rounded-2xl border-2 border-slate-700 shadow-2xl" />
              </div>
            )}
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 flex items-center justify-center">
            <span className="text-5xl text-slate-500 font-mono">&lt;{project.title.substring(0, 3)}/&gt;</span>
          </div>
        )}

        <div className="p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-100 mb-4">{project.title}</h3>
          <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>

          <h4 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-3">Stack technique</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-mono text-greenAccent bg-greenAccent/10 border border-greenAccent/20">{t}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 rounded text-slate-300 hover:border-cyanAccent hover:text-cyanAccent transition-colors font-mono text-sm">
                <Github size={16} /> Code source
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyanAccent text-darkBg rounded font-bold hover:bg-cyanAccent/90 transition-colors text-sm">
                <ExternalLink size={16} /> Voir en ligne
              </a>
            )}
            {(!project.github || project.github === '#') && !project.demo && (
              <p className="text-slate-500 text-sm font-mono">Projet en cours de développement — démo disponible sur demande.</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
