import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-baseline">
              <span className="text-cyanAccent font-mono text-xl md:text-2xl mr-3">01.</span> À propos de moi
            </h2>
            <div className="text-slate-400 space-y-5 text-lg leading-relaxed max-w-2xl">
              <p className="text-slate-200 text-xl leading-relaxed">
                Je suis développeur Full-Stack & Mobile basé à Labé, en Guinée, et étudiant en 3ème année de Licence Informatique à l'Université de Labé. J'aime transformer une idée en produit concret : une interface soignée, une API solide et une base de données bien pensée.
              </p>
              <p>
                Au quotidien, je travaille avec <span className="text-slate-200 font-medium">React</span>, <span className="text-slate-200 font-medium">Node.js</span> et <span className="text-slate-200 font-medium">Flutter</span>, et j'automatise des processus avec <span className="text-slate-200 font-medium">n8n</span>. J'ai conçu plusieurs applications complètes — santé, e-commerce agricole, intégration des migrants, gestion d'entreprise — ce qui m'a appris à mener un projet de bout en bout.
              </p>
              <p>
                Aujourd'hui, je suis ouvert à un <span className="text-cyanAccent font-medium">poste en entreprise</span>, à des <span className="text-cyanAccent font-medium">missions freelance</span> ou à un <span className="text-cyanAccent font-medium">stage</span>, sur place ou en télétravail.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.availability.map((label) => (
                <span key={label} className="px-4 py-2 rounded-full border border-greenAccent/30 text-greenAccent bg-greenAccent/10 text-sm font-medium">{label}</span>
              ))}
              <span className="px-4 py-2 rounded-full border border-slate-600 text-slate-300 bg-cardBg text-sm font-medium">Télétravail possible</span>
            </div>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-xl text-slate-200 mb-6">Formation & Certifications</h3>
              <div className="border-l-2 border-slate-700/50 pl-6 space-y-6 relative">
                {education.map((item) => (
                  <div key={item.title} className="relative">
                    <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-4 border-darkBg ${item.status === 'current' ? 'bg-cyanAccent' : item.status === 'done' ? 'bg-greenAccent' : 'bg-slate-500'}`}></div>
                    <h4 className="text-slate-100 font-bold text-[15px]">{item.title}</h4>
                    <p className={`font-mono mt-1 ${item.status === 'current' ? 'text-cyanAccent text-sm' : item.status === 'done' ? 'text-greenAccent text-[13px]' : 'text-slate-400 text-[13px]'}`}>
                      {item.place} • {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center mt-10 md:mt-0">
            <div className="relative w-64 h-64 rounded-xl border-2 border-cyanAccent/50 overflow-hidden group shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-cyanAccent/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="/profile.png"
                alt="Sory Keita"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
