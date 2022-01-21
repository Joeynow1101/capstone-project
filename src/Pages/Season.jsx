import Navbar from "../components/Navbar";
import Header from "../components/Header";
import styled from "styled-components";
import SeasonsData from "../components/SeasonsData";

function Season() {
  return (
    <>
      <Header titleText={"Läufigkeit"} />
      <Container>
        <h2>Beginn der Läufigkeit</h2>
        <input type="date" placeholder="Titel" onfocus="(this.type='date')"/>
        <SeasonsData />
      </Container>
      <Navbar />
    </>
  );
}

export default Season;

const Container = styled.div`
  font-family: "Raleway", sans-serif;
  display: grid;
  justify-content: center;
  grid-gap: 0.5rem;
  padding: 1.5rem;
  color: var(--secondary-one);

  input {
    font-family: "CaveatBrush";
    width: 12rem;
    border: 0;
    border-bottom: 1px solid var(--secondary-two);
    outline: 0;
    font-size: 1.9rem;
    background: transparent;
    color: var(--secondary-one);
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

    &::placeholder {
      font-family: "CaveatBrush";
      font-size: 1.7rem;
      color: var(--secondary-one);
    }
    &::-webkit-calendar-picker-indicator {
      opacity: 0.6;
      width: 2rem;
    }
  }
  h2 {
    text-align: center;
  }
  p {
    line-height: 1.8rem;
    margin-bottom: 1.3rem;
    font-size: 1.1rem;
    font-weight: 300;
  }
`;
