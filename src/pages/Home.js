import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <TestimonialsSection />
      {/* <ExperienceSection /> */}
      <ContactBanner />
    </div>
  );
}
