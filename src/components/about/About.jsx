import React from "react";
import styles from "../about/about.module.css";
import infoMobile from "../../assets/icons/information.png";

function About() {
  return (
    <div className={styles.about}>
      <img className={styles.info} alt="infopng" src={infoMobile} />
      <h2 className={styles.title}>About Me</h2>
      <h3 className={styles.intro}>I Am a React Front-End develover.</h3>
      <p  className={styles.desc}>
        Hello, I am looking for a full-time job at the Front-end position. I
        have 1 year of experience in web development on such projects as.
      </p>
    </div>
  );
}

export default About;
