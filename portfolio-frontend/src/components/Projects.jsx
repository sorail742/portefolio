
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Mock data for projects
const mockProjects = [
  {
    id: 1,
    title: "Cultivateur Market",
    description: "Une plateforme e-commerce connectant les producteurs locaux aux consommateurs. Gestion d'inventaire, paiements sécurisés et livraison.",
    image: "",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Healthbridge",
    description: "Application médicale facilitant la communication entre patients et professionnels de santé. Gestion des rendez-vous et dossiers médicaux.",
    image: "",
    technologies: ["React", "Tailwind", "node.js", "PostgreSQL", "JWT", "Firebase"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "ConnectMigrant",
    description: "Plateforme d'intégration pour migrants avec ressources, communauté et offres d'emploi locales. Support multilingue.",
    image: "",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Appendtech",
    description: "Plateforme et mobile permet au apprenant de mieux comprendre les langage de programmation et quelque leçon complementaire",
    image: "",
    technologies: ["dart", "flutter", "supabase"],
    demoUrl: "#",
    repoUrl: "#"
  }
];

export default function Projects() {
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
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-black/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez les projets sur lesquels j'ai travaillé récemment
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mockProjects.map(p => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
