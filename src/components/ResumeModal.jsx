import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `
KAMALDEEP KAUR
MBA – Business Analytics | Aspiring HR Analyst / HR Analytics
Bathinda, India | 6284315356 | kamalwander07@gmail.com

PROFESSIONAL SUMMARY
MBA Business Analytics student with a BCA in Data Analytics and practical experience in operations, process coordination, and data handling. Skilled in Excel, Power BI, Python, and data visualization, with an interest in applying analytics to HR and business decision-making.

EDUCATION
MBA – Business Analytics | Akal University | 08/2025 – Present
BCA (Hons.) – Data Analytics | Akal University | 08/2021 – 07/2024

TECHNICAL & PROFESSIONAL SKILLS
Python (Data Analysis) • Microsoft Excel • Google Sheets • Power BI • Tableau • SQL/DBMS • Data Visualization • Data Handling • Communication & Presentation • Teamwork & Time Management

EXPERIENCE
Operations Intern - Eagle Trans Shipping & Logistics India Pvt. Ltd. (June 2026 – July 2026) Pune, India
• Supported day-to-day shipping and logistics operations for the Europe team.
• Coordinated with customers, shipping lines, and internal teams.
• Worked on shipment documentation, bookings, VGM, Shipping Instructions, and Bill of Lading processes.
• Analyzed operational workflows and identified process improvement opportunities.

Transport Assistant - Kätebaa Rural Services and Foundation (01/2023 – 11/2024)
• Assisted in managing transportation schedules and documentation.
• Managed and coordinated daily transportation schedules to ensure timely operations.
• Coordinated with internal teams to support smooth logistics execution.

Admission Cell Assistant - Akal University (01/2025 – 07/2025)
• Communicated with prospective students through calls, emails, and in-person interactions.
• Helped coordinate admission-related activities and maintained student admission data.
• Maintained and updated student records to support admission operations.

PROJECTS
• E-Commerce Shopping Website (DBMS): Designed a database-driven shopping website concept supporting product browsing and purchasing workflows.
• Python E-Commerce Sales Analysis: Analyzed sales data using Python to identify monthly sales/profit trends and category-level performance.
• Power BI Dashboard: Created an interactive dashboard using data relationships and DAX to present business insights.

CERTIFICATIONS
• AWS Academy – Introduction to Cloud Semester 1
• AWS Academy – Introduction to Cloud Semester 2
• Introduction to Data Analytics – Meta
• Quantitative Research Job Simulation – J.P. Morgan (Forage)
• Deloitte Australia – Data Analytics Job Simulation (Forage)

LEADERSHIP & INTERESTS
Akal University, Talwandi Sabo — Member, Anti-Ragging Committee (08/2025 – Present)
Interests: Reading • Photography • Continuous Learning
    `.trim();

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content-card resume-modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px' }}
      >
        {/* Sticky Header with Action Buttons */}
        <div className="modal-header-sticky">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="var(--emerald-400)" />
            <h3 style={{ fontSize: '1.15rem' }}>Curriculum Vitae — Kamaldeep Kaur</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={handleCopyText} 
              className="btn btn-sm btn-secondary"
              title="Copy plain text format"
            >
              {copied ? <Check size={16} color="var(--emerald-400)" /> : <Copy size={16} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button 
              onClick={handlePrint} 
              className="btn btn-sm btn-primary"
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>

            <button 
              onClick={onClose} 
              className="btn btn-sm btn-secondary" 
              style={{ padding: '6px 10px' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable White Sheet Document */}
        <div className="modal-body">
          <div className="resume-sheet">
            <header className="resume-header-block">
              <h1 className="resume-name">KAMALDEEP KAUR</h1>
              <div className="resume-target">
                MBA – Business Analytics | Aspiring HR Analyst / HR Analytics
              </div>
              <div className="resume-contacts-row">
                <span>Bathinda, India</span>
                <span>•</span>
                <span>+91 6284315356</span>
                <span>•</span>
                <span>kamalwander07@gmail.com</span>
              </div>
            </header>

            {/* Professional Summary */}
            <section>
              <h2 className="resume-sec-title">Professional Summary</h2>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                MBA Business Analytics student with a BCA in Data Analytics and practical experience in operations, 
                process coordination, and data handling. Skilled in Excel, Power BI, Python, and data visualization, with an 
                interest in applying analytics to HR and business decision-making.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="resume-sec-title">Education</h2>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <span>MBA – Business Analytics</span>
                  <span>08/2025 – Present</span>
                </div>
                <div className="resume-entry-sub">Akal University</div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <span>BCA (Hons.) – Data Analytics</span>
                  <span>08/2021 – 07/2024</span>
                </div>
                <div className="resume-entry-sub">Akal University</div>
              </div>
            </section>

            {/* Technical & Professional Skills */}
            <section>
              <h2 className="resume-sec-title">Technical & Professional Skills</h2>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                <strong>Technical:</strong> Python (Data Analysis) • Microsoft Excel • Google Sheets • Power BI • Tableau • SQL/DBMS • Data Visualization • Data Handling<br />
                <strong>Professional:</strong> Communication & Presentation • Teamwork & Time Management • Process Coordination
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="resume-sec-title">Experience</h2>
              
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <span>Operations Intern — Eagle Trans Shipping & Logistics India Pvt. Ltd.</span>
                  <span>June 2026 – July 2026</span>
                </div>
                <div className="resume-entry-sub">Pune, India</div>
                <ul>
                  <li>Supported day-to-day shipping and logistics operations for the Europe team.</li>
                  <li>Coordinated with customers, shipping lines, and internal teams.</li>
                  <li>Worked on shipment documentation, bookings, VGM, Shipping Instructions, and Bill of Lading processes.</li>
                  <li>Analyzed operational workflows and identified process improvement opportunities.</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <span>Transport Assistant — Kätebaa Rural Services and Foundation</span>
                  <span>01/2023 – 11/2024</span>
                </div>
                <div className="resume-entry-sub">Punjab, India</div>
                <ul>
                  <li>Assisted in managing transportation schedules and documentation.</li>
                  <li>Managed and coordinated daily transportation schedules to ensure timely operations.</li>
                  <li>Coordinated with internal teams to support smooth logistics execution.</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <span>Admission Cell Assistant — Akal University</span>
                  <span>01/2025 – 07/2025</span>
                </div>
                <div className="resume-entry-sub">Talwandi Sabo, Bathinda</div>
                <ul>
                  <li>Communicated with prospective students through calls, emails, and in-person interactions.</li>
                  <li>Helped coordinate admission-related activities and maintained student admission data.</li>
                  <li>Maintained and updated student records to support admission operations.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="resume-sec-title">Projects</h2>
              <div className="resume-entry">
                <strong>E-Commerce Shopping Website (DBMS):</strong> Designed a database-driven shopping website concept supporting product browsing and purchasing workflows.
              </div>
              <div className="resume-entry">
                <strong>Python E-Commerce Sales Analysis:</strong> Analyzed sales data using Python to identify monthly sales/profit trends and category-level performance.
              </div>
              <div className="resume-entry">
                <strong>Power BI Dashboard:</strong> Created an interactive dashboard using data relationships and DAX to present business insights.
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="resume-sec-title">Certifications</h2>
              <ul>
                <li>AWS Academy – Introduction to Cloud Semester 1</li>
                <li>AWS Academy – Introduction to Cloud Semester 2</li>
                <li>Introduction to Data Analytics – Meta</li>
                <li>Quantitative Research Job Simulation – J.P. Morgan (Forage)</li>
                <li>Deloitte Australia – Data Analytics Job Simulation (Forage)</li>
              </ul>
            </section>

            {/* Leadership & Interests */}
            <section>
              <h2 className="resume-sec-title">Leadership & Interests</h2>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '8px' }}>
                <strong>Akal University, Talwandi Sabo</strong> — Member, Anti-Ragging Committee (08/2025 – Present)
              </p>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                <strong>Interests:</strong> Reading • Photography • Continuous Learning
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
