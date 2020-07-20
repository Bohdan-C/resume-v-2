import React from "react";
import styled from "styled-components";

function What() {
  return (
    <StyledWhat>
      <h2>What I Do</h2>
    </StyledWhat>
  );
}

const StyledWhat = styled.div`
  padding-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;

  h2 {
    font-weight: bold;
    font-size: 18px;
    color: #1f1f1f;
    margin-bottom: 30px;
  }
`;

export default What;
