import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.jpg";

function Portfolio() {
  return (
    <StyledPortfolio id="portfolio">
      <h1>Portfolio</h1>
      <Portf>
        <Card>
          <ImgContainer>
            <img alt="img" src={img1} />
          </ImgContainer>
          <Content>
            <h3>Go to goal</h3>
            <p>
              An application for achieving goals, created for the younger
              generation.
            </p>
            <ProgectTech>
              <span>Technologies</span>: React, Redux, RestAPI, redux-thunk.
            </ProgectTech>
            <ProjectLink href="https://go-to-goal-bc18.netlify.app/">
              Project Link
            </ProjectLink>
          </Content>
        </Card>
        <Card>
          <ImgContainer>
            <img alt="img" src={img2} />
          </ImgContainer>
          <Content>
            <h3>Finance manager app.</h3>
            <p>An application that helps you keep track of your finances.</p>
            <ProgectTech>
              <span>Technologies</span>: React, Redux, React-Router, Git.
            </ProgectTech>
            <ProjectLink href="https://honeymoney.netlify.com/">
              Project Link
            </ProjectLink>
          </Content>
        </Card>
        <Card>
          <ImgContainer>
            <img alt="img" src={img3} />
          </ImgContainer>
          <Content>
            <h3>Game forum.</h3>
            <p>
              A place for real gamers and geeks.{" "}
              <span>( Currently under development.)</span>
            </p>
            <ProgectTech>
              <span>Technologies</span>: Next.js, Styled-components, Git.
            </ProgectTech>
          </Content>
        </Card>
      </Portf>
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h1 {
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 20px;
  }

  h3 {
    font-weight: 600;
    text-align: center;
  }

  span {
    color: #000000;
  }
`;

const ProjectLink = styled.a`
  font-size: 14px;
  color: #eeba0e;
`;

const Portf = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    width: 700px;
    justify-content: flex-start;
  }

  @media (min-width: 1080px) {
    width: 1050px;
  }
`;

const Card = styled.div`
  &:hover {
    height: 270px;
  }
  border-radius: 15px;
  position: relative;
  max-width: 230px;
  height: 100px;
  background: #ffffff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease-in-out;

  @media (min-width: 768px) {
    margin: 30px 45px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  height: 118px;
  width: 230px;
  top: -45px;
  left: 0px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  img {
    max-width: 100%;
    border-radius: 4px;
  }
`;

const Content = styled.div`
  ${Card}:hover & {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.1s;
  }
  position: relative;
  margin-top: -140px;
  padding: 30px 15px;
  color: #111111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #696969;
  }
`;

const ProgectTech = styled.p`
  color: #696969;
  margin-bottom: 10px;
  font-size: 16px;
`;

export default Portfolio;
