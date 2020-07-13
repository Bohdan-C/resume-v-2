import React from "react";
import styles from "../portfolio/portfolio.module.css";
import img1 from "../../assets/images/img1.jpg";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.portfolio}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img alt="img" src={img1} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.progectName}>Finance manager app.</h3>
            <p className={styles.progectDesc}>
              An application that helps you keep track of your finances.
            </p>
            <p className={styles.progectTech}>
              Technologies: React, Redux, React-Router, Git.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img alt="img" src={img1} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.progectName}>Finance manager app.</h3>
            <p className={styles.progectDesc}>
              An application that helps you keep track of your finances.
            </p>
            <p className={styles.progectTech}>
              Technologies: React, Redux, React-Router, Git.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img alt="img" src={img1} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.progectName}>Finance manager app.</h3>
            <p className={styles.progectDesc}>
              An application that helps you keep track of your finances.
            </p>
            <p className={styles.progectTech}>
              Technologies: React, Redux, React-Router, Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
