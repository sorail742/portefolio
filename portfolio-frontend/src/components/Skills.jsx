import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-mono font-bold mb-12 flex items-center">
            <span className="text-cyanAccent mr-2">02.</span> Compétences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 212, 255, 0.2)" }}
                className="bg-cardBg relative border border-slate-700/50 p-6 rounded-xl overflow-hidden group transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyanAccent/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-cyanAccent/10 transition-colors"></div>
                <h3 className="text-xl font-bold font-mono text-slate-100 mb-6 pb-2 border-b border-slate-700 relative z-10 group-hover:text-cyanAccent transition-colors">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {items.map(skill => (
                    <motion.span
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 212, 255, 0.1)", borderColor: "rgba(0, 212, 255, 0.4)" }}
                      key={skill}
                      className="px-4 py-2 bg-slate-800/80 text-slate-300 rounded-lg font-sans text-sm border border-slate-700 shadow-sm cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
