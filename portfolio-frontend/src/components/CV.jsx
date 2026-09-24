import React, { forwardRef } from 'react';
import { Mail, Smartphone, MapPin, Github, Linkedin, Globe, User, Briefcase, FolderGit2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { education } from '../data/education';
import { profile } from '../data/profile';

// Styles en ligne : la page est aussi la source du PDF (impression A4, voir index.css)
const NAVY = '#1f3b5e';
const ACCENT = '#0e9fb5';
const TEXT = '#334155';
const MUTED = '#64748b';
const FONT = '"Inter Variable", Arial, sans-serif';

// Projets mis en avant dans le CV, avec un résumé court
const cvProjects = {
  HealthBridge: 'Plateforme de santé : messagerie patients–médecins en temps réel, prise de rendez-vous et dossiers médicaux.',
  'Cultivateur Market': "Marketplace reliant producteurs locaux et consommateurs : gestion d'inventaire, panier et paiements sécurisés.",
  BCAConnect: "Application de gestion d'entreprise : notifications, rapports de litiges et tableau de bord exécutif.",
};

const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Malinké', level: 'Natif' },
  { name: 'Anglais', level: 'Technique' },
];

const interests = ['Veille technologique', 'Open source', 'Systèmes embarqués', 'Sermons et séries islamiques', 'Sport'];

