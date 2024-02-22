import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.menuList}>
            <li><h1 className= {styles.logo}>Andres Rivas</h1></li>
        </ul>
        <ul className={styles.menuList}>
            <li><Link to="#about" className={styles.link}>
                <span>About</span>
                </Link>
            </li>
            <li><Link to="#projects" className={styles.link}>
                <span>Projects</span>
                </Link>
            </li>
            <li><Link to="#contact" className={styles.link}>
                <span>Contact</span>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar