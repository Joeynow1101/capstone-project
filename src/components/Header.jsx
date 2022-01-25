import React from "react";
import styled from "styled-components";

export default function Header({ titleText }) {
  return (
    <>
      <StyledHeader>
        <h1>{titleText}</h1>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;

  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 60px;
  font-family: CaveatBrush;
  background: var(--primary);
  color: var(--secondary-two);
  position: fixed;
  top: 0;
  border-bottom: 1px solid #382b1713;
  
  h1 {
    font-size: 2.2rem;
  }
`;
