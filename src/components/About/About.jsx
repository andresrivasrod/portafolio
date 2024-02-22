
import styles from './About.module.css'
import React from 'react'

function About() {
  const imagen =  "src/assets/unimet.jpeg";
  
  return (
    <div className={styles.about}>
      <div>
        <h1>I am Andres Rivas</h1>
        <div>
          <p>I am a Systems Engineer student at <b>Universidad Metropolitana</b> in Caracas, Venezuela. I'm intersted in web development and 
          have tried to learn the best languages and do projects to improve my skills. Here you can find some of my favorite projects I've worked on so far!</p>
        </div>
      </div>
      <img src={imagen} width={500}/>
    </div>
  )
}

export default About;