import React from 'react';
import Header from '../components/layout/Header/Header';
import AboutSection from '../components/sections/AboutSection/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection/ProjectsSection';
import ContactSection from '../components/sections/ContactSection/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
