
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/sory.keita.241594", label: "Facebook" },
    { icon: <Mail size={20} />, href: "mailto:keithsorail@gmail.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          {/* Contenu principal */}
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              Prêt à collaborer?
            </motion.h3>
            <motion.p 
              className="text-slate-300 max-w-xl mx-auto mb-8"
              variants={itemVariants}
            >
              Je suis toujours ouvert à de nouveaux projets et collaborations. N'hésitez pas à me contacter!
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6 mb-12"
              variants={containerVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-600 rounded-lg blur opacity-0 group-hover:opacity-75 smooth-transition"></div>
                  <div className="relative bg-slate-800 p-3 rounded-lg group-hover:bg-slate-700 smooth-transition border border-slate-700 group-hover:border-blue-500">
                    <span className="text-white group-hover:text-blue-300 smooth-transition">
                      {link.icon}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 my-10"></div>

          {/* Bottom Info */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-slate-400 text-sm">
              © 2025 Sory Keïta. Tous droits réservés.
            </p>
            <p className="text-slate-400 text-sm">
              Conçu avec ❤️ et React
            </p>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl smooth-transition z-40"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <ArrowUp size={20} className="text-white" />
        </motion.button>
      </div>
    </footer>
  );
}
