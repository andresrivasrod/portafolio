import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    }
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li><h1 className={styles.logo}>Andres Rivas</h1></li>
      </ul>
      <ul className={styles.menuList}>
        <li><Link href="#about" className={styles.link} onClick={() => scrollToSection('about')}>
          <span>About</span>
        </Link></li>
        <li><Link href="#projects" className={styles.link} onClick={() => scrollToSection('projects')}>
          <span>Projects</span>
        </Link></li>
        <li><Link href="#contact" className={styles.link} onClick={() => scrollToSection('contact')}>
          <span>Contact</span>
        </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
