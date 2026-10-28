import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  BarChart3, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  TrendingDown, 
  Database, 
  Layers, 
  MapPin, 
  Mail 
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero-section" id="hero">
      <div className="ambient-glow-top" />
      
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-content">
            <div className="hero-badge-status">
              <span className="status-dot"></span>
              <span>{personalInfo.availability}</span>
            </div>

            <h1 className="hero-title">
              Transforming People Data into <span className="hero-title-highlight">Strategic Business Impact</span>
            </h1>

            <p className="hero-lead">
              Hi, I'm <strong style={{ color: 'var(--text-white)' }}>{personalInfo.name}</strong>. An MBA Business Analytics candidate with a BCA in Data Analytics, specializing in HR Analytics, Power BI modeling, Python analysis, and operational workflow optimization.
            </p>

            <div className="hero-specialties">
              <span className="hero-specialty-chip">
                <BarChart3 size={15} color="var(--emerald-400)" />
                Power BI & DAX
              </span>
              <span className="hero-specialty-chip">
                <Layers size={15} color="var(--cyan-400)" />
                HR & Workforce Analytics
              </span>
              <span className="hero-specialty-chip">
                <Database size={15} color="var(--purple-500)" />
                SQL & Relational DBMS
              </span>
              <span className="hero-specialty-chip">
                <Sparkles size={15} color="var(--amber-400)" />
                Python (Pandas / EDA)
              </span>
            </div>

            <div className="hero-cta-group">
              <a href="#interactive-lab" className="btn btn-primary">
                <span>Launch Live HR Sandbox</span>
                <ArrowRight size={18} />
              </a>

              <a href="#projects" className="btn btn-secondary">
                <span>View Projects</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-accent">
                <FileText size={18} />
                <span>Resume PDF</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'var(--text-subtle)', fontSize: '0.88rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} color="var(--emerald-400)" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a 
                href={`mailto:${personalInfo.email}`} 
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}
              >
                <Mail size={16} color="var(--cyan-400)" />
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="hero-card-wrapper">
            <div className="hero-portrait-card">
              <div className="hero-image-frame">
                <img 
                  src={personalInfo.avatar} 
                  alt="Kamaldeep Kaur - HR Analytics Specialist"
                  loading="eager"
                />
              </div>

              {/* Floating KPI Chip 1 */}
              <div className="hero-chip-retention animate-float">
                <div className="chip-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--emerald-400)' }}>
                  <TrendingDown size={20} />
                </div>
                <div>
                  <div className="chip-title">Turnover Rate</div>
                  <div className="chip-value" style={{ color: 'var(--emerald-300)' }}>
                    8.9% <span style={{ fontSize: '0.75rem', fontWeight: '400', color: 'var(--text-muted)' }}>(-1.1% YoY)</span>
                  </div>
                </div>
              </div>

              {/* Floating KPI Chip 2 */}
              <div className="hero-chip-dax">
                <div className="chip-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--cyan-400)' }}>
                  <Database size={20} />
                </div>
                <div>
                  <div className="chip-title">Headcount Tracked</div>
                  <div className="chip-value">12,450+ Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Metrics Ribbon */}
        <div className="hero-metrics-ribbon">
          {personalInfo.metrics.map((metric, i) => (
            <div key={i} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-sublabel">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
