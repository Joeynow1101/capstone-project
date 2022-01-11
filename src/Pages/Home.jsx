import styled from "styled-components";
import Logo from "../Images/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <NavLink to="/profile">
        <img src={Logo} alt="Logo" />
      </NavLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
    margin-top: 120px;
  }
`;
