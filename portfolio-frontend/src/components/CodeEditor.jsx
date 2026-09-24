import React, { useEffect, useMemo, useState } from 'react';
import { GitBranch, CheckCircle2, FileCode2, Folder, ChevronDown } from 'lucide-react';
import { codeSnippets } from '../data/codeSnippets';
import { useLanguage } from '../i18n/LanguageContext';

// Découpe le code en éléments colorés (commentaires, chaînes, mots-clés, types, fonctions…)
const KEYWORDS = new Set([
  'import', 'from', 'export', 'default', 'const', 'let', 'return', 'async', 'await', 'function',
  'class', 'extends', 'new', 'if', 'else', 'super', 'this', 'null', 'true', 'false',
  'CREATE', 'TABLE', 'INDEX', 'ON', 'PRIMARY', 'KEY', 'REFERENCES', 'NOT', 'NULL', 'DEFAULT',
]);
const TYPES = new Set(['INT', 'SERIAL', 'TIMESTAMP', 'VARCHAR']);
const TOKEN_RE = /(\/\/.*|--.*)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(@\w+)|\b(\d+)\b|([A-Za-z_]\w*)(?=\s*\()|([A-Za-z_]\w*)|(\s+)|(.)/g;

const COLORS = {
  comment: 'text-slate-500 italic',
  string: 'text-emerald-300',
  keyword: 'text-pink-400',
  type: 'text-amber-300',
  number: 'text-orange-300',
  fn: 'text-sky-300',
  tag: 'text-cyan-300',
  punct: 'text-slate-500',
  plain: 'text-slate-200',
};

function tokenize(code) {
  const tokens = [];
  let match;
  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(code)) !== null) {
    const [text, comment, string, decorator, number, fn, word, space] = match;
    let type = 'punct';
    if (comment) type = 'comment';
    else if (string) type = 'string';
    else if (decorator) type = 'keyword';
    else if (number) type = 'number';
    else if (fn) type = KEYWORDS.has(fn) ? 'keyword' : /^[A-Z]/.test(fn) ? 'type' : 'fn';
    else if (word) type = KEYWORDS.has(word) ? 'keyword' : TYPES.has(word) || /^[A-Z]/.test(word) ? 'type' : 'plain';
    else if (space) type = 'plain';
    // Balises JSX : <Grid / </Grid
    if (type === 'type' && /<\/?$/.test(code.slice(Math.max(0, match.index - 2), match.index))) type = 'tag';
    tokens.push({ text, type });
  }
  return tokens;
}

// Rend les éléments jusqu'à `limit` caractères (effet de saisie), ligne par ligne
function renderLines(tokens, limit) {
  const lines = [[]];
  let count = 0;
  for (const token of tokens) {
    if (count >= limit) break;
    const visible = token.text.slice(0, limit - count);
    count += visible.length;
    visible.split('\n').forEach((part, i) => {
      if (i > 0) lines.push([]);
      if (part) lines[lines.length - 1].push({ text: part, type: token.type });
    });
  }
  return lines;
}

const CHAR_DELAY = 14;
const PAUSE_AFTER = 4500;

export default function CodeEditor({ active: inView }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const snippet = codeSnippets[index];
  const tokens = useMemo(() => tokenize(snippet.code), [snippet]);
  const total = snippet.code.length;
  const done = typed >= total;

  // Saisie progressive quand l'éditeur est visible
  useEffect(() => {
    if (!inView) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(total);
      return undefined;
    }
    if (typed >= total) return undefined;
    const timer = setTimeout(() => setTyped((n) => Math.min(n + 3, total)), CHAR_DELAY * 3);
    return () => clearTimeout(timer);
  }, [inView, typed, total]);

  // Passage automatique au fichier suivant (arrêté dès que le visiteur choisit un onglet)
  useEffect(() => {
    if (!done || !autoPlay) return undefined;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % codeSnippets.length);
      setTyped(0);
    }, PAUSE_AFTER);
    return () => clearTimeout(timer);
  }, [done, autoPlay]);

  const openFile = (i) => {
    setAutoPlay(false);
    setIndex(i);
    setTyped(i === index ? total : 0);
  };

  const lines = renderLines(tokens, typed);
  const lineCount = snippet.code.split('\n').length;

  return (
    <div className="relative min-w-0">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyanAccent/40 via-blue-600/30 to-greenAccent/40 rounded-2xl blur-xl opacity-40" />
      <div className="relative rounded-xl bg-[#0b1120]/95 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Barre de titre */}
        <div className="h-10 flex items-center px-4 bg-[#0f172a] border-b border-slate-700/60">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="flex-1 text-center text-xs font-mono text-slate-500">sory-keita — {snippet.file}</p>
        </div>

        <div className="flex">
          {/* Explorateur de fichiers */}
          <div className="hidden sm:block w-44 shrink-0 border-r border-slate-700/60 bg-[#0d1426] py-3 text-xs font-mono">
            <p className="px-4 pb-2 text-[10px] uppercase tracking-widest text-slate-500">{t('skills.editor.explorer')}</p>
            <p className="flex items-center gap-1 px-3 py-1 text-slate-300">
              <ChevronDown size={12} /> <Folder size={12} className="text-cyanAccent" /> portfolio
            </p>
            {codeSnippets.map((s, i) => (
              <button
                key={s.file}
                type="button"
                onClick={() => openFile(i)}
                className={`w-full flex items-center gap-2 pl-8 pr-2 py-1 text-left transition-colors ${i === index ? 'bg-cyanAccent/10 text-slate-100' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'}`}
              >
                <FileCode2 size={12} style={{ color: s.color }} />
                <span className="truncate">{s.file}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-0">
            {/* Onglets */}
            <div className="flex overflow-x-auto bg-[#0d1426] border-b border-slate-700/60 text-xs font-mono">
              {codeSnippets.map((s, i) => (
                <button
                  key={s.file}
                  type="button"
                  onClick={() => openFile(i)}
                  className={`relative flex items-center gap-2 px-3 py-2.5 whitespace-nowrap border-r border-slate-700/60 transition-colors ${i === index ? 'bg-[#0b1120] text-slate-100' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.file}
                  {i === index && <span className="absolute inset-x-0 top-0 h-0.5 bg-cyanAccent" />}
                </button>
              ))}
            </div>

            {/* Code */}
            <div className="flex h-[372px] overflow-auto font-mono text-[12.5px] leading-[22px]">
              <div className="select-none py-4 pl-4 pr-3 text-right text-slate-600">
                {Array.from({ length: lineCount }, (_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <pre className="py-4 pr-6 whitespace-pre">
                {lines.map((line, i) => (
                  <div key={i}>
                    {line.map((token, j) => <span key={j} className={COLORS[token.type]}>{token.text}</span>)}
                    {i === lines.length - 1 && (
                      <span className={`inline-block w-[7px] h-4 align-middle bg-cyanAccent ml-px ${done ? 'animate-pulse' : ''}`} />
                    )}
                    {line.length === 0 && i !== lines.length - 1 && ' '}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>

        {/* Barre d'état */}
        <div className="flex items-center gap-4 px-4 h-7 bg-cyanAccent/90 text-darkBg text-[11px] font-mono font-semibold">
          <span className="flex items-center gap-1"><GitBranch size={12} /> main</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={12} /> 0 {t('skills.editor.problems')}</span>
          <span className="ml-auto hidden sm:inline">UTF-8</span>
          <span>{snippet.lang}</span>
        </div>
      </div>
    </div>
  );
}
