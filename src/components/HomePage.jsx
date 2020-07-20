import React, { useRef } from "react";
import Header from "./Header";
import About from "./About";
// import What from '../what/What'
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

function HomePage() {
//   const aboutSection = useRef(null);
//   const scrollToAboutSection = () =>
//     window.scrollTo({
//       top: aboutSection.current.offsetTop,
//       behavior: "smooth",
//     });

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default HomePage;
