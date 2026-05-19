import React, { forwardRef } from 'react';
import { Mail, Smartphone, MapPin, Github, User, Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

const CV = forwardRef((props, ref) => {
  const brandColor = "#1f3b5e";

  return (
    <div
      ref={ref}
      className="bg-white text-slate-800 mx-auto shadow-2xl flex font-sans"
      style={{
        width: '210mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
        overflow: 'hidden',
        fontSize: '12px',
      }}
    >
      {/* Left Column (33%) */}
      <div style={{ width: '33%', backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0', padding: '28px 18px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>

        {/* Profile Pic */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: `3px solid ${brandColor}`, overflow: 'hidden' }}>
            <img src="/profile.png" alt="Sory Keita" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '4px', marginBottom: '10px' }}>Contact</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Mail size={12} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#475569', fontSize: '10px', wordBreak: 'break-all' }}>keithsorail@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Smartphone size={12} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#475569', fontSize: '10px' }}>+224 624 284 874</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <MapPin size={12} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#475569', fontSize: '10px' }}>Labé, Guinée</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Github size={12} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#475569', fontSize: '10px' }}>github.com/sorail742</span>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '4px', marginBottom: '10px' }}>Compétences</h2>
          <div style={{ marginBottom: '8px' }}>
            <h3 style={{ fontWeight: '700', color: '#1e293b', fontSize: '10px', marginBottom: '3px' }}>Frontend & Mobile</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px' }}>
              <li>React, React Native</li>
              <li>Tailwind CSS, Vite</li>
            </ul>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <h3 style={{ fontWeight: '700', color: '#1e293b', fontSize: '10px', marginBottom: '3px' }}>Backend</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px' }}>
              <li>Node.js, Express</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: '700', color: '#1e293b', fontSize: '10px', marginBottom: '3px' }}>Base de Données</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px' }}>
              <li>PostgreSQL, MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '4px', marginBottom: '10px' }}>Langues</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px', lineHeight: '1.7' }}>
            <li><strong>Français :</strong> Courant</li>
            <li><strong>Malinké :</strong> Natif</li>
            <li><strong>Anglais :</strong> Technique</li>
          </ul>
        </div>

        {/* Interests */}
        <div>
          <h2 style={{ fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '4px', marginBottom: '10px' }}>Centres d'intérêt</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px', lineHeight: '1.7' }}>
            <li>Veille Technologique</li>
            <li>Open Source</li>
            <li>Sport</li>
          </ul>
        </div>
      </div>

      {/* Right Column (67%) */}
      <div style={{ width: '67%', backgroundColor: '#ffffff', padding: '28px 24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.5px', color: brandColor, margin: '0 0 4px 0' }}>Sory Keita</h1>
          <h2 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', color: '#64748b', textTransform: 'uppercase', margin: 0 }}>Développeur Full-Stack</h2>
        </div>

        {/* Profile */}
        <div style={{ marginBottom: '16px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: brandColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <User size={14} color="white" />
            </div>
            <div style={{ flex: 1, marginLeft: '10px', borderBottom: `2px solid ${brandColor}` }}>
              <h2 style={{ fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: brandColor, margin: '0 0 2px 0' }}>Profile</h2>
            </div>
          </div>
          <div style={{ paddingLeft: '36px' }}>
            <p style={{ fontSize: '10px', color: '#475569', lineHeight: '1.65', textAlign: 'justify', margin: 0 }}>
              Développeur web passionné et autodidacte, j'ai renforcé mes compétences à travers divers projets concrets et des défis techniques variés. Curieux et motivé, j'évolue continuellement dans un environnement en constante évolution. En quête de nouveaux challenges, je souhaite intégrer une équipe dynamique à laquelle je pourrais apporter ma rigueur, ma créativité et ma soif d'apprendre.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: brandColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Briefcase size={14} color="white" />
            </div>
            <div style={{ flex: 1, marginLeft: '10px', borderBottom: `2px solid ${brandColor}` }}>
              <h2 style={{ fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: brandColor, margin: '0 0 2px 0' }}>Expériences Professionnelles</h2>
            </div>
          </div>

          {/* Dev Full-Stack */}
          <div style={{ paddingLeft: '36px', marginBottom: '12px' }}>
            <h3 style={{ fontWeight: '700', color: '#334155', fontSize: '11px', margin: '0 0 4px 0' }}>Développeur Full-Stack</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px', lineHeight: '1.6', margin: 0 }}>
              <li>Conception, développement et maintenance d'applications web avec React et Node.js.</li>
              <li>Collaboration étroite pour transformer les maquettes (Figma) en interfaces utilisateur réactives.</li>
              <li>Gestion du déploiement, des mises à jour et de l'optimisation des performances.</li>
            </ul>
          </div>

          {/* Projects */}
          <div style={{ paddingLeft: '36px', marginBottom: '12px' }}>
            <h3 style={{ fontWeight: '700', color: '#334155', fontSize: '11px', margin: '0 0 4px 0' }}>Projets Réalisés</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px', lineHeight: '1.6', margin: 0 }}>
              {projects.map((p, idx) => (
                <li key={idx}>
                  <strong style={{ color: '#334155' }}>{p.title}</strong> ({p.tech.join(', ')})
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div style={{ paddingLeft: '36px' }}>
            <h3 style={{ fontWeight: '700', color: '#334155', fontSize: '11px', margin: '0 0 4px 0' }}>Certifications et Formations</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '14px', color: '#475569', fontSize: '10px', lineHeight: '1.6', margin: 0 }}>
              <li>Licence Informatique → Université de Labé (2024 - 2027)</li>
              <li>React, Node.js (Full Stack) → Autodidacte & Open Source</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CV;
