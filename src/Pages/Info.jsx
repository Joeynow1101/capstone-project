import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

import { Link, Outlet } from "react-router-dom";

function Info() {
  return (
    <>
      <Header titleText={"Infos"} />

      <Link to="season">Läufigkeit</Link>

      <Link to="vaccination">Impfungen</Link>

      <Link to="deworming">Entwurmung</Link>

      <Outlet />

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
