import { useEffect, useState } from 'react';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';
import DewormingImage from '../Images/DewormingImage.jpg';
import GlobalStyles, { Button } from '../GlobalStyles/GlobalStyles';
import DewormingData from './DewormingData';
import styled from 'styled-components';

function Deworming() {
  const [showDate, setShowDate] = useState(false);
  const [dewormingDate, setDewormingDate] = useState(
    loadFromLocal('_dewormingDate')
  );

  useEffect(() => {
    saveToLocal('_dewormingDate', dewormingDate);
  });

  const months = 3;
  const addDate = new Date(dewormingDate);
  addDate.setMonth(addDate.getMonth() + months);
  const dateFormatter = Intl.DateTimeFormat('de-DE');
  const addingNewDewormingDate = dateFormatter.format(addDate);

  const onChange = (event) => {
    setDewormingDate(event.target.value);
  };

  function handleDateClick() {
    setShowDate(!showDate);
  }

  return (
    <>
      <TextBox>
        <img src={DewormingImage} alt="" />
        <DewormingData />
      </TextBox>
      <Container>
        <h2>Entwurmt am:</h2>
        <DateInput
          type="date"
          name="dewormingDate"
          value={dewormingDate}
          onChange={onChange}
        />

        <Button onClick={handleDateClick}>
          {showDate && dewormingDate !== null ? 'schließen' : 'nächster Termin'}
        </Button>

        {showDate && dewormingDate !== null && (
          <>
            <h2>nächste Entwurmung am: </h2>
            <NewDateBox>
              <h2>{addingNewDewormingDate}</h2>
            </NewDateBox>
          </>
        )}
      </Container>
    </>
  );
}

export default Deworming;

const TextBox = styled.div`
  img {
    width: 21.5rem;
    margin-top: 0.5rem;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }
  span {
    margin-top: 1rem;
    text-align: justify;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  line-height: 1.6rem;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--secondary-one);
`;

const DateInput = styled.input`
  margin: auto;
  margin-bottom: 1rem;
  font-family: 'CaveatBrush';
  width: 12rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.9rem;
  background: transparent;
  color: var(--secondary-one);

  &::placeholder {
    font-family: 'CaveatBrush';
    font-size: 1.7rem;
    color: var(--secondary-one);
  }
  &::-webkit-calendar-picker-indicator {
    opacity: 0.6;
    width: 2rem;
  }
`;

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  padding: 1rem;
  color: var(--secondary-one);

  h2 {
    text-align: center;
  }
`;

const NewDateBox = styled.div`
  width: 70%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  h2 {
    font-family: 'CaveatBrush';
    font-size: 2.5rem;
    color: var(--secondary-one);
  }
`;
