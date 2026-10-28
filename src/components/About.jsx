import React from 'react';
import { executiveSummary } from '../data/portfolioData';
import { Users, BarChart3, Binary, Workflow, Quote, Sparkles } from 'lucide-react';

const iconMap = {
  Users: Users,
  BarChart3: BarChart3,
  Binary: Binary,
  Workflow: Workflow
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Executive Profile</span>
          </div>
          <h2 className="section-title">The Nexus of People, Data & Business Impact</h2>
          <p className="section-subtitle">
            Combining rigorous quantitative analytics with an empathetic understanding of workforce dynamics to empower executives with clear, actionable insights.
          </p>
        </div>

        {/* 4 Strategic Pillars */}
        <div className="pillars-grid">
          {executiveSummary.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || BarChart3;
            return (
              <div key={index} className="pillar-card">
                <div className="pillar-icon-box">
                  <IconComponent size={26} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quote / Analytical Philosophy Callout */}
        <div className="about-quote-box">
          <div className="quote-icon">
            <Quote size={42} />
          </div>
          <div>
            <p className="quote-text">
              "Data without human context is just numbers; workforce intelligence without data is guesswork. My mission is to translate operational data into sustainable talent retention and elevated business performance."
            </p>
            <div className="quote-author">
              Kamaldeep Kaur — MBA in Business Analytics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
