import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Rocket, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

// Technologies en orbite autour de la photo (couleurs officielles des marques)
const innerOrbit = [
  { label: 'React', color: '#61DAFB' },
  { label: 'Node.js', color: '#5FA04E' },
  { label: 'Flutter', color: '#54C5F8' },
];
const outerOrbit = [
  { label: 'PostgreSQL', color: '#4169E1' },
  { label: 'MongoDB', color: '#47A248' },
  { label: 'Tailwind', color: '#38BDF8' },
  { label: 'Socket.io', color: '#E2E8F0' },
  { label: 'n8n', color: '#EA4B71' },
];

// Place les badges régulièrement sur un cercle ; l'anneau tourne,
// chaque badge tourne en sens inverse pour rester lisible.
function Orbit({ items, radius, duration, reverse = false }) {
  const spin = reverse ? -360 : 360;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-cyanAccent/20"
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
      animate={{ rotate: spin }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {items.map((item, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        return (
          <div
            key={item.label}
            className="absolute"
            style={{ left: radius + radius * Math.cos(angle), top: radius + radius * Math.sin(angle) }}
          >
            <motion.div
              className="-translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: -spin }}
              transition={{ duration, repeat: Infinity, ease: 'linear' }}
            >
              <span className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full bg-cardBg/80 backdrop-blur-md border border-slate-700/70 text-xs font-mono text-slate-200 shadow-lg">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                {item.label}
              </span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

// Carte « verre dépoli » qui flotte doucement
function FloatingCard({ className, delay = 0, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay: 0.6 + delay, duration: 0.5 },
        scale: { delay: 0.6 + delay, duration: 0.5 },
        y: { delay: 1 + delay, duration: 5, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`absolute z-20 rounded-xl bg-cardBg/70 backdrop-blur-xl border border-slate-700/60 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function HeroVisual() {
  const { t } = useLanguage();

  // Inclinaison 3D qui suit la souris
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 15 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto" onMouseMove={handleMove} onMouseLeave={reset}>
      {/* Scène de taille fixe, réduite sur les écrans moyens */}
      <div className="absolute left-1/2 top-1/2 w-[560px] h-[560px] -ml-[280px] -mt-[280px] scale-[0.7] xl:scale-[0.85] 2xl:scale-100 [perspective:1200px]">
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative w-full h-full">
        {/* Halo derrière la photo */}
        <div className="absolute inset-[18%] rounded-full bg-gradient-to-tr from-cyanAccent/30 via-blue-500/20 to-greenAccent/30 blur-3xl" />

        <Orbit items={outerOrbit} radius={250} duration={60} reverse />
        <Orbit items={innerOrbit} radius={175} duration={40} />

        {/* Photo dans un anneau dégradé qui tourne */}
        <div className="absolute left-1/2 top-1/2 w-[230px] h-[230px] -ml-[115px] -mt-[115px]" style={{ transform: 'translateZ(40px)' }}>
          <motion.div
            className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#00d4ff,#22c55e,#3b82f6,#00d4ff)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 rounded-full overflow-hidden bg-darkBg border-4 border-darkBg">
            <img src="/profile.png" alt="Sory Keita" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Extrait de code */}
        <FloatingCard className="left-0 top-[6%] p-4 font-mono text-[11px] leading-relaxed" delay={0}>
          <div className="flex gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <p><span className="text-pink-400">const</span> <span className="text-blue-400">dev</span> = {'{'}</p>
          <p className="pl-3">name: <span className="text-green-400">'Sory'</span>,</p>
          <p className="pl-3">stack: <span className="text-green-400">'MERN + Flutter'</span>,</p>
          <p className="pl-3">available: <span className="text-cyanAccent">true</span></p>
          <p>{'}'}</p>
        </FloatingCard>

        {/* Projets livrés */}
        <FloatingCard className="right-0 top-[18%] px-4 py-3 flex items-center gap-3" delay={0.2}>
          <div className="w-9 h-9 rounded-lg bg-cyanAccent/15 text-cyanAccent flex items-center justify-center">
            <Rocket size={18} />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-slate-100 leading-none">{projects.length}</p>
            <p className="text-[11px] text-slate-400 mt-1">{t('hero.stats.projects')}</p>
          </div>
        </FloatingCard>

        {/* Disponibilité */}
        <FloatingCard className="right-[4%] bottom-[8%] px-4 py-3 flex items-center gap-3" delay={0.4}>
          <CheckCircle2 size={20} className="text-greenAccent" />
          <div>
            <p className="text-sm font-semibold text-slate-100">{t('hero.visual.available')}</p>
            <p className="text-[11px] text-slate-400">{t('hero.visual.availableSub')}</p>
          </div>
        </FloatingCard>
      </motion.div>
      </div>
    </div>
  );
}
