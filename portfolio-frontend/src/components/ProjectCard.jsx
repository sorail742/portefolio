import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      className="group glass rounded-2xl overflow-hidden hover-lift h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 smooth-transition">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech, i) => (
            <motion.span 
              key={i} 
              className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-xs font-medium text-blue-300 border border-blue-500/30"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
          {project.demoUrl && (
            <motion.a 
              href={project.demoUrl} 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm smooth-transition"
              whileHover={{ x: 3 }}
            >
              <ExternalLink size={16} /> Demo
            </motion.a>
          )}
          {project.repoUrl && (
            <motion.a 
              href={project.repoUrl} 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 font-medium text-sm smooth-transition"
              whileHover={{ x: 3 }}
            >
              <Github size={16} /> Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
