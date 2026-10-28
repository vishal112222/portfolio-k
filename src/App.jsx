import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InteractiveLab from './components/InteractiveLab';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCerts from './components/EducationCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <InteractiveLab />
        <Skills />
        <Projects />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>

      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
