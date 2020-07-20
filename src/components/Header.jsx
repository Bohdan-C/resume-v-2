import React from "react";
import styled from "styled-components";
import photoMobile from "../assets/images/photoMobile.png";
import headerBgMobile from "../assets/images/headerBgMobile.png";
import Navbar from "./Navbar";
import {Link} from "react-scroll"


function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <Content>
        <Photo width="180" height="220" src={photoMobile} alt="myphoto" />
        <Text>
          <Greeting>Hello,</Greeting>
          <Name>I`m Bohdan Churik</Name>
          <Prof>Front-End Developer</Prof>
          <Btn><Link to="contacts" smooth={true} duration={1000}>Contact Me</Link></Btn>
        </Text>
      </Content>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  min-height: 460px;
  background-image: url(${headerBgMobile});
  background-size: 100% 460px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 420px;
    background-size: 100% 420px;
  }

  @media (min-width: 1080px) {
    margin-bottom: 90px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 540px;
  }
  @media (min-width: 1080px) {
    width: 980px;
    justify-content: space-around;
  }
`;
const Photo = styled.img`
  /* top: 180px;
  position: absolute;
  right: 20px; */
  align-self: center;
  margin-bottom: 20px;
  width: 160px;
  height: 160px;

  @media (min-width: 1080px) {
    width: 190px;
    height: 190px;
  }
`;
const Text = styled.div`
  align-self: center;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: #ffffff;
`;

const Btn = styled.button`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 12px;
  background-color: transparent;
  border-width: 1px;
  border-color: rgb(238, 186, 14);
  color: rgb(238, 186, 14);
  border-style: solid;
  border-radius: 10px;
  width: 110px;
  height: 30px;
  margin-bottom: 20px;
  outline: none;

  @media (min-width: 1080px) {
    width: 145px;
    height: 40px;
    font-size: 14px;
  }
`;

const Greeting = styled.h2`
  opacity: 0.7;
  font-size: 24px;
  margin-bottom: 5px;

  @media (min-width: 1080px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;

  @media (min-width: 1080px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const Prof = styled.p`
  text-transform: initial;
  opacity: 0.7;
  font-size: 14px;
  margin-bottom: 20px;

  @media (min-width: 1080px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export default Header;
