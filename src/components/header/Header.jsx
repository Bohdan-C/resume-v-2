import React from "react";
import styles from "../header/header.module.css";
import profileMob from "../../assets/images/profilePhotoMobile.png";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>LOGO</h1>
      <div className={styles.text}>
        <h2 className={styles.hello}>Hello,</h2>
        <h2 className={styles.name}>I`m Bohdan Churik</h2>
        <p className={styles.prof}>Front-End Developer</p>
        <button className={styles.contactBtn}>Contact Me</button>
      </div>
      <img className={styles.profImg} src={profileMob} alt="myphoto" />
    </div>
  );
}

export default Header;
