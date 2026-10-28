import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Cpu, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData.skills 
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical & Professional Matrix</span>
          </div>
          <h2 className="section-title">Analytical Arsenal & Core Competencies</h2>
          <p className="section-subtitle">
            A comprehensive blend of quantitative data science, modern business intelligence software, and enterprise operational leadership.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="badge badge-emerald" style={{ marginTop: '4px' }}>
                    {skill.badge}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="skill-level-value">{skill.level}%</span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{skill.proficiency}</div>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="skill-bar-track">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Practical Application */}
              <p className="skill-highlight">
                <strong style={{ color: 'var(--text-white)' }}>Application:</strong> {skill.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
