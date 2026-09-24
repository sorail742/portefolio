// Domaines d'expertise : icône (lucide-react), titre, description et technologies
export const skills = [
    {
        icon: "Monitor",
        title: { fr: "Frontend", en: "Frontend" },
        description: { fr: "Interfaces réactives, accessibles et responsive.", en: "Responsive, accessible and reactive interfaces." },
        items: ["React", "Tailwind CSS", "Vite", "HTML", "CSS"],
    },
    {
        icon: "Smartphone",
        title: { fr: "Mobile", en: "Mobile" },
        description: { fr: "Applications Android et iOS avec une seule base de code.", en: "Android and iOS apps from a single codebase." },
        items: ["Flutter", "Dart"],
    },
    {
        icon: "Server",
        title: { fr: "Backend & temps réel", en: "Backend & real-time" },
        description: { fr: "API REST, authentification et messagerie en direct.", en: "REST APIs, authentication and live messaging." },
        items: ["Node.js", "Socket.io"],
    },
    {
        icon: "Database",
        title: { fr: "Bases de données", en: "Databases" },
        description: { fr: "Modélisation relationnelle et NoSQL, requêtes performantes.", en: "Relational and NoSQL modelling, efficient queries." },
        items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "SQLite"],
    },
    {
        icon: "Workflow",
        title: { fr: "Automatisation", en: "Automation" },
        description: { fr: "Workflows qui relient vos outils et suppriment les tâches répétitives.", en: "Workflows that connect your tools and remove repetitive work." },
        items: ["n8n"],
    },
    {
        icon: "GitBranch",
        title: { fr: "Outils & collaboration", en: "Tools & collaboration" },
        description: { fr: "Versionnage, revue de code et environnement de travail soigné.", en: "Version control, code review and a clean dev setup." },
        items: ["GitHub", "VS Code"],
    },
];

// Liste à plat de toutes les technologies (chiffres clés du Hero)
export const allTechnologies = [...new Set(skills.flatMap((domain) => domain.items))];
