import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { fetchProjects } from '../api/api';

// Sous-composant pour une carte de projet individuelle
const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img className="h-48 w-full object-cover" src={project.imageUrl || 'https://via.placeholder.com/400x200'} alt={project.title} />
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetchProjects();
        setProjects(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des projets:", err);
        setError("Impossible de charger les projets. Assurez-vous que le backend est en cours d'exécution.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Mes Projets</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Voici une sélection de projets sur lesquels j'ai travaillé.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {loading && <p className="text-center col-span-3 dark:text-white">Chargement des projets...</p>}
          {error && <p className="text-center col-span-3 text-red-500">{error}</p>}
          {!loading && !error && projects.map((project, index) => (
            <ProjectCard key={project._id || index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;