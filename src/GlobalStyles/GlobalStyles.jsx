import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

:root {
    --primary: #FDE8CE;
    --primary-one: #C8B49B;
    --primary-one-opacity: #c8b49b21;
    --primary-two: #95836C;
    --secondary-one: #65553F;
    --secondary-two: #382B17;
}

body {
    background: var(--primary);
    margin: 60px 0 80px 0;
    font-family: sans-serif;
 }
`;

export default GlobalStyles;

export const Button = styled.button`
  margin: auto;
  height: 45px;
  width: 145px;
  background-color: var(--primary-one);
  border-radius: 8px;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  color: var(--secondary-two);

  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  &:active {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }
  box-shadow: 6px 7px 23px -3px rgba(56, 43, 23, 0.2);
`;

export const ProfileInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    text-align: center;
    background: transparent;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    background-color: var(--primary-one);
    height: 3rem;
    width: 17rem;

    ::placeholder {
      color: var(--secondary-two);
    }
    box-shadow: 6px 7px 23px -3px rgba(56, 43, 23, 0.2);
  }
`;

export const ProfileSelectInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    font-size: 1.2rem;
    text-align: center;
    position: relative;
    display: inline-block;
    border: none;
    width: 100%;
    height: 2rem;
    border-radius: 8px;
    background-color: var(--primary-one);
    color: var(--secondary-two);
    box-shadow: 6px 7px 23px -3px rgba(56, 43, 23, 0.2);
  }
`;

export const DeleteButton = styled.button`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: var(--primary-one);
  border: none;
  img {
    width: 20px;
  }
 
`;
