import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black text-center px-4 pt-20 relative overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        className="max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-6 inline-block"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-full">
            <Sparkles size={18} className="text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Bienvenue sur mon portfolio</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          Développeur Web & Mobile
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Je crée des applications modernes, performantes et responsives avec les dernières technologies. React, Next.js, Node.js et bien plus.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg smooth-transition hover-lift shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
          <motion.a 
            href="#projects" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400/50 text-blue-100 font-semibold rounded-lg smooth-transition hover:border-blue-400 hover:text-white hover:bg-blue-500/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus
          </motion.a>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="float"
          className="mt-16"
        >
          <div className="inline-block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl"
            >
              👨‍💻
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;