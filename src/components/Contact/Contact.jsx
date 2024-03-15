import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const githubLogo= "assets/Github Logo.png";
  const linkedinLogo = "assets/Linkedin Logo.png";

  return (
    <div className={styles.contact} id="contact">
      <h1>Contact me:</h1>
      <div className={styles.container}>
        <div>
          <p>Email: andyrivasrod@gmail.com</p>
          <p>Phone number: +58 4241161321</p>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/andres-rivas-0a7220296?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSWhd52McQ%2BSiyIL5uU%2B7TA%3D%3D" className={styles.link} target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="Linkedin Logo" className={styles.logo} />
          </a>
          <a href="https://github.com/andresrivasrod" className={styles.link} target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="Github Logo" className={styles.logo} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
