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
  justify-content: center;
  padding: 1rem;
  font-family: CaveatBrush;
  font-size: 2rem;
  color: var(--primary-one);
`;
