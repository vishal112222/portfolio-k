import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Code2, Check, ArrowRight, X, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">Data In Action: Analytics & Engineering Projects</h2>
          <p className="section-subtitle">
            Real-world applications spanning workforce business intelligence, predictive Python sales analytics, and relational database architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-thumb-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
                <div className="project-tag-overlay">
                  {project.category}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-impact-box">
                  <div className="impact-label">Measured Strategic Impact</div>
                  <div className="impact-text">{project.impact}</div>
                </div>

                <div className="project-tools">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="tool-chip">
                      {tool}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-sm btn-secondary"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>Deep Dive Case Study</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Case Study Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div 
              className="modal-content-card" 
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '780px' }}
            >
              <div className="modal-header-sticky">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={20} color="var(--emerald-400)" />
                  <h3 style={{ fontSize: '1.25rem' }}>{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-sm btn-secondary"
                  style={{ padding: '6px 12px' }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="modal-body">
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '24px' }}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {selectedProject.tools.map((tool, i) => (
                    <span key={i} className="badge badge-cyan">{tool}</span>
                  ))}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-white)' }}>
                    Executive Overview
                  </h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                    {selectedProject.summary}
                  </p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-white)' }}>
                    Key Architectural & Analytical Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', color: 'var(--text-muted)' }}>
                        <Check size={18} color="var(--emerald-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-impact-box">
                  <div className="impact-label">Quantified Value Delivered</div>
                  <div className="impact-text">{selectedProject.impact}</div>
                </div>

                {selectedProject.liveSimulationAvailable && (
                  <div style={{ marginTop: '24px', textAlign: 'center' }}>
                    <a 
                      href="#interactive-lab" 
                      onClick={() => setSelectedProject(null)}
                      className="btn btn-primary"
                    >
                      <span>Try Interactive Simulation in Sandbox</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
