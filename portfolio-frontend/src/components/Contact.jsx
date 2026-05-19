import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone, Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Identifiants EmailJS
    const serviceID = 'service_l35wsw7';
    const templateID = 'template_g449lme';
    const publicKey = 'MS5HiWTONgye26QV3';

    const templateParams = {
      from_name: formData.name,
      name: formData.name, // Added to match their template {{name}}
      from_email: formData.email,
      email: formData.email, // Added just in case
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                <a href="https://github.com/sorail742" target="_blank" rel="noreferrer" className="flex items-center text-slate-400 hover:text-cyanAccent transition-colors group">
                  <Github className="mr-4 group-hover:scale-110 transition-transform" /> github.com/sorail742
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-cardBg/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyanAccent/5 rounded-full blur-3xl -mr-10 -mt-10 group-focus-within:bg-cyanAccent/10 transition-colors"></div>
              <div className="relative z-10">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all mb-4"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all mb-4"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows="4"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all resize-none mb-4"
                ></textarea>

                <motion.button
                  whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full px-8 py-3 font-bold rounded-lg transition-colors shadow-lg flex items-center justify-center 
                    ${status === 'loading' ? 'bg-slate-700 text-slate-300 cursor-not-allowed' :
                      status === 'success' ? 'bg-green-500 text-white shadow-green-500/30' :
                        status === 'error' ? 'bg-red-500 text-white shadow-red-500/30' :
                          'bg-cyanAccent/90 text-darkBg hover:bg-cyanAccent shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]'}`}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="mr-2"><CheckCircle className="w-5 h-5 opacity-0" /></motion.div>Envoi en cours...</span>
                  ) : status === 'success' ? (
                    <span className="flex items-center"><CheckCircle className="mr-2 w-5 h-5" /> Message envoyé !</span>
                  ) : status === 'error' ? (
                    <span className="flex items-center"><XCircle className="mr-2 w-5 h-5" /> Erreur d'envoi</span>
                  ) : (
                    <span className="flex items-center">Envoyer <Send className="ml-2 w-4 h-4" /></span>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
