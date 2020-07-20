import React from "react";
import styled from "styled-components";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import mobile from "../assets/icons/mobile.png";
import placeholder from "../assets/icons/placeholder.png";
import contactsbg from "../assets/images/contactsbg.png";

function Contacts() {
  return (
    <StyledContacts id="contacts">
      <h2>Contacts</h2>
      <List>
        <Item>
          <span>
            <img alt="mail" src={mail} />
            <p>bohdanchurik31@gmail.com</p>
          </span>
        </Item>
        <Item>
          <span>
            <img alt="mail" src={linkedin} />
            <a href="https://www.linkedin.com/in/churik/">
              www.linkedin.com/in/churik/
            </a>
          </span>
        </Item>
        <Item>
          <span>
            <img alt="mail" src={github} />
            <a href="https://github.com/Bohdan-C">
              https://github.com/Bohdan-C
            </a>
          </span>
        </Item>
        <Item>
          <span>
            <IconMar alt="mail" src={mobile} />
            <p>+380954432661</p>
          </span>
        </Item>
        <Item>
          <span>
            <IconMar alt="mail" src={placeholder} />
            <p>Kiev, Ukraine</p>
          </span>
        </Item>
      </List>
    </StyledContacts>
  );
}

const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${contactsbg});
  background-repeat: no-repeat;
  min-height: 355px;
  background-clip: border-box;
  background-size: 100% 355px;
  margin-top: 10px;

  h2 {
    margin-top: 60px;
    font-weight: bold;
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

const List = styled.ul``;

const Item = styled.li`
  span {
    display: flex;
    align-self: center;
    margin-bottom: 15px;
  }
  img {
    margin-right: 10px;
  }
  p {
    color: #eeba0e;
  }
  a {
    color: #eeba0e;
  }
`;

const IconMar = styled.img`
  margin-right: 10px;
  margin-left: 5px;
`;

export default Contacts;
