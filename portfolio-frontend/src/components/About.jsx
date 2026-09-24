import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Languages, GraduationCap, Award, BookOpen, Clock } from 'lucide-react';
import { education } from '../data/education';
import { profile } from '../data/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from './SectionTitle';

const Tech = ({ children }) => <span className="text-slate-200 font-medium">{children}</span>;
const Accent = ({ children }) => <span className="text-cyanAccent font-medium">{children}</span>;

// Couleur et icône selon l'état de la formation
const statusStyle = {
  current: { color: 'text-cyanAccent', border: 'hover:border-cyanAccent/50', bg: 'bg-cyanAccent/10', Icon: BookOpen },
  done: { color: 'text-greenAccent', border: 'hover:border-greenAccent/50', bg: 'bg-greenAccent/10', Icon: Award },
  pending: { color: 'text-amber-400', border: 'hover:border-amber-400/50', bg: 'bg-amber-400/10', Icon: Clock },
};

export default function About() {
  const { t, tr } = useLanguage();

  const facts = [
    { Icon: MapPin, label: t('about.facts.location'), value: tr(profile.location) },
    { Icon: Languages, label: t('about.facts.languages'), value: t('about.facts.languagesValue') },
    { Icon: GraduationCap, label: t('about.facts.studies'), value: t('about.facts.studiesValue') },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start"
        >
          <div>
            <SectionTitle number="01">{t('about.title')}</SectionTitle>
            <div className="text-slate-400 space-y-5 text-lg leading-relaxed max-w-2xl">
              <p className="text-slate-200 text-xl leading-relaxed">{t('about.p1')}</p>
              <p>
                {t('about.p2a')}<Tech>React</Tech>, <Tech>Node.js</Tech> {t('about.and')} <Tech>Flutter</Tech>{t('about.p2b')}<Tech>n8n</Tech>{t('about.p2c')}
              </p>
              <p>
                {t('about.p3a')}<Accent>{t('about.p3job')}</Accent>{t('about.p3b')}<Accent>{t('about.p3freelance')}</Accent>{t('about.p3c')}<Accent>{t('about.p3internship')}</Accent>{t('about.p3d')}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.availability.map((label) => (
                <span key={label.fr} className="px-4 py-2 rounded-full border border-greenAccent/30 text-greenAccent bg-greenAccent/10 text-sm font-medium">{tr(label)}</span>
              ))}
              <span className="px-4 py-2 rounded-full border border-slate-600 text-slate-300 bg-cardBg text-sm font-medium">{t('about.remote')}</span>
            </div>
          </div>

          {/* Photo + fiches d'infos */}
          <div className="w-full max-w-md mx-auto lg:mt-16">
            <div className="relative group">
              {/* Cadre dégradé animé */}
              <div className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_var(--angle),#00d4ff,#22c55e,#3b82f6,#00d4ff)] animate-border-spin opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden bg-darkBg aspect-[4/3]">
                <img
                  src="/profile.png"
                  alt="Sory Keita"
                  loading="lazy"
                  className="w-full h-full object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl font-bold text-white">Sory Keita</p>
                    <p className="text-sm text-slate-300">{t('footer.role')}</p>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-greenAccent/15 border border-greenAccent/30 text-greenAccent text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-greenAccent animate-pulse" />
                    {t('hero.visual.available')}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {facts.map(({ Icon, label, value }) => (
                <div key={label} className="p-4 rounded-xl bg-cardBg/60 backdrop-blur-sm border border-slate-700/50 hover:border-cyanAccent/40 transition-colors">
                  <Icon size={18} className="text-cyanAccent mb-2" />
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-mono">{label}</p>
                  <p className="text-sm text-slate-200 mt-0.5 leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Formations en cartes */}
        <h3 className="font-display font-semibold text-2xl text-slate-100 mt-20 mb-8">{t('about.education')}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((item, idx) => {
            const style = statusStyle[item.status];
            return (
              <motion.div
                key={item.title.fr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className={`group flex gap-4 p-5 rounded-xl bg-cardBg/60 backdrop-blur-sm border border-slate-700/50 ${style.border} hover:-translate-y-1 transition-all`}
              >
                <div className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${style.bg} ${style.color}`}>
                  <style.Icon size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-slate-100 font-semibold leading-snug">{tr(item.title)}</h4>
                  <p className="text-sm text-slate-400 mt-1">{tr(item.place)}</p>
                  <p className={`text-xs font-mono mt-2 ${style.color}`}>{tr(item.date)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
