import React from "react";
import styled from "styled-components";

export default function Header({ titleText }) {
  return (
    <>
      <StyledHeader>
        <p>{titleText}</p>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 70px;
  font-family: CaveatBrush;
  font-size: 2.25rem;
  background: linear-gradient(
    180deg,
    rgba(253, 232, 206, 1) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  color: var(--secondary-two);
  position: fixed;
  top: 0;
`;
