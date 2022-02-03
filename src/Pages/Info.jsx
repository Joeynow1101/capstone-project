import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles, { Button } from "../GlobalStyles/GlobalStyles";
import { motion } from "framer-motion";

function Info() {
  return (
    <>
        <Header titleText={"Infos"} />
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Container>
          <NavLink to="season">
            <Button>Läufigkeit</Button>
          </NavLink>
          <NavLink to="deworming">
            <Button>Entwurmung</Button>
          </NavLink>
          <NavLink to="vaccination">
            <Button>Impfungen</Button>
          </NavLink>
        </Container>
      </motion.div>
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
  grid-row-gap: 2rem;
  height: 82vh;

  button {
    width: 15rem;
    height: 5rem;
  }
`;
