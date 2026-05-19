import React, { forwardRef } from 'react';
import { Mail, Smartphone, MapPin, Github, User, Briefcase, GraduationCap } from 'lucide-react';
import { projects } from '../data/projects';

const CV = forwardRef((props, ref) => {
  const brandColor = "#1f3b5e"; // Professional Navy Blue

  return (
    <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white text-slate-800 mx-auto shadow-2xl relative overflow-hidden flex font-sans" style={{ boxSizing: 'border-box' }}>

      {/* Left Column (35%) */}
      <div className="w-[35%] bg-slate-50 border-r border-slate-200 p-8 flex flex-col h-full pt-12">
        {/* Profile Pic / Initial */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold mb-4 border-4 overflow-hidden" style={{ borderColor: brandColor, color: brandColor, backgroundColor: `${brandColor}10` }}>
            <img src="/profile.png" alt="Sory Keïta" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm mb-10 w-full">
          <h2 className="font-bold text-lg uppercase tracking-wider pb-1 mb-4 border-b-2" style={{ borderColor: brandColor, color: brandColor }}>Contact</h2>
          <div className="flex items-center gap-3">
            <Mail size={16} style={{ color: brandColor }} />
            <span className="text-slate-700 break-all">keithsorail@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Smartphone size={16} style={{ color: brandColor }} />
            <span className="text-slate-700">+224 624 284 874</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} style={{ color: brandColor }} />
            <span className="text-slate-700">Labé, Guinée</span>
          </div>
          <div className="flex items-center gap-3">
            <Github size={16} style={{ color: brandColor }} />
            <span className="text-slate-700">github.com/sorail742</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-10 w-full">
          <h2 className="font-bold text-lg uppercase tracking-wider pb-1 mb-4 border-b-2" style={{ borderColor: brandColor, color: brandColor }}>Compétences</h2>
          <div className="space-y-3 text-sm">
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Frontend & Mobile</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                <li>React, React Native</li>
                <li>Tailwind CSS, Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Backend</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Base de Données</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                <li>PostgreSQL, MySQL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-10 w-full">
          <h2 className="font-bold text-lg uppercase tracking-wider pb-1 mb-4 border-b-2" style={{ borderColor: brandColor, color: brandColor }}>Langues</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li><strong>Français :</strong> Courant</li>
            <li><strong>Malinké :</strong> Natif</li>
            <li><strong>Anglais :</strong> Technique</li>
          </ul>
        </div>
      </div>

      {/* Right Column (65%) */}
      <div className="w-[65%] bg-white p-8 pl-10 pr-8 flex flex-col pt-12">

        {/* Header Name & Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-1" style={{ color: brandColor }}>Sory Keïta</h1>
          <h2 className="text-xl font-bold tracking-widest text-slate-500 uppercase">
            Développeur Full-Stack
          </h2>
        </div>

        {/* Profile Section */}
        <div className="mb-8 relative">
          {/* Header */}
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white z-10" style={{ backgroundColor: brandColor }}>
              <User size={18} />
            </div>
            <div className="flex-1 ml-3 border-b-2" style={{ borderColor: brandColor }}>
              <h2 className="font-bold text-xl uppercase tracking-widest" style={{ color: brandColor }}>Profile</h2>
            </div>
          </div>
          {/* Timeline Line */}
          <div className="absolute left-4 top-8 bottom-0 w-[1px] -ml-[0.5px]" style={{ backgroundColor: brandColor }}></div>
          {/* Content */}
          <div className="pl-12 relative pb-2">
            <div className="absolute w-2 h-2 bg-white rounded-full border-2 left-[11px] top-2" style={{ borderColor: brandColor }}></div>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              Développeur web passionné et autodidacte, j'ai renforcé mes compétences à travers divers projets concrets et des défis techniques variés. Curieux et motivé, j'évolue continuellement dans un environnement en constante évolution. En quête de nouveaux challenges, je souhaite intégrer une équipe dynamique à laquelle je pourrais apporter ma rigueur, ma créativité et ma soif d'apprendre.
            </p>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-2 relative">
          {/* Header */}
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white z-10" style={{ backgroundColor: brandColor }}>
              <Briefcase size={18} />
            </div>
            <div className="flex-1 ml-3 border-b-2" style={{ borderColor: brandColor }}>
              <h2 className="font-bold text-xl uppercase tracking-widest" style={{ color: brandColor }}>Expériences Professionnelles</h2>
            </div>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-4 top-8 bottom-[-40px] w-[1px] -ml-[0.5px]" style={{ backgroundColor: brandColor }}></div>

          <div className="pl-12 relative pb-6">
            <div className="absolute w-2 h-2 bg-white rounded-full border-2 left-[11px] top-2" style={{ borderColor: brandColor }}></div>
            <h3 className="font-bold text-slate-700 text-lg mb-2">Développeur Full-Stack</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 ml-1">
              <li>Conception, développement et maintenance d'applications web avec React et Node.js.</li>
              <li>Collaboration étroite pour transformer les maquettes (Figma) en interfaces utilisateur réactives.</li>
              <li>Gestion du déploiement, des mises à jour et de l'optimisation des performances.</li>
            </ul>
          </div>

          {/* Projects subset */}
          <div className="pl-12 relative pb-6">
            <div className="absolute w-2 h-2 bg-white rounded-full border-2 left-[11px] top-2" style={{ borderColor: brandColor }}></div>
            <h3 className="font-bold text-slate-700 text-lg mb-2">Projets Réalisés</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 ml-1">
              {projects.map((p, idx) => (
                <li key={idx}>
                  <strong className="text-slate-700">{p.title}</strong> ({p.tech.join(', ')})
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications and Formations subset */}
          <div className="pl-12 relative pb-2">
            <div className="absolute w-2 h-2 bg-white rounded-full border-2 left-[11px] top-2" style={{ borderColor: brandColor }}></div>
            <h3 className="font-bold text-slate-700 text-lg mb-2">Certifications et Formations</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 ml-1">
              <li>Licence 2 Informatique -----&gt; Université de Labé (En cours)</li>
              <li>React, Node.js (Full Stack) -----&gt; Autodidacte & Open Source</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
});

export default CV;
