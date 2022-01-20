import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles, { Button } from "../GlobalStyles/GlobalStyles";
styled;

function Info() {
  return (
    <>
      <Header titleText={"Infos"} />
      <Container>
        <NavLink to="/Season">
          <Button>Läufigkeit</Button>
        </NavLink>
        <NavLink to="/Deworming">
          <Button>Entwurmung</Button>
        </NavLink>
        <NavLink to="/Vaccination">
          <Button>Impfungen</Button>
        </NavLink>
      </Container>
      <Navbar />
    </>
  );
}

export default Info;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 20rem;
  border-radius: 10px;
  background-color: var(--secondary);
  grid-row-gap: 2rem;
  padding: 1rem;
  margin-top: 200px;
`;
