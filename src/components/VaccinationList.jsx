import styled from "styled-components";
import { useState, useEffect } from "react";
import GlobalStyles, { Button } from "../GlobalStyles/GlobalStyles";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";

function VaccinationList() {
  const initialValues = {
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
    
    pavovirose:{
      
      value: "Pavovirose",
      checked: false,
    },

    staupe:{
      
      value: "Staupe",
      checked: false,
    },

    tollwut:{
    
      value: "Tollwut",
      checked: false,
    },
   
  };

  const [isChecked, setIsChecked] = useState(initialValues);

  const vaccinationKeys = Object.keys(initialValues);
  // Object.keys(initialValues).map(vaccinationKey => initialValues[vaccinationKey])
  
  const handleChange = (event) => {
    let inputValue = event.target.checked;
    let vaccinationKey = event.target.value.toLowerCase();
    setIsChecked({
      ...isChecked,
      [vaccinationKey]: { ...isChecked[vaccinationKey], checked: inputValue },
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    saveToLocal("v", isChecked);
  };
  
  console.log(isChecked);
  
  const checkboxes = vaccinationKeys.map((key) => (
    <label>
      <input
        type="checkbox"
        value={isChecked[key]["value"]}
        name="vaccination"
        checked={isChecked[key]["checked"]}
        onChange={handleChange}
      />
      {isChecked[key]["value"]}
    </label>
  ));
  return (
    <>
      <Container onSubmit={handleSubmit}>
        {checkboxes}
        <article>
          <input
            name="vaccination"
            type="checkbox"
            value="Hepatitis"
            onChange={handleChange}
            checked={isChecked.checked}
            
          />
          <label>Hepatitis</label>
        </article>
        <article>
          <input
            name="vaccination"
            type="checkbox"
            value="Leptospirose"
            onChange={handleChange}
            checked={isChecked.checked}
          />
          <label>Leptospirose</label>
        </article>
        <article>
          <input
            name="vaccination"
            type="checkbox"
            value="Parainfluenza"
            onChange={handleChange}
            checked={isChecked.checked}
          />
          <label>Parainfluenza</label>
        </article>
        <article>
          <input
            name="vaccination"
            type="checkbox"
            value="Pavovirose"
            onChange={handleChange}
            checked={isChecked.checked}
          />
          <label>Pavovirose</label>
        </article>
        <article>
          <input
            name="vaccination"
            type="checkbox"
            value="Staupe"
            onChange={handleChange}
            checked={isChecked.checked}
          />
          <label>Staupe</label>
        </article>
        <article>
          <input
            name="vaccination"
            type="checkbox"
            value="Tollwut"
            onChange={handleChange}
            checked={isChecked.checked}
          />
          <label>Tollwut</label>
        </article>

        <ButtonBox>
          <Button type="submit">Speichern</Button>
        </ButtonBox>
      </Container>
    </>
  );
}

export default VaccinationList;

const Container = styled.form`
  width: 80%;

  margin: auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  input {
    margin-left: 5rem;
    accent-color: var(--primary-one);
  }
  label {
    margin-left: 2rem;
    font-size: 1.5rem;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    color: var(--secondary-one);
  }
`;
const ButtonBox = styled.div`
  display: flex;
`;
