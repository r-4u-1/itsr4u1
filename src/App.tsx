import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import "./App.css";
import ProjectSection from './components/sections/ProjectsSection/ProjectsSection';
import ContactSection from './components/sections/ContactSection/ContactSection';
import Header from './components/layout/Header/Header';
import {NavigationWrapper} from './components/misc/NavigationWrapper/NavigationWrapper';

const App: React.FC = () => {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
    {isLargeScreen ? <Header /> : <NavigationWrapper />}
    <Routes>
        
        <Route path="/about" element={< AboutPage />} />
        <Route path="/projects" element={< ProjectSection />} />
        <Route path="/contact" element={< ContactSection />} />

        {/* Add more routes as needed */}
    </Routes>
    </>
  );
};

export default App;
