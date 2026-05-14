import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message envoyé avec succès !');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-mono font-bold mb-4 flex items-center justify-center">
            <span className="text-cyanAccent mr-2">04.</span> Me Contacter
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            Disponible pour un stage ou une mission freelance. Que vous ayez une question ou un projet, n'hésitez pas à m'écrire !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl text-slate-200 font-mono mb-6">Informations</h3>
              <div className="space-y-4">
                <a href="mailto:keithsorail@gmail.com" className="flex items-center text-slate-400 hover:text-cyanAccent transition-colors group">
                  <Mail className="mr-4 group-hover:scale-110 transition-transform" /> keithsorail@gmail.com
                </a>
                <div className="flex items-center text-slate-400">
                  <Smartphone className="mr-4" /> +224 624 284 874
                </div>
                <a href="https://github.com/sorail742742" target="_blank" rel="noreferrer" className="flex items-center text-slate-400 hover:text-cyanAccent transition-colors group">
                  <Github className="mr-4 group-hover:scale-110 transition-transform" /> github.com/sorail742
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-cardBg/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyanAccent/5 rounded-full blur-3xl -mr-10 -mt-10 group-focus-within:bg-cyanAccent/10 transition-colors"></div>
              <div className="relative z-10">
                <input type="text" placeholder="Nom" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all mb-4" />
                <input type="email" placeholder="Email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all mb-4" />
                <textarea placeholder="Message" required rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all resize-none mb-4"></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-3 bg-cyanAccent/90 text-darkBg font-bold rounded-lg hover:bg-cyanAccent transition-colors shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                >
                  Envoyer
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
