import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-12 flex items-center">
            <span className="text-cyanAccent mr-2">03.</span> Projets Récents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-cardBg relative border border-slate-700/50 rounded-xl flex flex-col group transition-all shadow-xl hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:border-cyanAccent/50"
              >
                {/* Project Image or Gradient Placeholder */}
                <div className={`h-56 relative flex items-center justify-center overflow-hidden rounded-t-xl group
                  ${!project.image ? (idx % 3 === 0 ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40' :
                    idx % 3 === 1 ? 'bg-gradient-to-br from-emerald-900/40 to-green-900/40' :
                      'bg-gradient-to-br from-purple-900/40 to-indigo-900/40') : 'bg-slate-900'}`}>

                  {project.image ? (
                    <>
                      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors duration-500"></div>

                      {/* Premium Mobile Overlay */}
                      {project.mobileImage && (
                        <div className="absolute -bottom-4 right-4 w-16 h-32 md:w-20 md:h-40 bg-black rounded-xl border-2 border-slate-700/50 shadow-2xl overflow-hidden transform rotate-[-5deg] group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 z-20">
                          <img src={project.mobileImage} alt={`${project.title} mobile`} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100" />
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
                  <h3 className="text-xl font-bold font-mono text-slate-100 mb-3 group-hover:text-cyanAccent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-greenAccent">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <a href={project.github} className="text-slate-400 hover:text-cyanAccent transition-colors" title="Code Source">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="text-slate-400 hover:text-cyanAccent transition-colors" title="Voir l'application">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
