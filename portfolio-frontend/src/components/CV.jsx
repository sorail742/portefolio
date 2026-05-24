import React, { forwardRef } from 'react';
import { Mail, Smartphone, MapPin, Github, User, Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

const CV = forwardRef((props, ref) => {
  const brandColor = "#1f3b5e";

  return (
    <div
      ref={ref}
      style={{
        width: '210mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        backgroundColor: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        margin: '0 auto',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Left Column (35%) */}
      <div style={{ width: '35%', backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0', padding: '30px 25px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>

        {/* Profile Pic */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <div style={{ width: '130px', height: '130px', borderRadius: '50%', border: `4px solid ${brandColor}`, overflow: 'hidden' }}>
            <img src="/profile.png" alt="Sory Keita" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: '25px', width: '100%' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '5px', marginBottom: '12px' }}>Contact</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Mail size={16} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#334155', fontSize: '13px', wordBreak: 'break-all' }}>keithsorail@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Smartphone size={16} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#334155', fontSize: '13px' }}>+224 624 284 874</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <MapPin size={16} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#334155', fontSize: '13px' }}>Labé, Guinée</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Github size={16} style={{ color: brandColor, flexShrink: 0 }} />
            <span style={{ color: '#334155', fontSize: '13px' }}>github.com/sorail742</span>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '25px', width: '100%' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '5px', marginBottom: '12px' }}>Compétences</h2>

          <div style={{ marginBottom: '12px' }}>
            <h3 style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '13px', marginBottom: '5px' }}>Frontend & Mobile</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '12px', lineHeight: '1.4' }}>
              <li>React, Flutter</li>
              <li>Tailwind CSS, Vite</li>
              <li>HTML, CSS</li>
            </ul>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <h3 style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '13px', marginBottom: '5px' }}>Backend</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '12px', lineHeight: '1.4' }}>
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '13px', marginBottom: '5px' }}>Base de Données</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '12px', lineHeight: '1.4' }}>
              <li>PostgreSQL, MySQL</li>
              <li>MariaDB, MongoDB</li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div style={{ marginBottom: '25px', width: '100%' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '5px', marginBottom: '12px' }}>Langues</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '13px', lineHeight: '1.5' }}>
            <li style={{ marginBottom: '3px' }}><strong>Français :</strong> Courant</li>
            <li style={{ marginBottom: '3px' }}><strong>Malinké :</strong> Natif</li>
            <li><strong>Anglais :</strong> Technique</li>
          </ul>
        </div>

        {/* Interests */}
        <div style={{ width: '100%' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: brandColor, borderBottom: `2px solid ${brandColor}`, paddingBottom: '5px', marginBottom: '12px' }}>Centres d'intérêt</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '13px', lineHeight: '1.5' }}>
            <li style={{ marginBottom: '3px' }}>Veille Technologique</li>
            <li style={{ marginBottom: '3px' }}>Open Source</li>
            <li style={{ marginBottom: '3px' }}>Système embarqué</li>
            <li style={{ marginBottom: '3px' }}>Sermon islamique</li>
            <li>Sport</li>
          </ul>
        </div>
      </div>

      {/* Right Column (65%) */}
      <div style={{ width: '65%', backgroundColor: '#ffffff', padding: '40px 35px 30px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Name & Title */}
        <div style={{ marginBottom: '35px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-1px', color: brandColor, margin: '0 0 5px 0' }}>Sory Keita</h1>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '2px', color: '#64748b', textTransform: 'uppercase', margin: 0 }}>Développeur Full-Stack</h2>
        </div>

        {/* Profile */}
        <div style={{ marginBottom: '35px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: brandColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 10 }}>
              <User size={16} color="white" />
            </div>
            <div style={{ flex: 1, marginLeft: '12px', borderBottom: `2px solid ${brandColor}` }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px', color: brandColor, margin: '0 0 4px 0' }}>Profile</h2>
            </div>
          </div>

          <div style={{ position: 'absolute', left: '15px', top: '32px', bottom: '0px', width: '2px', backgroundColor: brandColor }}></div>

          <div style={{ paddingLeft: '48px', position: 'relative', paddingBottom: '10px' }}>
            <div style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', border: `2px solid ${brandColor}`, left: '12px', top: '6px' }}></div>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', textAlign: 'justify', margin: 0 }}>
              Développeur web passionné et autodidacte, j'ai renforcé mes compétences à travers divers projets concrets et des défis techniques variés. Curieux et motivé, j'évolue continuellement dans un environnement en constante évolution. En quête de nouveaux challenges, je souhaite intégrer une équipe dynamique à laquelle je pourrais apporter ma rigueur, ma créativité et ma soif d'apprendre.
            </p>
          </div>
        </div>

        {/* Experiences */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: brandColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 10 }}>
              <Briefcase size={16} color="white" />
            </div>
            <div style={{ flex: 1, marginLeft: '12px', borderBottom: `2px solid ${brandColor}` }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px', color: brandColor, margin: '0 0 4px 0' }}>Expériences Professionnelles</h2>
            </div>
          </div>

          {/* Timeline continuous vertical line */}
          <div style={{ position: 'absolute', left: '15px', top: '32px', bottom: '0', width: '2px', backgroundColor: brandColor }}></div>

          {/* Dev Full-Stack */}
          <div style={{ paddingLeft: '48px', position: 'relative', marginBottom: '15px' }}>
            <div style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', border: `2px solid ${brandColor}`, left: '12px', top: '6px' }}></div>
            <h3 style={{ fontWeight: 'bold', color: '#334155', fontSize: '15px', margin: '0 0 6px 0' }}>Développeur Full-Stack</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', color: '#475569', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              <li style={{ marginBottom: '3px' }}>Conception, développement et maintenance d'applications web avec React et Node.js.</li>
              <li style={{ marginBottom: '3px' }}>Automatisation de processus et création de workflows avec n8n.</li>
              <li>Gestion du déploiement, des mises à jour et de l'optimisation des performances.</li>
            </ul>
          </div>

          {/* Projects */}
          <div style={{ paddingLeft: '48px', position: 'relative', marginBottom: '15px' }}>
            <div style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', border: `2px solid ${brandColor}`, left: '12px', top: '6px' }}></div>
            <h3 style={{ fontWeight: 'bold', color: '#334155', fontSize: '15px', margin: '0 0 6px 0' }}>Projets (En cours)</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', color: '#475569', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              {projects.map((p, idx) => (
                <li key={idx} style={{ marginBottom: '2px' }}>
                  <strong style={{ color: '#334155' }}>{p.title}</strong> ({p.tech.join(', ')})
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications and Formations */}
          <div style={{ paddingLeft: '48px', position: 'relative', paddingBottom: '10px' }}>
            <div style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', border: `2px solid ${brandColor}`, left: '12px', top: '6px' }}></div>
            <h3 style={{ fontWeight: 'bold', color: '#334155', fontSize: '15px', margin: '0 0 6px 0' }}>Certifications et Formations</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', color: '#475569', fontSize: '11px', lineHeight: '1.4', margin: 0 }}>
              <li style={{ marginBottom: '2px' }}><strong>Licence Informatique</strong> — Univ. de Labé (2024 - 2027)</li>
              <li style={{ marginBottom: '2px' }}><strong>Formation Automatisation (n8n)</strong> — Certificat en cours (Mai 2026)</li>
              <li style={{ marginBottom: '2px' }}><strong>Formation Cybersécurité & Data</strong> — Attestation en cours (Avril 2026)</li>
              <li style={{ marginBottom: '2px' }}><strong>Formation ReactJS, NodeJS, MongoDB</strong> — Simplon, Univ. de Labé (Vacances 2025)</li>
              <li style={{ marginBottom: '2px' }}><strong>Attestation Bases Sécurité Info.</strong> — Orange (Juin 2025)</li>
              <li><strong>Certificat ReactJS</strong> — Club des jeunes programmeurs, Univ. Labé (Mai 2025)</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
});

export default CV;
