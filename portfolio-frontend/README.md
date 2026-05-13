# Portfolio Frontend (React + Tailwind + Lucide)

Ce projet est un template frontend pour créer un portfolio de développeur web professionnel. Il est conçu pour être facilement personnalisable et connecté à un backend (par exemple, Express/MongoDB) pour gérer les projets et les messages de contact.

## 📋 Prérequis

- [Node.js](https://nodejs.org/) (version 18.x ou supérieure recommandée)
- [npm](https://www.npmjs.com/)

## 🚀 Démarrage

### 1. Cloner le dépôt et installer les dépendances

```bash
# git clone [URL_DU_REPO]
cd portfolio-frontend
npm install 
```

### 2) Lancer en dev
```bash
npm run dev
# http://localhost:5173
```

## 📌 Fonctionnalités
- **Navbar** avec ancre vers sections.
- **Hero** : titre + bouton.
- **À propos** avec icônes.
- **Projets** : récupérés depuis API backend (`/api/projects`).
- **Contact** : formulaire POST vers `/api/contact`.
- **Footer** avec liens sociaux.

## ⚡ Personnalisation
- Modifie `src/api/api.js` → `baseURL` selon ton backend.
- Mets tes propres projets via l'API admin (`/api/projects`).

---

> Dépendances : React, Tailwind, Lucide-react, Axios, Framer Motion



structure du protfolio
1. Page d’accueil (Introduction)

Courte, impactante, professionnelle. Elle doit contenir :

Votre nom et votre titre professionnel (ex. : Développeur Web, Designer UX, Photographe Pro…)

Une phrase accroche concise : ce que vous faites + votre valeur ajoutée

Une photo professionnelle (optionnelle mais fortement recommandée)

Un bouton "Voir mes projets" ou "Contact"

✅ 2. À propos

Cette section humanise votre profil. Inclure :

Un résumé professionnel (3–5 lignes)

Vos compétences clés

Votre parcours (formation + expériences majeures)

Vos objectifs professionnels

Une photo plus personnelle (pas obligatoire)

✅ 3. Projets / Réalisations (le cœur du portfolio)

La partie la plus importante. Chaque projet doit contenir :

Titre du projet

Court descriptif (contexte + objectif)

Votre rôle exact

Les compétences / outils utilisés

Le processus (étapes, maquettes, code, photos… selon le domaine)

Résultats mesurables si possible (ex. : +30% de ventes, +20% d’engagement)

Visuels, démos, captures d’écran, liens en ligne

📌 3 à 6 projets de forte qualité suffisent.

✅ 4. Compétences

Classez-les clairement :

Compétences techniques (ex. : HTML/CSS/JavaScript)

Soft skills (ex. : communication, leadership)

Logiciels / outils (ex. : Figma, Photoshop, VS Code)

Inclure des niveaux de maîtrise si possible (barres, étoiles ou texte).

✅ 5. Expériences professionnelles

Présentez-les sous forme concise :

Titre du poste

Entreprise

Dates

3–4 bullet points avec vos réalisations concrètes

✅ 6. Témoignages ou recommandations

Ajoute énormément de crédibilité.
Idéal :

Avis clients

Recommandations LinkedIn

Commentaires de profs/mentors

✅ 7. Contact

Doit être simple et visible :

Email

LinkedIn

GitHub (pour les devs)

Formulaire de contact

Téléphone (facultatif)

🔥 Bonus pour un portfolio vraiment professionnel

Version mobile impeccable

Identité visuelle cohérente

Ton professionnel mais humain

Texte clair et sans fautes

Navigation rapide

Mise en avant de votre valeur (pas seulement ce que vous faites, mais ce que vous apportez)



exemple 

1. Page d’accueil (Hero Section)

Titre :
Développeur Web & Mobile Full-Stack

Phrase d’accroche :
Je conçois et développe des applications modernes, performantes et responsives avec React, React Native, Node.js et MongoDB.

Bouton CTA :
— Voir mes projets
— Me contacter

⭐ 2. À propos

Je suis un développeur Full-Stack passionné par la création d’applications web et mobiles intuitives et performantes. J’aime transformer des idées en solutions concrètes grâce à des technologies modernes comme React, React Native, Tailwind, Node.js et MongoDB.

Autonome, curieux et rigoureux, je conçois aussi bien des interfaces utilisateurs modernes que des API robustes et sécurisées. 
Mon objectif est d’offrir des expériences digitales fluides, optimisées et adaptées aux besoins réels des utilisateurs.

Compétences clés

Front-end : React 50%, React Native 25%, Tailwind CSS 65%, JavaScript 55%, HTML5 60%, CSS3 40%

Back-end : Node.js 65%, Express.js 50%

Base de données : MongoDB 75%, Mongoose 75%

Outils : Git/GitHub 80%, VS Code 90%, insomnia 100%, Figma 40%

Méthodes : Clean Code, Responsive Design, API REST, Agile

⭐ 3. Mes projets (exemples professionnels)
🔹 1. App Mobile de Suivi Sportif – FitTrack

Technologies : React Native, Node.js, MongoDB
Rôle : Développeur Full-Stack
Description :
Application mobile permettant de suivre ses entraînements, objectifs et progrès physiques.

Processus :

Design de l’interface (Figma → React Native + Tailwind RN)

Implémentation de l’authentification (JWT)

Création d’une API REST (Node.js + Express)

Stockage dans une base MongoDB

Synchronisation en temps réel (WebSockets)

Résultats :

+300 utilisateurs testeurs

Temps de chargement réduit à moins de 2 secondes

🔹 2. Tableau de bord E-commerce – AdminShop

Technologies : React, Tailwind, Node.js, MongoDB
Rôle : Développeur Front-end & Back-end
Description :
Un dashboard moderne permettant de gérer produits, commandes et clients.

Processus :

Création d’un design moderne (React + Tailwind)

Authentification sécurisée (JWT + middleware custom)

API REST complète pour CRUD produits/commandes

Graphiques en temps réel (Chart.js)

Résultats :

Gain de productivité de 40% pour les administrateurs

Interface responsive + mode sombre

🔹 3. Portfolio interactif – WebDev Portfolio

Technologies : React, Tailwind
Rôle : Développeur Front-end
Description :
Un site portfolio animé mettant en avant projets, compétences et expériences.

Points forts :

Animations modernes (Framer Motion)

Navigation fluide

Optimisation SEO + performance (score Lighthouse 95+)

⭐ 4. Compétences
Front-end

React

React Native

Tailwind CSS

JavaScript (ES6+)

HTML5 / CSS3

Back-end

Node.js

Express.js

MongoDB / Mongoose

Outils & Méthodes

Git / GitHub

Postman

Figma

Méthodologie Agile

Déploiement (Vercel, Render, Netlify)

⭐ 5. Expériences Professionnelles (exemple)
🔸 Développeur Web & Mobile – Freelance

2023 — Aujourd’hui
Missions :

Développement d’applications web et mobiles sur mesure

Création d’API sécurisées en Node.js

Intégration de maquettes avec React + Tailwind

Optimisation performance et SEO

Déploiement et maintenance

Réalisations :

10+ projets livrés

95% satisfaction client

Applications dépassant les 1 000 utilisateurs cumulés

⭐ 6. Témoignages

“Excellent travail ! Mon application mobile fonctionne parfaitement et le design est top. Très professionnel.”
— Sarah M., Coach Sportive

“Dashboard clair, rapide et très intuitif. Un gain énorme pour mon business.”
— Hassan D., E-commerçant

⭐ 7. Contact

Email : keithsorail@gmail.com

LinkedIn : Pas 
GitHub : ton-repo
Téléphone (optionnel)
Formulaire de contact intégré