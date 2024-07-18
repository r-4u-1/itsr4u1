import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <motion.div
                    className={`menu ${isOpen ? 'open' : ''}`}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                >
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </motion.div>
            </nav>
        </header>
    );
};

export default Header;