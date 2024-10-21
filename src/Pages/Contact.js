import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <div className={styles.contactItems}>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span>Email me at:</span>
          <a href="mailto:rohangopalan3@gmail.com" className={styles.link}>rohangopalan3@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <span>Call me at:</span>
          <a href="tel:+971585897830" className={styles.link}>+971 58 589 7830</a>
          <a href="tel:+13157184141" className={styles.link}>+1 315 718 4141</a> {/* Added US number */}
        </div>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <span>Follow me on Instagram:</span>
          <a href="https://instagram.com/r.gopalan3" className={styles.link} target="_blank" rel="noopener noreferrer">@r.gopalan3</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
