import GlobalStyles, {
  Button,
  DeleteButton,
} from "../GlobalStyles/GlobalStyles";
import DeleteIcon from "../Images/delete.svg";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { saveToLocal, loadFromLocal } from "../lib/localStorage";

export default function NewAppointment() {
  const initialAppointments = {
    title: "",
    date: "",
    time: "",
  };

  const [appointment, setAppointment] = useState(initialAppointments);
  const localStorageProducts = loadFromLocal("_appointments");
  const [appointments, setAppointments] = useState(localStorageProducts ?? []);

  useEffect(() => {
    saveToLocal("_appointments", appointments);
  }, [appointments]);

  const handleDelete = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;

    setAppointment({
      ...appointment,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppointments([...appointments, appointment]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <AppointmentForm
          type="text"
          name="title"
          placeholder="Titel"
          onChange={handleChange}
          value={appointment.title}
        ></AppointmentForm>
        <AppointmentForm
          type="date"
          name="date"
          placeholder="Datum"
          onChange={handleChange}
          value={appointment.date}
        ></AppointmentForm>
        <AppointmentForm
          type="time"
          name="time"
          placeholder="Uhrzeit"
          onChange={handleChange}
          value={appointment.time}
        ></AppointmentForm>

        <Button type="submit">Termin erstellen</Button>
        <Button
          type="reset"
          onClick={() => {
            setAppointment(initialAppointments);
          }}
        >
          Zurücksetzen
        </Button>
      </Form>

      <Card>
        {appointments.map((appointment, id) => (
          <CardBox key={id}>
            <div>
              <h3>{appointment.title}</h3>
              <p>{appointment.date}</p>
              <p> {appointment.time}</p>
            </div>
            <button onClick={handleDelete}>löschen</button>
          </CardBox>
        ))}
      </Card>
    </>
  );
}

const Form = styled.form`
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

const CardBox = styled.div`
  background-color: var(--primary-one-opacity);
  font-family: "CaveatBrush";
  font-size: 1.4rem;
  color: var(--secondary-one);
  margin-top: 1rem;
  padding: 0.5rem;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  hr {
    border: 2px solid var(--primary-one-opacity);
  }
`;

const AppointmentForm = styled.input`
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
  flex-direction: column;
  margin: 0.5rem;
  color: var(--secondary-one);
  min-width: 30%;
  word-break: break-all;

  h3 {
    color: var(--secondary-two);
  }
`;
