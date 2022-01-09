import styled from "styled-components";
import Logo from "../Images/Logo.svg";

export default function Home() {
  return (
    <Conatiner>
      <img src={Logo} alt="Logo" />
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin-top: 120px;
  }
`;
