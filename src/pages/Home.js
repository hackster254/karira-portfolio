import React, { useState, useEffect, useRef } from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';

import Avatar from '../components/Avatar';

import SupportWindow from '../components/SupportEngine/SupportWindow/index';

export default function Home() {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <TestimonialsSection />
      {/* <ExperienceSection /> */}
      <ContactBanner />
      <div ref={ref}>
        <SupportWindow visible={visible} />
        <Avatar
          onClick={() => setVisible(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
          }}
        />
      </div>
    </div>
  );
}
