
import styles from './About.module.css'
import React from 'react'

function About() {
  const imagen =  "src/assets/unimet.jpeg";
  const cv = 'src/assets/English CV Andres Rivas.pdf';
  
  return (
    <div className={styles.about} id="about">
      <div>
        <h1 className={styles.header}>I am Andres Rivas</h1>
        <div>
          <p className={styles.description}>I am a Systems Engineer student at <b>Universidad Metropolitana </b> 
          in Caracas, Venezuela. I'm intersted in web development and have tried to learn the best languages and 
          do projects to improve my skills. Here you can find some of my favorite projects I've worked on so far!</p>
        </div>
        <div className={styles.cvContainer}>
          <a href={cv} download className={styles.cv}>{' '} Download my CV</a>
        </div>
      </div>
      <img src={imagen} width={600}/>
    </div>
  )
}

export default About;