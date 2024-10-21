import React from 'react';
import styles from './About.module.css';
import yourImage from '../Assets/profilepic.jpg';
import resumePDF from '../Files/rohan_resume_1.0_us.pdf';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  // Animation variants for the content
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.0 } }
  };

  // Adjusted button animation for slower movement
  const buttonVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 30, mass: 3 } 
    }
  };

  return (
    <div className={styles.aboutContainer}>
      <h5 className={styles.aboutHeading}>About</h5>
      <div className={styles.introImageWrapper}>
        <div className={styles.imageWrapper}>
          <img src={yourImage} alt="Your Name" className={styles.profileImage} />
        </div>
        <p className={styles.aboutIntroduction}>Let me introduce myself.</p>
      </div>
      <div className={styles.contentWrapper} ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={contentVariants}
          className={styles.dualParagraphContainer}>
          <div className={styles.leftParagraph}>
            <p>
            Hello! I am a recent Computer Science graduate from the University of Wollongong, my passion lies in leveraging technology to address complex problems. My academic and internship experiences have equipped me with strong technical skills and a keen problem-solving ability. Eager to apply my knowledge in a practical setting, I am committed to continuous learning and growth in the tech industry. I look forward to contributing to innovative projects and collaborating with like-minded professionals.
            </p>
            <p>
            As a graduate in computer science, I have built a solid base in various programming languages. I am skilled in Java, Python, and C++, and have utilized these languages to design and execute intricate algorithms and data structures.
            </p>
          </div>
          <div className={styles.rightParagraph}>
  <p>
    Building upon my programming capabilities, I have also engaged in developing both 2D and 3D games using Unreal Engine and Unity. My experience extends to working with APIs such as Flask with Socket.IO and Django. Furthermore, I possess significant expertise in databases and storage solutions, including MySQL, MongoDB, and Redis.
  </p>
  <p>
    In addition to my technical skills, I bring a unique blend of tech and soft skills, honed through my experience working in sales. This has equipped me with strong communication, collaboration, and leadership abilities, making me a valuable asset to any team. I am able to quickly learn new technologies and am always eager to take on new challenges.
  </p>
</div>

        </motion.div>
      </div>
      <div className={styles.buttonsContainer}>
        <motion.a
          href="mailto:rohangopalan3@gmail.com"
          className={styles.hireMeButton}
          variants={buttonVariants}
          initial="hidden"
          animate="visible">
          Hire Me
        </motion.a>
        <motion.a
          href={resumePDF}
          download="rohan_resume_1.3.pdf"
          className={styles.downloadCVButton}
          variants={buttonVariants}
          initial="hidden"
          animate="visible">
          Download CV
        </motion.a>
      </div>
    </div>
  );
}
export default About;