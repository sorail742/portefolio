import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [typedCode, setTypedCode] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [inView, setInView] = useState(false);

  const snippets = [
    {
      filename: "skills.json",
      code: `{\n  "Front-end": ["React", "Tailwind CSS"],\n  "Mobile": "React Native",\n  "Back-end": "Node.js",\n  "Databases": ["PostgreSQL", "MariaDB"],\n  "OS / Dev": "Linux / Ubuntu"\n}`
    },
    {
      filename: "main.c",
      code: `#include <stdio.h>\n\nint main() {\n    printf("Maîtrise de l'algorithmique en C!\\n");\n    return 0;\n}`
    },
    {
      filename: "app.js",
      code: `import React from 'react';\n\nconst App = () => {\n  console.log("Full-stack JavaScript Developer");\n  return <Portfolio />;\n};`
    },
    {
      filename: "server.py",
      code: `import django\nfrom rest_framework import views\n\ndef get_skills():\n    return ["Django", "API", "Analysis"]\n\nif __name__ == "__main__":\n    print(get_skills())`
    },
    {
      filename: "mobile.dart",
      code: `import 'package:flutter/material.dart';\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Text('Mobile solutions');\n  }\n}`
    },
    {
      filename: "deploy.sh",
      code: `#!/bin/bash\n\necho "Déploiement en cours..."\ndocker-compose up -d\npm2 start ecosystem.config.js\necho "Succès !"`
    }
  ];

  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    if (!inView) {
      setTypedCode('');
      setIsTypingComplete(false);
      return;
    }

    const currentSnippet = snippets[snippetIndex].code;
    let currentIndex = 0;

    // Reset before typing starts
    setTypedCode('');
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentSnippet.length) {
        setTypedCode(currentSnippet.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        // Wait 3 seconds, then move to next snippet
        setTimeout(() => {
          setSnippetIndex((prev) => (prev + 1) % snippets.length);
        }, 3000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [inView, snippetIndex]);

  // Generic syntax highlighting parser for multiple languages
  const renderHighlightedCode = (code) => {
    let highlighted = code
      .replace(/</g, "&lt;").replace(/>/g, "&gt;") // escape HTML
      // Keywords
      .replace(/\b(import|from|const|let|var|return|int|def|class|if|else|echo|extends|package)\b/g, '<span class="text-pink-400">$1</span>')
      // Strings (JSON keys or normal strings)
      .replace(/(&quot;)(.*?)(&quot;)/g, '<span class="text-green-400">$1$2$3</span>')
      .replace(/('(?:\\'|[^'])*')/g, '<span class="text-green-400">$1</span>')
      // Functions/Methods
      .replace(/\b([a-zA-Z_]\w*)(?=\()/g, '<span class="text-blue-400">$1</span>')
      // React tags
      .replace(/(&lt;\/?)([A-Z][a-zA-Z0-9]*)(.*?&gt;)/g, '$1<span class="text-yellow-300">$2</span>$3')
      // Comments
      .replace(/(\/\/.*|#.*)/g, '<span class="text-slate-500 italic">$1</span>');

    // Specific fix for JSON keys to be cyan (only if followed by colon)
    highlighted = highlighted.replace(/<span class="text-green-400">(&quot;[^&]+&quot;)<\/span>:/g, '<span class="text-cyan-400">$1</span>:');

    return { __html: highlighted };
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setInView(true)}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* LEFT COLUMN: Text and Description */}
          <div className="flex-1 w-full relative z-10">
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-2">
                Je Bâtis des applications
              </h2>
              <h2 className="text-4xl md:text-5xl font-extrabold text-cyanAccent uppercase tracking-tight flex items-center">
                Performantes & Sécurisées<span className="animate-pulse ml-1">.</span><span className="text-cyanAccent font-light animate-ping ml-2">|</span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl text-justify">
              En tant que développeur full-stack, j'implémente des solutions robustes et scalables, du front-end mobile au back-end, tout en maîtrisant mon environnement système.
            </p>

            <div className="space-y-6">
              <div className="group">
                <h3 className="text-xl font-bold font-mono text-slate-200 mb-2 group-hover:text-cyanAccent transition-colors">
                  <span className="text-cyanAccent mr-2">/&gt;</span>Développement Mobile & Web
                </h3>
                <p className="text-slate-500 font-mono pl-6 border-l-2 border-slate-700/50 group-hover:border-cyanAccent/50 transition-colors">
                  React, React Native, Tailwind CSS
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-bold font-mono text-slate-200 mb-2 group-hover:text-greenAccent transition-colors">
                  <span className="text-greenAccent mr-2">/&gt;</span>Backend & Système
                </h3>
                <p className="text-slate-500 font-mono pl-6 border-l-2 border-slate-700/50 group-hover:border-greenAccent/50 transition-colors">
                  Node.js, PostgreSQL, MariaDB, Linux/Ubuntu
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Code Editor */}
          <div className="w-full lg:w-[45%] relative z-10">
            {/* Editor Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyanAccent to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            {/* Editor Window */}
            <div className="relative rounded-xl bg-[#0a0f1c]/90 border border-slate-700/50 shadow-2xl backdrop-blur-sm overflow-hidden flex flex-col h-[380px]">
              {/* Header bar */}
              <div className="h-10 border-b border-slate-700/50 bg-[#0f172a]/80 flex items-center px-4 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-slate-400 font-mono text-xs opacity-70">
                  {snippets[snippetIndex].filename}
                </div>
                <div></div> {/* Placeholder to perfectly center text if needed */}
              </div>

              {/* Editor Content */}
              <div className="p-6 font-mono text-sm md:text-base leading-loose text-slate-300 relative flex-1 overflow-x-auto whitespace-pre">
                <div className="w-full">
                  <span dangerouslySetInnerHTML={renderHighlightedCode(typedCode)} />
                  <span className={`inline-block w-2.5 h-4 bg-cyanAccent ml-0.5 translate-y-[2px] ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
