import React from 'react';
import styles from "./Home.module.css";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  // Define quicker hover animation for social links
  const hoverAnimation = {
    scale: 1.1,
    y: -10, // Slide up by 10 pixels on hover
    transition: {
      type: 'spring',
      stiffness: 900, // Increase stiffness for quicker response
      damping: 20, // Control bounciness
      duration: 0.05, // Add a duration to make it faster
    },
  };

  return (
    <div className={styles.homeSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.head}>
        <h1>Hi there, thanks for visiting my website! I'd love to <a href="https://www.linkedin.com/in/rohan-gopalan-4bb7661b1" style={{ color: '#041E42' }} target="_blank" rel="noopener noreferrer">connect</a> with you on my LinkedIn:</h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.name}>
        <h1>Rohan Gopalan</h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.roles}>
        <h1>Game Developer | Full Stack Developer | Data Analyst</h1>
      </motion.div>
      
      <div className={styles.socialLinks}>
        <motion.a
          href="https://github.com/ro7an69"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverAnimation}
          style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faGithub} size="4x" style={{ color: 'white' }} />
        </motion.a>

        <motion.a
          href="mailto:rohangopalan3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverAnimation}>
          <FontAwesomeIcon icon={faGoogle} size="4x" style={{ color: 'white' }} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/rohan-gopalan-4bb7661b1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverAnimation}>
          <FontAwesomeIcon icon={faLinkedin} size="4x" style={{ color: 'white' }} />
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
