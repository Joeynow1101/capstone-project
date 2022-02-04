import { Button, DeleteButton } from '../GlobalStyles/GlobalStyles';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewAppointment() {
  const initialAppointments = {
    title: '',
    date: '',
    time: '',
  };
  const [appointment, setAppointment] = useState(initialAppointments);
  const localStorageAppointments = loadFromLocal('_appointments');
  const [appointments, setAppointments] = useState(
    localStorageAppointments ?? []
  );

  useEffect(() => {
    saveToLocal('_appointments', appointments);
  }, [appointments]);

  const handleDelete = (deleteAppointment) => {
    const newAppointmentList = appointments.filter(
      (appointment) => appointment !== deleteAppointment
    );
    setAppointments(newAppointmentList);
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
    <AnimatePresence>
      <Form onSubmit={handleSubmit}>
        <AppointmentForm
          type="text"
          name="title"
          placeholder="Titel"
          onChange={handleChange}
          value={appointment.title}
          required={true}
        ></AppointmentForm>
        <AppointmentForm
          type="date"
          name="date"
          placeholder="Datum"
          onChange={handleChange}
          value={appointment.date}
          required={true}
        ></AppointmentForm>
        <AppointmentForm
          type="time"
          name="time"
          placeholder="Uhrzeit"
          onChange={handleChange}
          value={appointment.time}
          required={true}
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
      {appointments.map((appointment, index) => (
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          key={index}
        >
          <CardBox>
            <div>
              <h3>{appointment.title}</h3>
              <p>{appointment.date}</p>
              <p> {appointment.time}</p>
            </div>
            <DeleteButton onClick={() => handleDelete(appointment)}>
              &#10004;
            </DeleteButton>
          </CardBox>
        </motion.div>
      ))}
    </AnimatePresence>
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
  button {
    margin-bottom: 1rem;
  }
`;

const CardBox = styled.div`
  position: relative;
  background-color: var(--primary-one-opacity);
  font-family: 'CaveatBrush';
  font-size: 1.4rem;
  color: var(--secondary-one);
  margin-top: 1rem;
  padding: 0.5rem;
  width: 80%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid #3e3e3e18;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  margin-bottom: 1rem;

  button {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;

const AppointmentForm = styled.input`
  font-family: 'CaveatBrush';
  width: 16rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.9rem;
  background: transparent;
  color: var(--secondary-one);
  margin: 0.5rem 0 1rem 0;

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
