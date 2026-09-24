import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone, MapPin, Send, CheckCircle, XCircle, Copy, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import { profile } from '../data/profile';

const SUBJECTS = ['job', 'freelance', 'internship', 'other'];

export default function Contact() {
  const { t, tr } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'freelance', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText('keithsorail@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
      temps: new Date().toLocaleString('fr-FR'), // Added to match their template {{temps}}
      reply_to: formData.email,
      // L'objet est toujours envoyé en français (c'est Sory qui lit l'email)
      subject: translations.fr.contact.subjects[formData.subject],
      message: `Objet : ${translations.fr.contact.subjects[formData.subject]}\n\n${formData.message}`,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'freelance', message: '' });

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, (err) => {
        console.error('Échec de l\'envoi du message', err);
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-baseline justify-center">
            <span className="text-cyanAccent font-mono text-xl md:text-2xl mr-3">05.</span> {t('contact.title')}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            {t('contact.intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-display font-semibold text-slate-200 mb-6">{t('contact.info')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <a href="mailto:keithsorail@gmail.com" className="flex items-center text-slate-400 hover:text-cyanAccent transition-colors group">
                    <Mail className="mr-4 group-hover:scale-110 transition-transform" /> keithsorail@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={t('contact.copyEmail')}
                    title={t('contact.copy')}
                    className={`p-1.5 rounded border transition-colors ${copied ? 'border-greenAccent text-greenAccent' : 'border-slate-700 text-slate-500 hover:text-cyanAccent hover:border-cyanAccent/50'}`}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
                <a href="tel:+224624284874" className="flex items-center text-slate-400 hover:text-cyanAccent transition-colors group">
                  <Smartphone className="mr-4 group-hover:scale-110 transition-transform" /> +224 624 284 874
                </a>
                <a href="https://github.com/sorail742" target="_blank" rel="noreferrer" className="flex items-center text-slate-400 hover:text-cyanAccent transition-colors group">
                  <Github className="mr-4 group-hover:scale-110 transition-transform" /> github.com/sorail742
                </a>
                <a href="https://linkedin.com/in/sory-keita-7434b239a/" target="_blank" rel="noreferrer" className="flex items-center text-slate-400 hover:text-cyanAccent transition-colors group">
                  <Linkedin className="mr-4 group-hover:scale-110 transition-transform" /> LinkedIn
                </a>
                <div className="flex items-center text-slate-400">
                  <MapPin className="mr-4" /> {tr(profile.location)}
                </div>
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
                  placeholder={t('contact.name')}
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all mb-4"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.email')}
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyanAccent/50 focus:ring-1 focus:ring-cyanAccent/50 transition-all mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-4" role="radiogroup" aria-label={t('contact.subjectLabel')}>
                  {SUBJECTS.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      role="radio"
                      aria-checked={formData.subject === subject}
                      onClick={() => setFormData({ ...formData, subject })}
                      className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${formData.subject === subject
                        ? 'bg-cyanAccent text-darkBg border-cyanAccent font-semibold'
                        : 'border-slate-700 text-slate-400 hover:border-cyanAccent/50 hover:text-cyanAccent'}`}
                    >
                      {t(`contact.subjects.${subject}`)}
                    </button>
                  ))}
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.message')}
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
                    <span className="flex items-center"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="mr-2"><CheckCircle className="w-5 h-5 opacity-0" /></motion.div>{t('contact.sending')}</span>
                  ) : status === 'success' ? (
                    <span className="flex items-center"><CheckCircle className="mr-2 w-5 h-5" /> {t('contact.sent')}</span>
                  ) : status === 'error' ? (
                    <span className="flex items-center"><XCircle className="mr-2 w-5 h-5" /> {t('contact.error')}</span>
                  ) : (
                    <span className="flex items-center">{t('contact.send')} <Send className="ml-2 w-4 h-4" /></span>
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
