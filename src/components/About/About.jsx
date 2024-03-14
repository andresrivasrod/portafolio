import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';
import styles from './About.module.css';

function About() {
  const [imagen, setImagen] = useState('');
  const [cv, setCv] = useState('');
  const photo = "assets/photo Andres.svg"

  useEffect(() => {
    const storageRefImagen = ref(storage, 'photo Andres.png');
    getDownloadURL(storageRefImagen)
      .then((url) => {
        setImagen(url);
      })
      .catch((error) => {
        console.error('Error al obtener la URL de la imagen', error);
      });

    const storageRefCv = ref(storage, 'English CV Andres Rivas.pdf');
    getDownloadURL(storageRefCv)
      .then((url) => {
        setCv(url);
      })
      .catch((error) => {
        console.error('Error al obtener la URL del CV', error);
      });
  }, []);

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
