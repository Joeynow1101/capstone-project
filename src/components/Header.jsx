import React from "react";
import styled from "styled-components";

export default function Header({ titleText }) {
  return (
    <StyledHeader>
      <p>{titleText}</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-family: CaveatBrush;
  font-size: 2.25rem;
  color: var(--secondary-two);
  position: fixed;
  top: 0;
  background-color: var(--primary);
`;
