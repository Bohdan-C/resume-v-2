import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

function HomePage() {
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
