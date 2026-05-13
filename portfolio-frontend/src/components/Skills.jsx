import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Front-end',
    icon: '🎨',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Back-end',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST API'],
  },
  {
    title: 'Base de données',
    icon: '💾',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL'],
  },
  {
    title: 'Outils',
    icon: '🛠️',
    skills: ['Git/GitHub', 'VS Code', 'Figma', 'Vite'],
  },
];

const methods = [
  'Clean Code', 
  'Responsive Design', 
  'REST API', 
  'Agile'
];



const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-black/50 relative overflow-hidden">
      <div className="absolute -left-40 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un aperçu des technologies et outils que je maîtrise
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="glass p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-slate-700/50 rounded-lg text-white text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Méthodes */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">Méthodologies & Bonnes Pratiques</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {methods.map((method, index) => (
              <motion.div
                key={method}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="glass px-6 py-3 rounded-full font-semibold text-white hover-lift smooth-transition">
                  {method}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;