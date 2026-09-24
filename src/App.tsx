import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EmergencyCtaSection } from './components/EmergencyCtaSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 flex flex-col font-['Cairo'] antialiased selection:bg-[#F20D0D] selection:text-white">
      {/* Sticky Header with Top Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ServiceAreasSection />
        <WhyChooseUs />
        <EmergencyCtaSection />
        {/* <ReviewsSection /> */}
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Desktop Contact & Location Badge */}
      <FloatingContact />

      {/* Fixed Bottom Conversion Bar on Mobile */}
      <MobileBottomBar />
    </div>
  );
}

