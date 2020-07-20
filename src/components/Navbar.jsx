import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../assets/icons/logo.png";
import { animateScroll as scroll } from "react-scroll";
import arrow from "../assets/icons/arrow.png";

const Nav = styled.nav`
  width: 100%;
  height: 75px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 1080px) {
    width: 980px;
    margin-bottom: 45px;
  }
`;

const Logo = styled.img`
  margin-bottom: 5px;
  width: 30px;
  height: 23px;
  margin-left: 25px;

  @media (min-width: 1080px) {
    margin: 0;
  }
`;

const ToTop = styled.button`
  position: fixed;
  background-color: #eeba0e;
  outline: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: none;
  bottom: 20px;
  right: 20px;
  z-index: 2;
`;

const Arrow = styled.img`
  width: 15px;
  height: 15px;
`;

function Navbar() {
  return (
    <Nav>
      <Logo src={logo} />
      <Burger />
      <ToTop onClick={() => scroll.scrollToTop()}>
        <Arrow alt="arrow" src={arrow} />
      </ToTop>
    </Nav>
  );
}

export default Navbar;
