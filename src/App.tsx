import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import "./App.css";
import ProjectSection from './components/sections/ProjectsSection/ProjectsSection';
import ContactSection from './components/sections/ContactSection/ContactSection';
import Header from './components/layout/Header/Header';

const App: React.FC = () => {
  return (
    <>
    <Header />
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
