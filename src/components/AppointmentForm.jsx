import GlobalStyles, {
  Button,
  DeleteButton,
} from "../GlobalStyles/GlobalStyles";
import DeleteIcon from "../Images/delete.svg";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AppointmentForm() {
  const { register, handleSubmit } = useForm();
  const [results, setResults] = useState([]);

  const onDelete = (result) => {
    setResults(results.filter((result) => result !== result));
  };

  const onSubmit = (data) => {
    setResults([data, ...results]);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="text"
        placeholder="Titel"
        {...register("title", { required: true })}
      />
      <FormInput type="date" {...register("date", { required: true })} />
      <FormInput
        type="time"
        placeholder="Uhrzeit"
        {...register("time", { required: true })}
      />

      <Button type="submit">Termin erstellen</Button>

      {results.map((result, id) => {
        return (
          <AppointmentCard key={id}>
            <Card>
              <h3>{result.title}</h3>
              <DeleteButton type="button" onClick={onDelete}>
                <img src={DeleteIcon} alt="" />
              </DeleteButton>
            </Card>
            <hr />
            <Card>
              <h4>{result.date}</h4>
              <h4>{result.time}</h4>
            </Card>
          </AppointmentCard>
        );
      })}
    </Container>
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

  grid-row-gap: 0.5rem;
  padding: 1rem;
`;

const AppointmentCard = styled.div`
  background-color: var(--primary-one-opacity);
  font-family: "CaveatBrush";
  font-size: 1.4rem;
  color: var(--secondary-one);
  margin-top: 1rem;
  padding: 0.5rem;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.01),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.01),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.01);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  hr {
    border: 2px solid var(--primary-one-opacity);
  }
`;

const FormInput = styled.input`
  font-family: "CaveatBrush";
  width: 16rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.9rem;
  background: transparent;
  color: var(--secondary-one);
  margin: 0.5rem 0 1rem 0;

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

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  color: var(--secondary-one);
  min-width: 30%;
  word-break: break-all;

  h3 {
    color: var(--secondary-two);
  }
`;
