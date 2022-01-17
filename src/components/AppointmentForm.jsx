import styled from "styled-components";

function AppointmentForm() {
  return (
    <>
      <Container>
        <AppointmentFormStyle type="text" placeholder="Titel..." />
        <AppointmentFormStyle type="date" placeholder="Datum..." />
        <AppointmentFormStyle type="time" placeholder="Uhrzeit..." />
      </Container>
    </>
  );
}

export default AppointmentForm;

const Container = styled.div`
   display: grid;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 20rem;
 
  
  
  
  padding: 0.5rem;
`;

const AppointmentFormStyle = styled.input`
  font-family: "CaveatBrush";
  width: 18rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.3rem;
  background: transparent;
  color: var(--secondary-one);
  margin: 1rem 0 1rem 0;

  &::placeholder {
    font-family: "CaveatBrush";
    font-size: 1.5rem;
    color: var(--secondary-one);
  }
`;
