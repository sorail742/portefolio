import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'Expérience',
      title: 'Développeur Full-Stack',
      company: 'À définir',
      period: '2024 - Présent',
      location: 'Remote',
      description: 'Développement d\'applications web modernes avec React, Node.js et MongoDB.'
    },
    {
      type: 'Expérience',
      title: 'Développeur Freelance',
      company: 'Projets Personnels',
      period: '2023 - 2024',
      location: 'Remote',
      description: 'Création de projets web et mobiles pour différents clients.'
    }
  ];

  const formations = [
    {
      type: 'Formation',
      title: 'Développement Web Full-Stack',
      company: 'Bootcamp/Formation en ligne',
      period: '2023 - 2024',
      location: 'Online',
      description: 'Maîtrise de React, Node.js, MongoDB et technologies modernes du web.'
    },
    {
      type: 'Formation',
      title: 'Bases de la Programmation',
      company: 'Autodidacte',
      period: '2022 - 2023',
      location: 'Online',
      description: 'Apprentissage des fondamentaux de JavaScript et du développement web.'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const ExperienceCard = ({ item }) => (
    <motion.div
      variants={itemVariants}
      className="glass p-6 rounded-2xl border-l-4 border-blue-500 hover-lift"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {item.type === 'Expérience' ? (
              <Award size={20} className="text-blue-400" />
            ) : (
              <Award size={20} className="text-purple-400" />
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
              {item.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-blue-300 font-medium">{item.company}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar size={16} />
          {item.period}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <MapPin size={16} />
          {item.location}
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-black/50 relative overflow-hidden">
      <div className="absolute -right-40 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Expériences & Formations
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mon parcours professionnel et académique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Expériences */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Expériences
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} item={exp} />
              ))}
            </div>
          </motion.div>

          {/* Formations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Formations
            </h3>
            <div className="space-y-4">
              {formations.map((form, index) => (
                <ExperienceCard key={index} item={form} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
