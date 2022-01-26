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
    },
    leptospirose: {
      value: "Leptospirose",
      checked: false,
    },

    parainfluenza: {
      value: "Parainfluenza",
      checked: false,
    },

    pavovirose: {
      value: "Pavovirose",
      checked: false,
    },

    staupe: {
      value: "Staupe",
      checked: false,
    },

    tollwut: {
      value: "Tollwut",
      checked: false,
    },
  };

  const localStorageVaccinations = loadFromLocal("_vaccinations");
  const [vaccination, setVaccination] = useState(
    localStorageVaccinations ?? initialVaccinations
  );

  const vaccinationKeys = Object.keys(initialVaccinations);
  const [showMore, setShowMore] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.checked;
    let vaccinationKey = event.target.value.toLowerCase();
    setVaccination({
      ...vaccination,
      [vaccinationKey]: { ...vaccination[vaccinationKey], checked: inputValue },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveToLocal("_vaccinations", vaccination);
  };

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      <TextBox>
        <img src={Vaccination} alt="" />
        <span>
          Gefährliche Infektionskrankheiten sind bei Hunden nach wie vor weit
          verbreitet. Impfungen ermöglichen es, deinen Liebling vor diesen
          Erkrankungen zu schützen oder zumindest zu verhindern, dass diese
          einen schweren Verlauf haben.
        </span>
      </TextBox>
      <ButtonBox>
        <Button onClick={handleMoreClick}>
          {showMore ? "schließen" : "Meine Impfungen"}
        </Button>
      </ButtonBox>
      {showMore && (
        <Container onSubmit={handleSubmit}>
          {vaccinationKeys.map((key, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={vaccination[key]["value"]}
                name="vaccination"
                checked={vaccination[key]["checked"]}
                onChange={handleChange}
              />
              {vaccination[key]["value"]}
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

  input {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    accent-color: var(--primary-one);
  }

  label {
    margin-left: 6rem;
    font-size: 1.7rem;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    color: var(--secondary-one);
  }
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
