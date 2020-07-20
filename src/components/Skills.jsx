import React from "react";
import styled from "styled-components";
import after from "../assets/icons/after.png";
import skillsTab from "../assets/images/skillsTab.png";

function Skills() {
  if (window.innerWidth < 768) {
    return (
      <StyledSkills id="skills">
        <Container>
          <h2>Skills</h2>
          <img src={after} alt="skillpng" />
          <List>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>React Native</li>
            <li>Git</li>
            <li>Webpack</li>
            <li>SASS/SCSS</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>Flexbox</li>
            <li>Scrum</li>
            <li>Agile</li>
          </List>
        </Container>
      </StyledSkills>
    );
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
    return (
      <StyledSkills id="skills">
        <Container>
          <Content>
            <h2>Skills</h2>
            <img src={after} alt="skillpng" />
            <List>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>React Native</li>
              <li>Git</li>
              <li>Webpack</li>
              <li>SASS/SCSS</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Flexbox</li>
              <li>Scrum</li>
              <li>Agile</li>
            </List>
          </Content>
          <ImgContainer>
            <img src={skillsTab} alt="skillpng" />
          </ImgContainer>
        </Container>
      </StyledSkills>
    );
  } else {
    return (
      <StyledSkills id="skills">
        <Container>
          <Content>
            <h2>Skills</h2>
            <img src={after} alt="skillpng" />
            <List>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>React Native</li>
              <li>Git</li>
              <li>Webpack</li>
              <li>SASS/SCSS</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Flexbox</li>
              <li>Scrum</li>
              <li>Agile</li>
            </List>
          </Content>
          <ImgContainer>
            <img src={skillsTab} alt="skillpng" />
          </ImgContainer>
        </Container>
      </StyledSkills>
    );
  }
}

const StyledSkills = styled.section`
  background-color: #f6f6f6;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1080px) {
    display: flex;
    justify-content: center;
  }

  h2 {
    text-align: center;
    margin-top: 40px;
    font-weight: bold;
    font-size: 20px;
    color: #1f1f1f;
    margin-bottom: 10px;
  }

  img {
    margin-bottom: 30px;

    @media (min-width: 768px) {
      margin-bottom: 10px;
    }
  }

  li {
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
    padding: 5px 10px 5px 10px;
    border-width: 2px;
    /* border-color: rgb(238, 186, 14); */
    border-color: #1f1f1f;
    border-style: solid;
    border-radius: 10px;
    color: #1f1f1f;
    font-weight: 600;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 615px;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
  }
  @media (min-width: 1080px) {
    width: 850px;
    justify-content: space-around;
  }
`;

const Content = styled.div`
  @media (min-width: 768px) {
    text-align: center;
  }
`;
const ImgContainer = styled.div`
  @media (min-width: 768px) {
    margin-top: 77px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  /* padding: 0 15px 0 20px; */
  width: 300px;

  @media (min-width: 768px) {
    width: 300px;
    padding: 0;
  }
  @media (min-width: 1080px) {
    width: 410px;
  }
`;

export default Skills;
