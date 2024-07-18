import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import "./App.css";
import ProjectSection from './components/sections/ProjectsSection/ProjectsSection';
import ContactSection from './components/sections/ContactSection/ContactSection';

const App: React.FC = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/projects" element={< ProjectSection />} />
        <Route path="/contact" element={< ContactSection />} />

        {/* Add more routes as needed */}
    </Routes>
    </>
  );
};

export default App;
