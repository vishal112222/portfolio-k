import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Live HR Lab', href: '#interactive-lab', isLive: true },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="nav-brand" aria-label="Kamaldeep Kaur Home">
            <div className="brand-icon-wrapper">
              <Sparkles size={20} />
            </div>
            <span>KAMALDEEP<span style={{ color: 'var(--emerald-400)' }}>.K</span></span>
          </a>

          <nav className="nav-links" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
                {item.isLive && <span className="nav-badge-live">LIVE</span>}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              onClick={onOpenResume}
              className="btn btn-sm btn-accent"
              aria-label="View Printable Resume"
            >
              <FileText size={16} />
              <span>Resume PDF</span>
            </button>
            <a
              href="#contact"
              className="btn btn-sm btn-primary"
              style={{ display: 'none' }}
            >
              Hire Me
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" onClick={() => setMobileMenuOpen(false)}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label} {item.isLive && '⚡'}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="btn btn-primary"
            style={{ marginTop: '20px' }}
          >
            <FileText size={18} />
            <span>View Full Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}
