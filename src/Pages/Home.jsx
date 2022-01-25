import styled from "styled-components";
import Logo from "../Images/Logo.svg";
import { NavLink } from "react-router-dom";
import GlobalStyles, { Button } from "../GlobalStyles/GlobalStyles";

export default function Home() {
  return (
    <>
      <Container>
        <img src={Logo} alt="Logo" />
        <NavLink to="newprofile">
          <Button>Start</Button>
        </NavLink>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 19rem;
    margin: 1rem;
    filter: drop-shadow();
  }
`;
