import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';


// Écran de démarrage façon terminal, affiché une fois par session.
// Un clic ou une touche permet de le passer.
export default function IntroLoader({ onFinish }) {
  const { t } = useLanguage();
  const bootLines = t('intro.lines');
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => setVisibleLines((n) => Math.min(n + 1, bootLines.length)), 380);
    const progressTimer = setInterval(() => setProgress((p) => Math.min(p + 4, 100)), 60);
    const endTimer = setTimeout(onFinish, 1900);
    const skip = () => onFinish();
    window.addEventListener('keydown', skip);
    window.addEventListener('pointerdown', skip);
    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(endTimer);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, [onFinish]);

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center px-6"
      aria-hidden="true"
    >
      <div className="w-full max-w-md font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center"
        >
          <span className="text-cyanAccent">S</span><span className="text-slate-100">K</span>
          <span className="text-cyanAccent animate-pulse">_</span>
        </motion.div>
        <div className="space-y-1.5 min-h-[110px] text-sm">
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={i === bootLines.length - 1 ? 'text-greenAccent' : 'text-slate-400'}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <div className="mt-6 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyanAccent to-greenAccent transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-slate-600">
          <span>{t('intro.skip')}</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
