import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">Operational Excellence & Practical Experience</h2>
          <p className="section-subtitle">
            Ground-level experience in logistics management, international shipping workflows, database validation, and cross-functional team coordination.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />

          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company">{item.company}</div>
                  </div>
                  <span className="badge badge-cyan">{item.badge}</span>
                </div>

                <div className="timeline-meta">
                  <span className="timeline-meta-item">
                    <Calendar size={15} color="var(--emerald-400)" />
                    {item.period}
                  </span>
                  <span className="timeline-meta-item">
                    <MapPin size={15} color="var(--cyan-400)" />
                    {item.location}
                  </span>
                  {item.status && (
                    <span className="timeline-meta-item" style={{ color: 'var(--amber-400)' }}>
                      • {item.status}
                    </span>
                  )}
                </div>

                <ul className="timeline-bullets">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="timeline-bullet">
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="timeline-skills-list">
                  {item.skillsLearned.map((skill, sIdx) => (
                    <span key={sIdx} className="tool-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
