import React, { useState } from 'react';
import { data } from '../../assets/data';
import styles from './Projects.module.css'; 

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.carrousel}>
        <h2>{data[currentSlide].name}</h2>
        <div className={styles.slide}>
          <button className={styles.prev} onClick={prevSlide}>{`<`}</button>
          <a href={data[currentSlide].link} target="_blank" rel="noopener noreferrer">
            <img width={600} src={data[currentSlide].imgUrl} alt={`Project ${data[currentSlide].id}`} />
          </a>
          <button className={styles.next} onClick={nextSlide}><span>{`>`}</span></button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
