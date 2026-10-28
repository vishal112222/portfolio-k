import React from 'react';
import { educationData, certificationsData, leadershipData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Heart, 
  Cloud, 
  TrendingUp, 
  Briefcase, 
  BookOpen, 
  Camera, 
  Sparkles 
} from 'lucide-react';

const certIconMap = {
  Cloud: Cloud,
  CloudCheck: Cloud,
  Meta: Sparkles,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase
};

export default function EducationCerts() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Rigor & Credentials</span>
          </div>
          <h2 className="section-title">Education & Industry Certifications</h2>
          <p className="section-subtitle">
            Formal degrees in Business Analytics & Data Science paired with verified industry simulations from global institutions.
          </p>
        </div>

        <div className="edu-certs-grid">
          {/* Left Column: Academic Degrees */}
          <div>
            <h3 className="edu-column-title">
              <GraduationCap size={24} color="var(--cyan-400)" />
              <span>Academic Degrees</span>
            </h3>

            <div className="edu-cards-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="edu-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="badge badge-emerald">{edu.period}</span>
                  </div>
                  <div className="edu-inst">{edu.institution}</div>
                  <p className="edu-desc">{edu.description}</p>

                  <div className="focus-pills">
                    {edu.focusAreas.map((f, i) => (
                      <span key={i} className="tool-chip">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Job Simulations */}
          <div>
            <h3 className="edu-column-title">
              <Award size={24} color="var(--emerald-400)" />
              <span>Verified Certifications & Simulations</span>
            </h3>

            <div className="certs-cards-list">
              {certificationsData.map((cert, idx) => {
                const IconComponent = certIconMap[cert.icon] || Award;
                return (
                  <div key={idx} className="cert-card">
                    <div className="cert-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                        <h4 className="cert-title">{cert.title}</h4>
                        <span className="badge badge-cyan">{cert.badge}</span>
                      </div>
                      <div className="cert-issuer">{cert.issuer}</div>
                      <p className="cert-highlight">{cert.highlight}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Leadership & Personal Dimension */}
        <div className="leadership-strip">
          <div className="leadership-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <ShieldCheck size={24} color="var(--emerald-400)" />
              <span className="badge badge-emerald">Campus Governance</span>
            </div>
            <h4>{leadershipData.committee.title}</h4>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
              {leadershipData.committee.organization} • {leadershipData.committee.period}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {leadershipData.committee.description}
            </p>
          </div>

          <div className="leadership-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Heart size={24} color="var(--rose-500)" />
              <span className="badge badge-purple">Personal Passions</span>
            </div>
            <h4>Continuous Curiosity & Perspectives</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Creative outlets that enhance systematic thinking, observational focus, and aesthetic clarity.
            </p>
            <div className="interests-chips">
              {leadershipData.interests.map((interest, i) => (
                <span key={i} className="hero-specialty-chip" title={interest.description}>
                  {interest.name === 'Reading' && <BookOpen size={14} color="var(--cyan-400)" />}
                  {interest.name === 'Photography' && <Camera size={14} color="var(--emerald-400)" />}
                  {interest.name === 'Continuous Learning' && <Sparkles size={14} color="var(--amber-400)" />}
                  <span>{interest.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
