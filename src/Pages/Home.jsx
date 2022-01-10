import styled from "styled-components";
import Logo from "../Images/Logo.svg";

export default function Home() {
  return (
    <Container>
      <a href="/profile">
        <img src={Logo} alt="Logo" />
      </a>
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
