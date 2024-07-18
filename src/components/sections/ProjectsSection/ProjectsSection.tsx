import React from 'react';
import { motion } from 'framer-motion';

const timelineVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  },
  exit: {
    x: '100vw',
    transition: { ease: 'easeInOut' }
  }
};

const ProjectSection: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <motion.div
        variants={timelineVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Replace this with your actual project timeline */}
        <p>Project 1: Started on Jan 2022, Completed on Feb 2022</p>
        <p>Project 2: Started on Mar 2022, Ongoing...</p>
      </motion.div>
    </section>
  );
};

export default ProjectSection;