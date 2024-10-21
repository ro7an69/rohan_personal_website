import React from 'react';
import styles from "./Activities.module.css";

const Activities = () => {
  return (
    <div className={styles.activitiesContainer}>
      <h1 className={styles.mainHeading}>My Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.category}>
          <h2 className={styles.categoryHeading}>Web Development</h2>
          <ul className={styles.skillsList}>
            <li>React JS</li>
            <li>React Native</li>
            <li> Typescript</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h2 className={styles.categoryHeading}>Databases</h2>
          <ul className={styles.skillsList}>
            <li>Oracle SQL</li>
            <li>MongoDB</li>
            <li>R</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h2 className={styles.categoryHeading}>Programming Languages</h2>
          <ul className={styles.skillsList}>
            <li>C++</li>
            <li>Python (Machine Learning Algorithms)</li>
            <li>Java</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h2 className={styles.categoryHeading}>Game Engines</h2>
          <ul className={styles.skillsList}>
            <li>Unity</li>
            <li>Unreal</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h2 className={styles.categoryHeading}>Design Tools</h2>
          <ul className={styles.skillsList}>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere Pro</li>
            <li>Figma</li>
            
          </ul>
        </div>
        <div className={styles.category}>
          <h2 className={styles.categoryHeading}>Microsoft Office</h2>
          <ul className={styles.skillsList}>
            <li>Microsoft Word</li>
            <li>Excel</li>
            <li>PowerPoint</li>
            <li>Sharepoint</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activities;
