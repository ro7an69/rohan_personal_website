// Resume.js

import React from 'react';
import styles from './Resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
const Resume = () => {
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <div className={styles.ResumeContainer}>
      <div className={styles.ResumeHeader}>
        <h1>Resume</h1>
        <p>A quick glimpse about my education and work experience.</p>
      </div>
      <div className={styles.sectionHeader}>
        <h2>Work Experience</h2>
      </div>
      <div className={`${styles.row} ${styles['resume-timeline']}`}>
        
        <div className={styles.timelineItem}>
  <div className={styles.timelineIcon}>
    <FontAwesomeIcon icon={faBriefcase} size="lg" />
  </div>
  
  <div className={styles.timelineContent}>
  <h3 style={{ color: '#734b26' }}>Business Development Executive <span style={{ color: '#e9ae77'}}>/ Raven Consulting, DUBAI, U.A.E </span></h3>
    <p style={{ color: '#e9ae77' }}>APRIL 2024 - JULY 2024</p>
    <ul style={{ paddingLeft: 0 }}>
    <li className={styles.bullet}>Conduct Market Research to identify potential new clients</li>
      <li className={styles.bullet}>Closed deal with Samsung's major distributor in Dubai</li>
      <li className={styles.bullet}>Cold calling, making the starter pitch, understanding client needs and setting up meetings </li>
      <li className={styles.bullet}>Collate feedback from clients.</li>
      <li className={styles.bullet}>Liase with the team to ensure the customers needs are met.</li>
    </ul>
  </div>
</div>
<div className={styles.timelineItem}>
  <div className={styles.timelineContent}>
  <h3 style={{ color: '#734b26' }}>Data Operations Intern <span style={{ color: '#e9ae77'}}>/ Repeat App, DUBAI, U.A.E </span></h3>
    <p style={{ color: '#e9ae77' }}>JUNE 2022 - SEPTEMBER 2022</p>
    <ul style={{ paddingLeft: 0 }}>
      <li className={styles.bullet}>Set up a database using Oracle SQL, ensuring a scalable and performant architecture for accessing, defining, and maintaining data</li>
      <li className={styles.bullet}>Designed and created a database using NoSQL for a basic inventory system that provided flexibility, scalability, and high performance across a wide range of platforms</li>
      <li className={styles.bullet}>Extracted and entered data from different source documents, ensuring on-time delivery in a fast and secure way</li>
      <li className={styles.bullet}>Successfully collaborated with cross-functional teams to improve existing processes and meet high-quality standards</li>
    </ul>
  </div>
</div>
{/* Repeat for other positions... */}
<div className={styles.timelineItem}>
  <div className={styles.timelineContent}>
  <h3 style={{ color:  '#734b26' }}>Graphic Designer & Web Development Intern <span style={{ color: '#e9ae77'}}>/ Antreas Technologies</span></h3>
    <p style={{ color: '#e9ae77' }}>MARCH 2021 - JUNE 2021</p>
    <ul style={{ paddingLeft: 0 }}>
      <li className={styles.bullet}>Designed and developed flyers, brochures, and videos using Adobe Photoshop, Adobe Illustrator, and Adobe</li>
      <li className={styles.bullet}>Collaborated with existing clients on creating a functional, scalable, and responsive webpage, ensuring that all requirements were met and the satisfaction level was exceeded</li>
      <li className={styles.bullet}>Developed UI wireframes, mockups, and prototypes using Figma and Adobe XD that clearly illustrated the design and the functions</li>
      <li className={styles.bullet}>Proposed technical and graphical solutions that were quickly adopted and put into practice</li>
    </ul>
  </div>
</div>
      </div>
      <div style={{ marginTop:'80px' }}className={styles.sectionHeader}>
        <h2>Education</h2>
      </div>
      <div className={`${styles.row} ${styles['resume-timeline']}`}>
      <div className={styles.timelineItem}>
  <div className={styles.timelineIcon}>
  <FontAwesomeIcon icon={faGraduationCap} size="lg" />
  </div>
  <div className={styles.timelineContent}>
  <h3 style={{ color: '#734b26' }}>Master's in Applied Data Science <span style={{ color: '#e9ae77'}}>/ Syracuse University, New York, USA </span></h3>
    <p style={{ color: '#e9ae77' }}>September 2024 - Present</p>
   
  </div>
</div>
        <div className={styles.timelineItem}>
 
  <div className={styles.timelineContent}>
  <h3 style={{ color: '#734b26' }}>Bachelor's in Computer Science <span style={{ color: '#e9ae77'}}>/ University of Wollongong, Dubai </span></h3>
    <p style={{ color: '#e9ae77' }}>September 2020 - March 2024</p>
    <ul style={{ paddingLeft: 0 }}>
    <li className={styles.bullet}>
  <span style={{ color: '#11100e',fontWeight:'bold' }}>DETAILS:</span> Specialism in Game Development, Big Data, and Cybersecurity.
</li>
<li className={styles.bullet}>
  <span style={{ color: '#11100e',fontWeight:'bold' }}>ACHIEVEMENTS: </span> WISP Augmented Reality with Drone (1st prize in a highly competitive Project Management competition), Excelled in creating the best 2D game project during the Game Development course with Unity.
</li>

    </ul>
  </div>
</div>
<div className={styles.timelineItem}>
  <div className={styles.timelineContent}>
  <h3 style={{ color: '#734b26' }}>High School Degree <span style={{ color: '#e9ae77'}}>/ GEMS New Millenium,Al Khail, Dubai</span></h3>
    <p style={{ color: '#e9ae77'}}>MARCH 2018 - January 2020</p>
    <ul style={{ paddingLeft: 0 }}>
    <li className={styles.bullet}>
  <span style={{ color: '#11100e',fontWeight:'bold' }}>DETAILS:</span> Academic Foundation in Science: Specialized in Physics, Chemistry, Biology, and Computer Science.
</li>
<li className={styles.bullet}>
  <span style={{ color: '#11100e',fontWeight:'bold' }}>ACHIEVEMENTS: </span> WISP Augmented Reality with Drone (1st prize in a highly competitive Project Management competition), Excelled in creating the best 2D game project during the Game Development course with Unity.
</li>

    </ul>
  </div>
</div>
</div>

    </div>
  );
};

export default Resume;
