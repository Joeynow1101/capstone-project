import styled, { createGlobalStyle } from 'styled-components';
import BackgroundMain from '../Images/BackgroundMain.png';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

:root {
    --primary: #FDE8CE;
    --primary-one: #C8B49B;
    --primary-one-opacity: #fde8cec6;
    --primary-two: #95836C;
    --secondary-one: #65553F;
    --secondary-two: #382B17;
}

body {
    background: var(--primary);
    margin: 3.5rem 0 5rem 0;
    font-family: sans-serif;
    background-image: url(${BackgroundMain});
    
  }
`;

export default GlobalStyles;

export const Button = styled.button`
  margin: auto;
  height: 45px;
  width: 145px;
  border: none;
  padding: 0.2rem;
  font-size: 1rem;
  border-radius: 1rem;
  background-color: var(--secondary-one);
  color: #f7f7f7;
  box-shadow: 0 0.3rem var(--primary-two);

  :active {
    color: white;
    box-shadow: 0 0.2rem #dfd9d9;
    transform: translateY(0.2rem);
  }
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
  color: var(--secondary-one);
`;
