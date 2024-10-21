import React from 'react';
import styles from './Projects.module.css';
import sweetFighterImage from '../Assets/sweetfighter.png';
import TitansGateImage from '../Assets/titansgate.png';
import NexusCtrlImage from '../Assets/nexusctrl.png';
import BitcoinImage from '../Assets/Bitcoin_juice.png';
import BusSeat from '../Assets/WkxRM.png';
import TelegRAMlOGO from '../Assets/Logo.png'

import ml from '../Assets/ml.png';
const Projects = () => {
  const projects = [
    { img: sweetFighterImage, name: '2D Unity Game', link: 'https://github.com/ahmedasifx/Sweet_Fighter_FinalPrototype' },
    { img: TitansGateImage, name: '3D Unreal Game', link: 'https://github.com/ahmedasifx/Titens-gate' },
    { img: NexusCtrlImage, name: 'Cursor Movement using Gestures and Handsign', link: 'https://github.com/ro7an69/NexusCtrl' },
    { img: BitcoinImage, name: 'Predict Bitcoin Price with Python', link: 'https://github.com/ro7an69/Bitcoin-price-prediction' },
    { img: BusSeat, name: 'Bus Seating System using C++', link: 'https://github.com/ro7an69/Bus-seating-system' },
    { img: TelegRAMlOGO, name: 'Chatbot with telegram', link: 'https://github.com/ro7an69/Telegram_botproject' },
    { img: ml , name: 'Classfying  Breast Tumor with CNN', link: 'https://github.com/ro7an69/breast_ultrasound_tumor' },
  ];

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.headerContainer}>
        <h2>Projects</h2>
      </div>
      <div className={styles.projectsGrid}>
      {projects.map((project, index) => (
  <a href={project.link} key={index} className={styles.projectCard}>
    <img 
      src={project.img} 
      alt={project.name} 
      className={styles.projectImage}
      style={project.name === '3D Unreal Game' ? { height:'75%' } : 
             project.name === 'Predict Bitcoin Price with Python' ? {  } :
             project.name === 'Bus Seating System' ? { height: '2rem' } : {}}
    />
            <div className={styles.overlay}>
              <div className={styles.projectText}>{project.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
