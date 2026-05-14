import React, { forwardRef } from 'react';
import { Mail, Smartphone, MapPin, Github, Code, Layout, Server, Database, Terminal } from 'lucide-react';
import { projects } from '../data/projects';

const CV = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white text-slate-800 mx-auto shadow-2xl relative overflow-hidden flex font-sans" style={{ boxSizing: 'border-box' }}>
      {/* Left Column */}
      <div className="w-[35%] bg-slate-50 border-r border-slate-200 p-8 flex flex-col h-full">
        {/* Profile Info */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full bg-cyanAccent/10 border-4 border-cyanAccent flex items-center justify-center text-4xl font-mono text-cyanAccent mb-4">
            SK
          </div>
          <h2 className="font-bold text-xl uppercase tracking-wider text-center text-slate-900 border-b-2 border-cyanAccent pb-2 w-full">Contact</h2>
        </div>

        <div className="space-y-4 text-sm mb-10">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-cyanAccent" />
            <span className="text-slate-600 break-all">keithsorail@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Smartphone size={16} className="text-cyanAccent" />
            <span className="text-slate-600">+224 624 284 874</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-cyanAccent" />
            <span className="text-slate-600">Labé, Guinée</span>
          </div>
          <div className="flex items-center gap-3">
            <Github size={16} className="text-cyanAccent" />
            <span className="text-slate-600">github.com/sorail742</span>
          </div>
        </div>

        {/* Skills */}
        <h2 className="font-bold text-xl uppercase tracking-wider text-slate-900 border-b-2 border-cyanAccent pb-2 mb-4">Compétences</h2>
        <div className="space-y-4 mb-10 text-sm">
          <div>
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-1"><Layout size={14} className="text-cyanAccent" /> Frontend & Mobile</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>React, React Native</li>
              <li>Tailwind CSS, Vite</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-1"><Server size={14} className="text-cyanAccent" /> Backend</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-1"><Database size={14} className="text-cyanAccent" /> Base de Données</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>PostgreSQL, MySQL</li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <h2 className="font-bold text-xl uppercase tracking-wider text-slate-900 border-b-2 border-cyanAccent pb-2 mb-4">Langues</h2>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 mb-10">
          <li><strong>Français :</strong> Courant</li>
          <li><strong>Pular :</strong> Natif</li>
          <li><strong>Anglais :</strong> Technique</li>
        </ul>

        {/* Interests */}
        <h2 className="font-bold text-xl uppercase tracking-wider text-slate-900 border-b-2 border-cyanAccent pb-2 mb-4">Centres d'intérêt</h2>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
          <li>Veille technologique</li>
          <li>Open Source</li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="w-[65%] bg-white p-8 pl-10 flex flex-col">

        {/* Header Name & Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">Sory Keïta</h1>
          <h2 className="text-lg font-bold text-cyanAccent uppercase tracking-widest leading-snug">
            Étudiant L2 Informatique<br />Développeur Full-Stack & Mobile
          </h2>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="font-bold text-xl uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 flex items-center">
            <span className="w-3 h-3 bg-cyanAccent rounded-full mr-3"></span> Formation
          </h2>
          <div className="pl-4 border-l-2 border-slate-200">
            <div className="mb-4 relative">
              <div className="absolute w-3 h-3 bg-slate-400 rounded-full -left-[23px] top-1.5 border-4 border-white"></div>
              <h3 className="font-bold text-slate-800 text-lg">Licence 2 Informatique</h3>
              <p className="text-sm font-semibold text-cyanAccent mb-1">Université de Labé | 2023 – en cours</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Matières clés : Algorithmique avancée, Architecture des bases de données, Systèmes d'exploitation, Développement web et mobile.
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="font-bold text-xl uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 flex items-center">
            <span className="w-3 h-3 bg-cyanAccent rounded-full mr-3"></span> Projets Réalisés
          </h2>
          <div className="space-y-5 pl-4 border-l-2 border-slate-200">
            {projects.map((p, idx) => (
              <div key={idx} className="relative">
                <div className="absolute w-3 h-3 bg-slate-400 rounded-full -left-[23px] top-1.5 border-4 border-white"></div>
                <h3 className="font-bold text-slate-800 text-base">{p.title} <span className="font-normal text-cyanAccent text-xs ml-2">({p.tech.join(', ')})</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
});

export default CV;
