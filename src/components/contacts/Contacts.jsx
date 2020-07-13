import React from "react";
import styles from "../contacts/contacts.module.css";
import mail from "../../assets/icons/mail.png";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import mobile from "../../assets/icons/mobile.png";
import placeholder from "../../assets/icons/placeholder.png";

function Contact() {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Contacts</h2>
      <div className={styles.list}>
        <span className={styles.span}>
          <img className={styles.icon} alt="mail" src={mail} />
          <p className={styles.link}>bohdanchurik31@gmail.com</p>
        </span>
        <span className={styles.span}>
          <img className={styles.icon} alt="mail" src={linkedin} />
          <a className={styles.link} href="https://www.linkedin.com/in/churik/">
            www.linkedin.com/in/churik
          </a>
        </span>
        <span className={styles.span}>
          <img className={styles.icon} alt="mail" src={github} />
          <a className={styles.link} href="https://github.com/Bohdan-C">
            https://github.com/Bohdan-C
          </a>
        </span>
        <span className={styles.span}>
          <img className={styles.iconMob} alt="mail" src={mobile} />
          <p className={styles.link}>+380954432661</p>
        </span>
        <span className={styles.span}>
          <img className={styles.iconMob} alt="mail" src={placeholder} />
          <p className={styles.link}>Kiev, Ukraine</p>
        </span>
      </div>
    </div>
  );
}

export default Contact;
