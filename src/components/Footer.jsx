import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand" style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div className="brand-icon-wrapper" style={{ width: '36px', height: '36px' }}>
                <Sparkles size={18} />
              </div>
              <h4>KAMALDEEP KAUR</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              MBA in Business Analytics candidate with a BCA in Data Analytics. Specializing in HR Analytics, Power BI interactive modeling, Python, and organizational workflow efficiency.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Quick Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#about" className="nav-link">About Profile</a></li>
              <li><a href="#interactive-lab" className="nav-link">Live HR Sandbox ⚡</a></li>
              <li><a href="#skills" className="nav-link">Technical Matrix</a></li>
              <li><a href="#projects" className="nav-link">Featured Case Studies</a></li>
              <li><a href="#experience" className="nav-link">Work Experience</a></li>
              <li><a href="#education" className="nav-link">Education & Certs</a></li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Candidate Direct
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--cyan-400)" />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--emerald-400)" />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--amber-400)" />
                <span>{personalInfo.location}</span>
              </li>
              <li style={{ marginTop: '8px' }}>
                <button onClick={onOpenResume} className="btn btn-sm btn-accent" style={{ width: '100%' }}>
                  View Full Resume PDF
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Kamaldeep Kaur. Designed with precision for Business Analytics & HR Intelligence.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              Built with React • Vanilla CSS • Vite
            </span>
            <button 
              onClick={scrollToTop} 
              className="btn btn-sm btn-secondary"
              style={{ padding: '8px 12px', borderRadius: 'var(--radius-full)' }}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
