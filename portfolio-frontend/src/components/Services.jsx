import React from 'react';
import { motion } from 'framer-motion';
import { Globe, LayoutDashboard, Smartphone, Workflow, ArrowRight } from 'lucide-react';
import { services, process } from '../data/services';
import { useLanguage } from '../i18n/LanguageContext';

const icons = { Globe, LayoutDashboard, Smartphone, Workflow };

export default function Services() {
  const { t, tr } = useLanguage();
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-baseline">
            <span className="text-cyanAccent font-mono text-xl md:text-2xl mr-3">03.</span> {t('services.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-12">
            {t('services.intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = icons[service.icon];
              return (
                <motion.div
                  key={service.title.fr}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-cardBg/60 backdrop-blur-sm border border-slate-700/50 hover:border-cyanAccent/50 transition-colors overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyanAccent/5 blur-2xl group-hover:bg-cyanAccent/15 transition-colors duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 mb-5 rounded-xl flex items-center justify-center bg-cyanAccent/10 border border-cyanAccent/20 text-cyanAccent group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3">{tr(service.title)}</h3>
                    <p className="text-slate-400 leading-relaxed mb-5">{tr(service.description)}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 rounded text-xs font-mono text-greenAccent bg-greenAccent/10">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Méthode de travail */}
          <h3 className="text-2xl font-bold text-slate-100 mt-20 mb-8">{t('services.process')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-5 border-l-2 border-slate-700/60 hover:border-cyanAccent transition-colors"
              >
                <span className="font-mono text-sm text-cyanAccent">{item.step}</span>
                <h4 className="font-display text-lg font-semibold text-slate-100 mt-1 mb-2">{tr(item.title)}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{tr(item.text)}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl border border-cyanAccent/30 bg-gradient-to-r from-cyanAccent/10 to-greenAccent/5">
            <div>
              <p className="font-display text-2xl font-bold text-slate-100">{t('services.ctaTitle')}</p>
              <p className="text-slate-400 mt-1">{t('services.ctaText')}</p>
            </div>
            <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyanAccent text-darkBg font-bold whitespace-nowrap hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-shadow">
              {t('services.ctaButton')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
