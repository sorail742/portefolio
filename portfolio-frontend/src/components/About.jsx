import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: "Code Propre",
      description: "J'écris du code maintenable et optimisé"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      description: "Des applications rapides et réactives"
    },
    {
      icon: <Target size={24} />,
      title: "Résultats",
      description: "Focused sur la qualité et l'innovation"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-black/50 relative overflow-hidden">
      <div className="absolute -right-40 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un développeur passionné qui transforme les idées en solutions numériques innovantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative rounded-2xl shadow-2xl h-96 w-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white flex items-center justify-center">
                <span className="text-9xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Je suis un développeur Full-Stack passionné par la création d'applications web et mobiles intuitives et performantes. J'aime transformer des idées en solutions concrètes grâce à des technologies modernes comme React, Node.js, PostgreSQL, MySQL et MongoDB.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Autonome, curieux et rigoureux, je conçois aussi bien des interfaces utilisateurs modernes que des API robustes et sécurisées. Mon objectif est d'offrir des expériences digitales fluides, optimisées et adaptées aux besoins réels des utilisateurs.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass p-8 rounded-2xl hover-lift"
            >
              <div className="h-14 w-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 smooth-transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mt-4">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
