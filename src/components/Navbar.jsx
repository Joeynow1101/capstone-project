import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Profile from "../Images/Profile.svg";
import Feeding from "../Images/Feeding.svg";
import Appointment from "../Images/Appointment.svg";
import Notes from "../Images/Notes.svg";

function Navbar() {
  return (
    <Nav>
      <NavLink to="/profile">
        <img src={Profile} alt="Profileicon" />
      </NavLink>
      <NavLink to="/Feeding">
        <img src={Feeding} alt="Feedingicon" />
      </NavLink>
      <NavLink to="/Appointment">
        <img src={Appointment} alt="Appointmenticon" />
      </NavLink>
      <NavLink to="/Notes">
        <img src={Notes} alt="Notesicon" />
      </NavLink>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
`;
