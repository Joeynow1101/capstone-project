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
  z-index: 10;
  width: 100%;
  height: 70px;
  font-family: CaveatBrush;

  background: linear-gradient(
    180deg,
    rgba(253, 232, 206, 1) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  color: var(--secondary-two);
  position: fixed;
  top: 0;
  h1 {
    font-size: 2.2rem;
    margin-top:0.5rem
  }
`;
