import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";
import SeasonsData from "../components/SeasonsData";
import SeasonImage from "../Images/SeasonImage.jpg";
import styled from "styled-components";

function SeasonList() {
  const [seasonDate, setSeasonDate] = useState(
    loadFromLocal("_seasonDate") || ""
  );

  useEffect(() => {
    saveToLocal("_seasonDate", seasonDate);
  });

  const onChange = (event) => {
    setSeasonDate(event.target.value);
  };
  return (
    <Container>
      <img src={SeasonImage} alt="" />
      <SeasonsData />
      <h2>Beginn der Läufigkeit</h2>
      <input
        type="date"
        name="seasonDate"
        value={seasonDate}
        onChange={onChange}
      />
    </Container>
  );
}
export default SeasonList;

const Container = styled.div`
  font-family: "Raleway", sans-serif;
  display: grid;
  justify-content: center;
  grid-gap: 0.5rem;
  padding: 1rem;
  color: var(--secondary-one);

  img {
    width: 21.5rem;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    margin: auto;
  }

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
    margin-bottom: 2rem;
    font-size: 1.1rem;
    font-weight: 300;
  }
`;
