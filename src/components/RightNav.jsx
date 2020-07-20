import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll"

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  li {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 1080px) {
    flex-flow: column nowrap;
    background-color: rgb(31, 31, 31);
    opacity: 0.949;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      padding: 2rem;
    }
  }

  @media (min-width: 1080px) {
    width: 435px;
    justify-content: space-between;

    li {
      &:hover {
        color: #eeba0e;
      }
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

function RightNav({ open, setOpen }) {
  return (
    <List open={open}>
      <li><Link onClick={() => setOpen(!open)} to="about" offset={-150} smooth={true} duration={1000}>About</Link></li>
      <li><Link onClick={() => setOpen(!open)} to="skills" offset={-90} smooth={true} duration={1000}>Skills</Link></li>
      <li><Link onClick={() => setOpen(!open)} to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
      <li><Link onClick={() => setOpen(!open)} to="contacts" smooth={true} duration={1000}>Contacts</Link></li>
    </List>
  );
}

export default RightNav;
