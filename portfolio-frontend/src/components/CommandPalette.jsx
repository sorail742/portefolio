import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Home, User, Code2, FolderGit2, Mail, FileText, Copy, Github, Linkedin, CornerDownLeft } from 'lucide-react';
import { profile } from '../data/profile';

export const OPEN_PALETTE_EVENT = 'open-command-palette';

// Palette de commandes (Ctrl/⌘ + K) pour naviguer et agir rapidement
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const [toast, setToast] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const goTo = (id) => {
    navigate('/');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2000);
  };

  const commands = useMemo(() => [
    { group: 'Navigation', label: 'Accueil', icon: Home, action: () => goTo('home') },
    { group: 'Navigation', label: 'À propos', icon: User, action: () => goTo('about') },
    { group: 'Navigation', label: 'Compétences', icon: Code2, action: () => goTo('skills') },
    { group: 'Navigation', label: 'Projets', icon: FolderGit2, action: () => goTo('projects') },
    { group: 'Navigation', label: 'Contact', icon: Mail, action: () => goTo('contact') },
    { group: 'Actions', label: 'Voir / télécharger mon CV', icon: FileText, action: () => navigate('/cv') },
    {
      group: 'Actions', label: "Copier l'adresse email", icon: Copy,
      action: () => navigator.clipboard?.writeText(profile.email).then(() => showToast('Email copié !')),
    },
    { group: 'Actions', label: 'Envoyer un email', icon: Mail, action: () => { window.location.href = `mailto:${profile.email}`; } },
    { group: 'Réseaux', label: 'GitHub', icon: Github, action: () => window.open(profile.socials.github, '_blank', 'noopener') },
    { group: 'Réseaux', label: 'LinkedIn', icon: Linkedin, action: () => window.open(profile.socials.linkedin, '_blank', 'noopener') },
  ], [navigate]);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const handleOpen = () => setOpen(true);
    window.addEventListener('keydown', handleKey);
    window.addEventListener(OPEN_PALETTE_EVENT, handleOpen);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, handleOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => setSelected(0), [query]);

  const run = (command) => {
    setOpen(false);
    command.action();
  };

  const handleInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && filtered[selected]) {
      run(filtered[selected]);
    }
  };

  let lastGroup = null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              role="dialog"
              aria-modal="true"
              aria-label="Palette de commandes"
              className="w-full max-w-lg bg-cardBg border border-slate-700 rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center px-4 border-b border-slate-700">
                <Search size={18} className="text-slate-500" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleInputKey}
                  placeholder="Rechercher une action ou une section..."
                  className="flex-1 bg-transparent px-3 py-4 text-slate-200 placeholder-slate-500 focus:outline-none font-mono text-sm"
                />
                <kbd className="text-[10px] font-mono text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">ESC</kbd>
              </div>
              <ul className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <li className="px-4 py-6 text-center text-slate-500 text-sm font-mono">Aucun résultat</li>
                )}
                {filtered.map((command, idx) => {
                  const showGroup = command.group !== lastGroup;
                  lastGroup = command.group;
                  const Icon = command.icon;
                  return (
                    <React.Fragment key={command.label}>
                      {showGroup && (
                        <li className="px-4 pt-3 pb-1 text-[11px] uppercase tracking-wider text-slate-500 font-mono">{command.group}</li>
                      )}
                      <li>
                        <button
                          type="button"
                          onMouseEnter={() => setSelected(idx)}
                          onClick={() => run(command)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${idx === selected ? 'bg-cyanAccent/10 text-cyanAccent' : 'text-slate-300'}`}
                        >
                          <Icon size={16} />
                          <span className="flex-1">{command.label}</span>
                          {idx === selected && <CornerDownLeft size={14} className="opacity-60" />}
                        </button>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            role="status"
            className="fixed bottom-6 inset-x-0 z-[80] flex justify-center pointer-events-none"
          >
            <span className="px-4 py-2 rounded-lg bg-greenAccent text-darkBg font-mono text-sm font-bold shadow-lg">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
