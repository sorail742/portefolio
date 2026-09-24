import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../i18n/LanguageContext';

// Filtres : technologies utilisées par au moins deux projets
const techCounts = projects.flatMap((p) => p.tech).reduce((acc, t) => ({ ...acc, [t]: (acc[t] || 0) + 1 }), {});
const ALL = 'all';
const filters = [ALL, ...Object.keys(techCounts).filter((tech) => techCounts[tech] > 1)];

export default function Projects() {
  const { t, tr } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  const visibleProjects = activeFilter === ALL
    ? projects
    : projects.filter((p) => p.tech.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-baseline">
            <span className="text-cyanAccent font-mono text-xl md:text-2xl mr-3">04.</span> {t('projects.title')}
          </h2>

          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label={t('projects.filterLabel')}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`px-4 py-1.5 rounded-full text-sm font-mono border transition-colors ${activeFilter === filter
                  ? 'bg-cyanAccent text-darkBg border-cyanAccent'
                  : 'border-slate-700 text-slate-400 hover:border-cyanAccent/50 hover:text-cyanAccent'}`}
              >
                {filter === ALL ? t('projects.all') : filter}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                className="bg-cardBg relative border border-slate-700/50 rounded-xl flex flex-col group transition-all shadow-xl hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:border-cyanAccent/50 cursor-pointer"
              >
                {/* Project Image or Gradient Placeholder */}
                <div className={`h-56 relative flex items-center justify-center overflow-hidden rounded-t-xl group
                  ${!project.image ? (idx % 3 === 0 ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40' :
                    idx % 3 === 1 ? 'bg-gradient-to-br from-emerald-900/40 to-green-900/40' :
                      'bg-gradient-to-br from-purple-900/40 to-indigo-900/40') : 'bg-slate-900'}`}>

                  {project.image ? (
                    <>
                      <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors duration-500"></div>

                      {/* Premium Mobile Overlay */}
                      {project.mobileImage && (
                        <div className="absolute -bottom-4 right-4 w-16 h-32 md:w-20 md:h-40 bg-black rounded-xl border-2 border-slate-700/50 shadow-2xl overflow-hidden transform rotate-[-5deg] group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 z-20">
                          <img src={project.mobileImage} alt={`${project.title} mobile`} loading="lazy" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100" />
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                      <motion.span
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-4xl text-slate-500 font-mono opacity-60 z-10 group-hover:text-cyanAccent/80 transition-colors duration-300"
                      >&lt;{project.title.substring(0, 3)}/&gt;</motion.span>
                    </>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <h3 className="text-xl font-bold font-display text-slate-100 mb-3 group-hover:text-cyanAccent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-4">
                    {tr(project.description)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono text-greenAccent bg-greenAccent/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto items-center" onClick={(e) => e.stopPropagation()}>
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${t('projects.source')} ${project.title}`} className="text-slate-400 hover:text-cyanAccent transition-colors" title={t('modal.sourceCode')}>
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${t('projects.demo')} ${project.title}`} className="text-slate-400 hover:text-cyanAccent transition-colors" title={t('modal.live')}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto inline-flex items-center gap-1.5 text-sm font-mono text-slate-400 hover:text-cyanAccent transition-colors"
                    >
                      {t('projects.details')} <Maximize2 size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
