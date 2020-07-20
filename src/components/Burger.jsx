import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurder = styled.div`
  width: 27px;
  height: 24px;
  position: fixed;
  top: 25px;
  margin-right: 25px;
  right: 25px;
  z-index: 20;
  display: grid;

  @media (min-width: 768px) {
  margin-right: 25px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media (min-width: 1080px) {
    display: none;
  }

  div {
    width: 27px;
    height: 2px;
    background-color: ${({ open }) => (open ? "#ffffff" : "#ffffff")};
    border-radius: 2px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(40deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-40deg)" : "rotate(0)")};
    }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurder open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurder>
      <RightNav open={open} setOpen={setOpen}/>
    </>
  );
}

export default Burger;
