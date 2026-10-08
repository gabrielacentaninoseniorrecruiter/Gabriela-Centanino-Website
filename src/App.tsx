import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutPreview } from './components/AboutPreview';
import { ServicesSection } from './components/ServicesSection';
import { ConsultingApproach } from './components/ConsultingApproach';
import { EngagementPlanner } from './components/EngagementPlanner';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { PrivacyModal } from './components/PrivacyModal';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Talent Acquisition');

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'about-modal') {
      setAboutModalOpen(true);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scrollspy observer for active section indicator
  useEffect(() => {
    const sectionIds = ['home', 'trust', 'about', 'services', 'approach', 'experience', 'testimonials', 'insights', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (id === 'trust') setActiveSection('home');
            else if (id === 'approach') setActiveSection('services');
            else if (id === 'testimonials') setActiveSection('experience');
            else setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceForContact = (serviceTitle: string) => {
    let mapped = 'Talent Acquisition';
    if (serviceTitle.includes('Recruitment') || serviceTitle.includes('Full-Cycle') || serviceTitle.includes('Search')) mapped = 'Recruiting';
    else if (serviceTitle.includes('People Operations') || serviceTitle.includes('Infrastructure')) mapped = 'People Operations';
    else if (serviceTitle.includes('Culture') || serviceTitle.includes('Engagement') || serviceTitle.includes('Retention')) mapped = 'Culture & Engagement';
    else if (serviceTitle.includes('Brand') || serviceTitle.includes('Candidate Experience')) mapped = 'Employer Branding';
    else if (serviceTitle.includes('Advisory') || serviceTitle.includes('Blueprint')) mapped = 'Other';

    setSelectedServiceForContact(mapped);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#0F2A47] font-sans flex flex-col selection:bg-[#D6B465]/30 selection:text-[#0F2A47]">
      {/* Fixed Luxury Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Credibility / Trust Strip */}
        <TrustStrip />

        {/* About Preview Section */}
        <AboutPreview
          onNavigate={handleNavigate}
          onOpenAboutModal={() => setAboutModalOpen(true)}
        />

        {/* Core Services Section */}
        <ServicesSection onSelectServiceForContact={handleSelectServiceForContact} />

        {/* Dark Navy Consulting Methodology / Approach */}
        <ConsultingApproach />

        {/* Interactive Strategic Engagement Blueprint Planner */}
        <EngagementPlanner onSelectPlan={handleSelectServiceForContact} />

        {/* Career Experience Timeline, Education & Volunteer Section */}
        <ExperienceTimeline />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Thought Leadership / Insights Section */}
        <InsightsSection />

        {/* Contact Section */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Deep Navy Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
      />

      {/* Deep-dive & Legal Modals */}
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onNavigateToContact={() => handleNavigate('contact')}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}
