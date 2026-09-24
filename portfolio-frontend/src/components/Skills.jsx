import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Server, Database, Workflow, GitBranch, Check } from 'lucide-react';
import SectionTitle from './SectionTitle';
import CodeEditor from './CodeEditor';
import { skills } from '../data/skills';
import { techColors } from '../data/techColors';
import { useLanguage } from '../i18n/LanguageContext';

const icons = { Monitor, Smartphone, Server, Database, Workflow, GitBranch };

export default function Skills() {
  const { t, tr } = useLanguage();
  const [inView, setInView] = useState(false);

  return (
    <section id="skills" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle number="02">{t('skills.title')}</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          onViewportEnter={() => setInView(true)}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center"
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-100 leading-[1.1] mb-6">
              {t('skills.headline1')}{' '}
              <span className="bg-gradient-to-r from-cyanAccent via-sky-400 to-greenAccent bg-clip-text text-transparent">
                {t('skills.headline2')}
              </span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">{t('skills.intro')}</p>

            <ul className="space-y-4">
              {t('skills.points').map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-greenAccent/15 border border-greenAccent/30 text-greenAccent flex items-center justify-center">
                    <Check size={14} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <CodeEditor active={inView} />
        </motion.div>

        {/* Domaines d'expertise */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((domain, idx) => {
            const Icon = icons[domain.icon];
            return (
              <motion.div
                key={domain.title.fr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group relative p-6 rounded-2xl bg-cardBg/60 backdrop-blur-sm border border-slate-700/50 hover:border-cyanAccent/40 hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyanAccent/5 blur-2xl group-hover:bg-cyanAccent/15 transition-colors duration-500" />
                <div className="relative flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyanAccent/10 border border-cyanAccent/20 text-cyanAccent group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-slate-100">{tr(domain.title)}</h4>
                </div>
                <p className="relative text-sm text-slate-400 leading-relaxed mb-4">{tr(domain.description)}</p>
                <div className="relative flex flex-wrap gap-2">
                  {domain.items.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-800/60 border border-slate-700/50 hover:border-slate-500 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: techColors[item] ?? '#00d4ff', boxShadow: `0 0 6px ${techColors[item] ?? '#00d4ff'}` }} />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
