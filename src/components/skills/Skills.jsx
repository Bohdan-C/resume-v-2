import React from 'react'
import styles from '../skills/skills.module.css'
import skillsPng from '../../assets/images/skillPng.png'

function Skills() {
    return (
        <div className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>
            <img src={skillsPng} alt="skillpng" className={styles.skillImg} />
            <ul className={styles.skillList}>
                <li className={styles.skillItem}>React</li>
                <li className={styles.skillItem}>Redux</li>
                <li className={styles.skillItem}>JavaScript</li>
                <li className={styles.skillItem}>CSS3</li>
                <li className={styles.skillItem}>React Native</li>
                <li className={styles.skillItem}>Git</li>
                <li className={styles.skillItem}>Webpack</li>
                <li className={styles.skillItem}>SASS/SCSS</li>
                <li className={styles.skillItem}>Flexbox</li>
                <li className={styles.skillItem}>HTML5</li>
                <li className={styles.skillItem}>Scrum</li>
                <li className={styles.skillItem}>Agile</li>
            </ul>
        </div>
    )
}

export default Skills
