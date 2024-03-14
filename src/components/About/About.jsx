import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';
import styles from './About.module.css';

function About() {

  const cv = "assets/English CV Andres Rivas.pdf";
  const photo = "assets/photo Andres.png"

  return (
    <div className={styles.about} id="about">
      <div>
        <h1 className={styles.header}>I am Andres Rivas</h1>
        <div>
          <p className={styles.description}>I am a Systems Engineer student at <b>Universidad Metropolitana </b> 
          in Caracas, Venezuela. I'm interested in web development and learned to code in HTML, CSS, JavaScript and React to
          do projects to improve my skills. Here you can find some of my favorite projects I've worked on so far!</p>
        </div>
        <div className={styles.cvContainer}>
          <a href={cv} download className={styles.cv}>{' '} Download my CV</a>
        </div>
      </div>
      <img src={photo} width={300} alt="Andres' Photo" />
    </div>
  );
}

export default About;
