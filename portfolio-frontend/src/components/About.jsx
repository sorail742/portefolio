import React from 'react';
import { motion } from 'framer-motion';

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
            <h2 className="text-3xl font-mono font-bold mb-8 flex items-center">
              <span className="text-cyanAccent mr-2">01.</span> À propos de moi
            </h2>
            <div className="text-slate-400 font-sans space-y-4 text-lg leading-relaxed">
              <p className="text-slate-300 text-lg leading-relaxed text-justify relative z-10 mb-6 font-sans">
                Passionné par le développement depuis mes débuts en programmation, je suis actuellement en Licence Informatique à l'Université de Labé. Mon objectif est de créer des outils performants, accessibles et esthétiques.
              </p>
              <p>
                En tant que développeur orienté Full-Stack et Mobile, j'affectionne particulièrement l'écosystème React et Node.js. Je m'efforce toujours d'apprendre les meilleures pratiques et de relever de nouveaux défis.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-cyanAccent/30 text-cyanAccent bg-cyanAccent/10 text-sm font-mono">Passionné d'Open Source</span>
              <span className="px-4 py-2 rounded-full border border-cyanAccent/30 text-cyanAccent bg-cyanAccent/10 text-sm font-mono">Disponible pour stage</span>
              <span className="px-4 py-2 rounded-full border border-slate-600 text-slate-300 bg-cardBg text-sm font-mono">Open to remote</span>
            </div>

            <div className="mt-10">
              <h3 className="font-mono text-xl text-slate-200 mb-6">Formation & Certifications</h3>
              <div className="border-l-2 border-slate-700/50 pl-6 space-y-6 relative">

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyanAccent border-4 border-darkBg"></div>
                  <h4 className="text-slate-100 font-bold text-[15px]">Licence Informatique</h4>
                  <p className="text-cyanAccent font-mono text-sm mt-1">Université de Labé • 2024 - 2027</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500 border-4 border-darkBg"></div>
                  <h4 className="text-slate-100 font-bold text-[15px]">Formation Automatisation avec n8n</h4>
                  <p className="text-slate-400 font-mono text-[13px] mt-1">Certificat en cours • Mai 2026</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500 border-4 border-darkBg"></div>
                  <h4 className="text-slate-100 font-bold text-[15px]">Formation Cybersécurité & Analyse de données</h4>
                  <p className="text-slate-400 font-mono text-[13px] mt-1">Attestation en cours • Avril 2026</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500 border-4 border-darkBg"></div>
                  <h4 className="text-slate-100 font-bold text-[15px]">Formation Full-Stack (React, Node, MongoDB)</h4>
                  <p className="text-slate-400 font-mono text-[13px] mt-1">Simplon, Univ. de Labé • Vacances 2025</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500 border-4 border-darkBg"></div>
                  <h4 className="text-slate-100 font-bold text-[15px]">Attestation Bases de la Sécurité Informatique</h4>
                  <p className="text-slate-400 font-mono text-[13px] mt-1">Orange • Juin 2025</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500 border-4 border-darkBg"></div>
                  <h4 className="text-slate-100 font-bold text-[15px]">Certificat ReactJS</h4>
                  <p className="text-slate-400 font-mono text-[13px] mt-1">Club des jeunes programmeurs • Mai 2025</p>
                </div>

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
