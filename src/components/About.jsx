import React from "react";
import styled from "styled-components";
import infoMobile from "../assets/icons/information.png";

function About() {
  return (
    <StyledAbout id="about">
      <ImgContainer>
        <img alt="infopng" src={infoMobile} />
      </ImgContainer>
      <Content>
        <h2>About Me</h2>
        <h3>I Am a React Front-End develover.</h3>
        <p>
          Hello everyone, I am Bogdan Churik, I like to develop useful and
          multifunctional web applications. I approach work with responsibility
          and creativity. Have experience in developing web applications in a
          team. Open to new possibilities.
        </p>
      </Content>
    </StyledAbout>
  );
}

const StyledAbout = styled.section`
  margin: 0 auto;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 49px;
    height: 48px;
  }

  h2 {
    font-weight: bold;
    font-size: 20px;
    color: #1f1f1f;
    margin-bottom: 30px;
  }

  h3 {
    opacity: 0.7;
    font-size: 16px;
    color: #1f1f1f;
    margin-bottom: 15px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 40px;
    line-height: 26px;
  }

  @media (min-width: 768px) {
    width: 615px;
    justify-content: space-between;
    flex-direction: row;

    img {
      width: 150px;
      height: 145px;
    }
  }

  @media (min-width: 1080px) {
    margin-bottom: 100px;
    width: 850px;

    h2 {
      font-size: 26px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      margin-bottom: 0;
    }

    img {
      width: 200px;
      height: 190px;
    }
  }
`;
const ImgContainer = styled.div`
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-left: 45px;
    margin-bottom: 40px;
  }
`;
const Content = styled.div`
  text-align: center;
  width: 300px;
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1080px) {
    text-align: center;
    width: 370px;
  }
`;

export default About;
