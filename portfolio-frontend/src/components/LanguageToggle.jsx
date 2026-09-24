import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

// Sélecteur FR | EN avec pastille animée
export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  const pillId = useId();

  return (
    <div
      role="group"
      aria-label={t('nav.switchLang')}
      className="relative flex items-center rounded-full border border-slate-700 bg-cardBg/60 p-0.5 font-mono text-xs"
    >
      {['fr', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`relative z-10 px-2.5 py-1 rounded-full uppercase transition-colors ${lang === code ? 'text-darkBg font-bold' : 'text-slate-400 hover:text-cyanAccent'}`}
        >
          {lang === code && (
            <motion.span
              layoutId={`lang-pill-${pillId}`}
              className="absolute inset-0 -z-10 rounded-full bg-cyanAccent"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          {code}
        </button>
      ))}
    </div>
  );
}
