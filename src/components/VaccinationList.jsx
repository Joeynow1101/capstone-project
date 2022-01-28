import styled from "styled-components";
import { useState, useEffect } from "react";
import GlobalStyles, { Button } from "../GlobalStyles/GlobalStyles";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";
import Vaccination from "../Images/Vaccination.jpg";

function VaccinationList() {
  const initialVaccinations = {
    hepatitis: {
      value: "Hepatitis",
      checked: false,
      date: "",
    },
    leptospirose: {
      value: "Leptospirose",
      checked: false,
      date: "",
    },

    parainfluenza: {
      value: "Parainfluenza",
      checked: false,
      date: "",
    },

    pavovirose: {
      value: "Pavovirose",
      checked: false,
      date: "",
    },

    staupe: {
      value: "Staupe",
      checked: false,
      date: "",
    },

    tollwut: {
      value: "Tollwut",
      checked: false,
      date: "",
    },
  };
  const localStorageVaccinations = loadFromLocal("_vaccinations");
  const [vaccination, setVaccination] = useState(
    localStorageVaccinations ?? initialVaccinations
  );

  const vaccinationKeys = Object.keys(initialVaccinations);
  const [showMyVaccinations, setShowMyVaccinations] = useState(false);

  const [showDate, setShowDate] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.checked;
    let vaccinationKey = event.target.value.toLowerCase();
    setVaccination({
      ...vaccination,
      [vaccinationKey]: { ...vaccination[vaccinationKey], checked: inputValue },
    });
  };

  const handleChangeDate = (vaccinationKey, date) => {
    setVaccination({
      ...vaccination,
      [vaccinationKey]: { ...vaccination[vaccinationKey], date },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveToLocal("_vaccinations", vaccination);
  };

  function handleMyVaccinations() {
    setShowMyVaccinations(!showMyVaccinations);
  }

  function handleDateClick() {
    setShowDate(!showDate);
  }

  return (
    <>
      <TextBox>
        <img src={Vaccination} alt="DogPicture" />
        <span>
          Gefährliche Infektionskrankheiten sind bei Hunden nach wie vor weit
          verbreitet. Impfungen ermöglichen es, deinen Liebling vor diesen
          Erkrankungen zu schützen oder zumindest zu verhindern, dass diese
          einen schweren Verlauf haben.
        </span>
      </TextBox>
      <ButtonBox>
        <Button onClick={handleMyVaccinations}>
          {showMyVaccinations ? "schließen" : "Meine Impfungen"}
        </Button>
      </ButtonBox>
      {showMyVaccinations && (
        <Container onSubmit={handleSubmit}>
          {vaccinationKeys.map((key, index) => (
            <label key={index}>
              <TextInput
                type="checkbox"
                value={vaccination[key]["value"]}
                name="vaccination"
                checked={vaccination[key]["checked"]}
                onChange={handleChange}
                onClick={handleDateClick}
              ></TextInput>
              {vaccination[key]["value"]}
              {vaccination[key]["checked"] && (
                <DateInput
                  type="date"
                  onChange={(event) => {
                    handleChangeDate(key, event.target.value);
                  }}
                  value={vaccination[key]["date"]}
                />
              )}
            </label>
          ))}
          <ButtonBox>
            <Button type="submit">Speichern</Button>
          </ButtonBox>
        </Container>
      )}
    </>
  );
}

export default VaccinationList;

const Container = styled.form`
  width: 22rem;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  label {
    margin-left: 6rem;
    font-size: 1.7rem;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    color: var(--secondary-one);
  }
`;

const TextInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  accent-color: var(--primary-one);
`;

const ButtonBox = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
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
  margin-bottom: 1.3rem;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--secondary-one);
`;

const DateInput = styled.input`
  margin: auto;
  font-family: "CaveatBrush";
  width: 12rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.9rem;
  background: transparent;
  color: var(--secondary-one);
  margin-top: 1rem;

  &::placeholder {
    font-family: "CaveatBrush";
    font-size: 1.7rem;
    color: var(--secondary-one);
  }
  &::-webkit-calendar-picker-indicator {
    opacity: 0.6;
    width: 2rem;
  }
`;
