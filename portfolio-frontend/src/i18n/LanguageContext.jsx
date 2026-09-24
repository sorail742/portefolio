import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'lang';
const LanguageContext = createContext(null);

// Langue initiale : choix mémorisé, sinon langue du navigateur (français par défaut)
const detectLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    // stockage indisponible : on se rabat sur le navigateur
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : navigator.language ? 'en' : 'fr';
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // le choix ne sera simplement pas mémorisé
    }
  }, []);

  // t('hero.title') → texte traduit ; retombe sur le français puis sur la clé
  const t = useCallback((key) => {
    const read = (dict) => key.split('.').reduce((node, part) => node?.[part], dict);
    return read(translations[lang]) ?? read(translations.fr) ?? key;
  }, [lang]);

  // tr({ fr, en }) → valeur dans la langue courante (pour les fichiers de données)
  const tr = useCallback((value) => (
    value && typeof value === 'object' && !Array.isArray(value) && 'fr' in value ? (value[lang] ?? value.fr) : value
  ), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
