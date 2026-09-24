import React from 'react';

// Visuel dessiné en CSS pour les projets sans capture d'écran :
// un téléphone avec un éditeur de code stylisé, sur fond dégradé.
const lines = [
  ['w-10 bg-pink-400/80', 'w-16 bg-blue-400/80'],
  ['w-6 bg-slate-600', 'w-20 bg-green-400/70'],
  ['w-12 bg-slate-600', 'w-8 bg-cyanAccent/80', 'w-6 bg-slate-600'],
  ['w-16 bg-yellow-300/70'],
  ['w-8 bg-slate-600', 'w-14 bg-green-400/70'],
  ['w-10 bg-pink-400/80', 'w-6 bg-slate-600'],
];

export default function ProjectPlaceholder({ title, large = false }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950">
      <div className="absolute inset-0 bg-pattern-grid opacity-70" />
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-cyanAccent/20 blur-3xl" />
      <div className="absolute -bottom-12 -right-6 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Nom du projet en filigrane */}
      <p className={`absolute left-6 top-6 font-display font-bold text-white/90 ${large ? 'text-4xl' : 'text-2xl'}`}>
        {title}
      </p>
      <p className="absolute left-6 font-mono text-xs text-cyanAccent/80" style={{ top: large ? 72 : 58 }}>
        &lt;/&gt; mobile app
      </p>

      {/* Téléphone */}
      <div className={`absolute ${large ? 'right-10 w-32 h-60' : 'right-6 w-24 h-44'} -bottom-6 rotate-[-6deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-transform duration-500 rounded-2xl bg-slate-950 border-2 border-slate-600/70 shadow-2xl p-2`}>
        <div className="mx-auto mb-2 w-8 h-1.5 rounded-full bg-slate-700" />
        <div className="rounded-lg bg-slate-900 h-full p-2 space-y-2">
          {lines.map((row, i) => (
            <div key={i} className="flex gap-1">
              {row.map((cls, j) => <span key={j} className={`h-1.5 rounded-full ${cls}`} />)}
            </div>
          ))}
          <div className="mt-3 h-8 rounded-md bg-gradient-to-r from-cyanAccent/40 to-greenAccent/40" />
        </div>
      </div>
    </div>
  );
}
