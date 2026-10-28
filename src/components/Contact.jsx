import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleTemplateClick = (templateSubject, templateMsg) => {
    setFormData(prev => ({
      ...prev,
      subject: templateSubject,
      message: templateMsg
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Also trigger mailto so user's client opens directly with prefilled parameters
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Kamaldeep,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`)}`;
    
    window.open(mailtoUrl, '_blank');

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Let's Discuss Workforce Analytics & Opportunities</h2>
          <p className="section-subtitle">
            Whether you are scouting for an HR Analyst, Business Intelligence specialist, or wish to explore data visualization projects, I'd love to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="contact-info-panel">
            <div className="contact-card-link" onClick={() => handleCopy(personalInfo.email, 'email')} style={{ cursor: 'pointer' }}>
              <div className="contact-card-left">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label">Direct Email Address</div>
                  <div className="contact-value">{personalInfo.email}</div>
                </div>
              </div>
              <button className="btn btn-sm btn-secondary" style={{ padding: '6px 12px' }}>
                {copiedEmail ? <Check size={16} color="var(--emerald-400)" /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-card-link" onClick={() => handleCopy(personalInfo.phone, 'phone')} style={{ cursor: 'pointer' }}>
              <div className="contact-card-left">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-label">Phone & WhatsApp</div>
                  <div className="contact-value">{personalInfo.phone}</div>
                </div>
              </div>
              <button className="btn btn-sm btn-secondary" style={{ padding: '6px 12px' }}>
                {copiedPhone ? <Check size={16} color="var(--emerald-400)" /> : <Copy size={16} />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-card-link">
              <div className="contact-card-left">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-label">Primary Location</div>
                  <div className="contact-value">{personalInfo.location}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--emerald-400)', marginTop: '2px' }}>
                    Open to Hybrid, On-site (Relocation) & Remote Roles
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="glass-card" style={{ padding: '24px', marginTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="status-dot"></span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--emerald-400)' }}>
                  CURRENT CANDIDACY STATUS
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                Completing MBA in Business Analytics (Akal University). Actively interviewing for full-time and internship HR Analyst, People Analytics, and Business Intelligence opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '6px' }}>Send a Direct Message</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Select a quick prompt or write your message below:
            </p>

            {/* Quick Template Buttons */}
            <div className="template-pills-row">
              <span 
                className="template-pill"
                onClick={() => handleTemplateClick(
                  'Interview Inquiry: HR Analyst Position', 
                  'Hi Kamaldeep, we reviewed your portfolio and would like to invite you for an introductory discussion regarding our HR Analytics opening.'
                )}
              >
                💼 Schedule Interview
              </span>
              <span 
                className="template-pill"
                onClick={() => handleTemplateClick(
                  'Power BI Dashboard Demo Request', 
                  'Hi Kamaldeep, I was impressed by your Power BI HR Analytics project. Could you share more details on your DAX data modeling architecture?'
                )}
              >
                📊 Request BI Demo
              </span>
              <span 
                className="template-pill"
                onClick={() => handleTemplateClick(
                  'General Inquiry / Mentorship', 
                  'Hi Kamaldeep, I would love to connect with you regarding data analytics and operations!'
                )}
              >
                💬 General Connect
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Work Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. sarah.jenkins@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="e.g. HR Analyst Role at TechCorp"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Write your note or opportunity details here..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                {formSubmitted ? (
                  <>
                    <Check size={18} />
                    <span>Message Ready & Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message to Kamaldeep</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