function SideTitle({ children }) {
  return (
    <h2 style={{ fontFamily: FONT, fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#ffffff', margin: '0 0 10px 0', paddingBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.25)' }}>
      {children}
    </h2>
  );
}

function MainTitle({ icon: Icon, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
      <div style={{ width: '26px', height: '26px', borderRadius: '7px', backgroundColor: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={14} color="#ffffff" />
      </div>
      <h2 style={{ fontFamily: FONT, fontSize: '14px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: NAVY, margin: 0 }}>{children}</h2>
      <div style={{ flex: 1, height: '2px', backgroundColor: '#e2e8f0' }} />
    </div>
  );
}

function ContactLine({ icon: Icon, href, children }) {
  const textStyle = { fontSize: '10.5px', color: '#e2e8f0', wordBreak: 'break-all', lineHeight: 1.3, textDecoration: 'none' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px' }}>
      <Icon size={13} color="#7dd3fc" style={{ flexShrink: 0 }} />
      {/* Liens cliquables, y compris dans le PDF */}
      {href ? <a href={href} style={textStyle}>{children}</a> : <span style={textStyle}>{children}</span>}
    </div>
  );
}

const CV = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="cv-sheet"
    style={{
      width: '210mm', height: '297mm', backgroundColor: '#ffffff', fontFamily: FONT, display: 'flex',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', margin: '0 auto', overflow: 'hidden', boxSizing: 'border-box', color: TEXT,
    }}
  >
    {/* Colonne latérale */}
    <aside style={{ width: '33%', backgroundColor: NAVY, padding: '28px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '128px', height: '128px', borderRadius: '50%', border: `4px solid ${ACCENT}`, overflow: 'hidden', backgroundColor: '#0f172a' }}>
          <img src="/profile.png" alt="Sory Keita" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      <section>
        <SideTitle>Contact</SideTitle>
        <ContactLine icon={Mail} href={`mailto:${profile.email}`}>{profile.email}</ContactLine>
        <ContactLine icon={Smartphone} href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</ContactLine>
        <ContactLine icon={MapPin}>{profile.location.fr}</ContactLine>
        <ContactLine icon={Github} href={profile.socials.github}>github.com/sorail742</ContactLine>
        <ContactLine icon={Linkedin} href={profile.socials.linkedin}>linkedin.com/in/sory-keita-7434b239a</ContactLine>
        <ContactLine icon={Globe} href="https://portefolio-six-chi.vercel.app/">portefolio-six-chi.vercel.app</ContactLine>
      </section>

      <section>
        <SideTitle>Compétences</SideTitle>
        {skills.map((domain) => (
          <div key={domain.title.fr} style={{ marginBottom: '9px' }}>
            <p style={{ fontSize: '10.5px', fontWeight: 700, color: '#7dd3fc', margin: '0 0 4px 0' }}>{domain.title.fr}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {domain.items.map((item) => (
                <span key={item} style={{ fontSize: '9.5px', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '4px', padding: '2px 6px' }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <SideTitle>Langues</SideTitle>
        {languages.map((l) => (
          <div key={l.name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', marginBottom: '5px' }}>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{l.name}</span>
            <span style={{ color: '#cbd5e1' }}>{l.level}</span>
          </div>
        ))}
      </section>

      <section>
        <SideTitle>Centres d'intérêt</SideTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {interests.map((i) => (
            <span key={i} style={{ fontSize: '9.5px', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '10px', padding: '2px 8px' }}>{i}</span>
          ))}
        </div>
      </section>
    </aside>

    {/* Colonne principale */}
    <main style={{ width: '67%', padding: '30px 30px 24px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <header>
        <h1 style={{ fontFamily: FONT, fontSize: '34px', fontWeight: 900, letterSpacing: '-0.5px', color: NAVY, margin: 0, lineHeight: 1.05 }}>SORY KEITA</h1>
        <p style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '2px', color: ACCENT, textTransform: 'uppercase', margin: '6px 0 10px 0' }}>Développeur Full-Stack & Mobile</p>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '20px', padding: '4px 10px' }}>
            <CheckCircle2 size={12} color="#059669" />
            <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#047857' }}>Disponible : emploi (CDI / CDD) · missions freelance · stage</span>
          </div>
        </div>
      </header>

      <section>
        <MainTitle icon={User}>Profil</MainTitle>
        <p style={{ fontSize: '11.5px', lineHeight: 1.6, margin: 0 }}>
          Développeur Full-Stack & Mobile autodidacte, étudiant en <strong>3ème année de Licence Informatique</strong> à l'Université de Labé.
          Je conçois des applications web et mobiles complètes — de l'interface React ou Flutter jusqu'à l'API Node.js et la base de données —
          dans des domaines variés : santé, agriculture, gestion d'entreprise. Je cherche à mettre ces compétences au service d'une équipe
          ou de vos projets, en poste, en freelance ou en stage.
        </p>
      </section>

      <section>
        <MainTitle icon={Briefcase}>Expérience</MainTitle>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 style={{ fontFamily: FONT, fontSize: '13px', fontWeight: 700, color: TEXT, margin: 0 }}>Développeur Full-Stack Freelance</h3>
          <span style={{ fontSize: '10.5px', fontWeight: 700, color: ACCENT }}>2024 – Présent</span>
        </div>
        <ul style={{ margin: '6px 0 0 0', paddingLeft: '16px', fontSize: '11.5px', lineHeight: 1.55, listStyleType: 'disc' }}>
          <li>Conception, développement et maintenance d'applications web avec React et Node.js.</li>
          <li>Fonctionnalités temps réel (messagerie, notifications) avec Socket.io.</li>
          <li>Automatisation de processus et création de workflows avec n8n.</li>
          <li>Déploiement, mises à jour et optimisation des performances.</li>
        </ul>
      </section>

      <section>
        <MainTitle icon={FolderGit2}>Projets récents</MainTitle>
        {projects.filter((p) => cvProjects[p.title]).map((p) => (
          <div key={p.title} style={{ marginBottom: '9px' }}>
            <h3 style={{ fontFamily: FONT, fontSize: '12.5px', fontWeight: 700, color: TEXT, margin: 0 }}>{p.title}</h3>
            <p style={{ fontSize: '11px', lineHeight: 1.5, margin: '2px 0 3px 0' }}>{cvProjects[p.title]}</p>
            <p style={{ fontSize: '10px', color: MUTED, margin: 0 }}>
              <span style={{ fontWeight: 700, color: NAVY }}>Stack : </span>{p.tech.join(' · ')}
            </p>
          </div>
        ))}
      </section>

      <section>
        <MainTitle icon={GraduationCap}>Formation & Certifications</MainTitle>
        <div style={{ position: 'relative', paddingLeft: '16px' }}>
          <div style={{ position: 'absolute', left: '4px', top: '4px', bottom: '4px', width: '2px', backgroundColor: '#e2e8f0' }} />
          {education.map((item) => (
            <div key={item.title.fr} style={{ position: 'relative', marginBottom: '7px' }}>
              <div style={{ position: 'absolute', left: '-15px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.status === 'pending' ? '#f59e0b' : item.status === 'current' ? ACCENT : '#10b981' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'baseline' }}>
                <p style={{ fontSize: '11.5px', fontWeight: 700, color: TEXT, margin: 0 }}>{item.title.fr}</p>
                <span style={{ fontSize: '10px', fontWeight: 600, color: MUTED, whiteSpace: 'nowrap' }}>{item.date.fr ?? item.date}</span>
              </div>
              <p style={{ fontSize: '10.5px', color: MUTED, margin: '1px 0 0 0' }}>{item.place.fr}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  </div>
));

export default CV;
