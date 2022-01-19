import GlobalStyles, { Button } from "../GlobalStyles/GlobalStyles";
import styled from "styled-components";
import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

export default function AppointmentForm() {
  
  const defaultValues = {
    title: "",
    date: "",
    time: "",
  };
  
  const { register, handleSubmit } = useForm();
  const [result,setResult] = useState(defaultValues)
  const [results, setResults] = useState([]);
  
  console.log(result);
  return (
    <>
      <Container onSubmit={handleSubmit((data) => setResults(data))}>
        <FormInput
          type="text"
          placeholder="Titel"
          {...register("title", { required: true })}
        />
        <FormInput
          type="date"
          placeholder="Datum"
          {...register("date", { required: true })}
        />
        <FormInput
          type="time"
          placeholder="Uhrzeit"
          {...register("time", { required: true })}
        />

        <Button type="submit">Termin erstellen</Button>
        <AppointmentCard>
          <span>{results.date}</span>
          <hr />
          <AppointmentCardBottom>
            <p>{results.time}Uhr</p>
            <p>{results.title}</p>
          </AppointmentCardBottom>
        </AppointmentCard>
      </Container>
    </>
  );
}

const Container = styled.form`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 20rem;
  border-radius: 10px;
  background-color: var(--secondary);

  grid-row-gap: 1rem;
  padding: 1rem;
`;

const AppointmentCard = styled.div`
  background-color: var(--primary-one-opacity);

  margin-bottom: 1rem;
  padding: 0.5rem;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.01),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.01),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.01);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  span {
    color: var(--secondary-one);
  }

  hr {
    border-bottom: 1px solid var(--secondary-two);
    opacity: 0.3;
  }
`;

const FormInput = styled.input`
  font-family: "CaveatBrush";
  width: 18rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.3rem;
  background: transparent;
  color: var(--secondary-one);
  margin: 0.5rem 0 1rem 0;

  &::placeholder {
    font-family: "CaveatBrush";
    font-size: 1.5rem;
    color: var(--secondary-one);
  }
  &::-webkit-calendar-picker-indicator {
    opacity: 0.6;
  }
`;

const AppointmentCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondary-one);
`;
