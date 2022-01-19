import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AppointmentForm from "../components/AppointmentForm"

function Appointment() {
  return (
    <>
      <Header titleText={"Termine"} />
      <AppointmentForm></AppointmentForm>
      <Navbar />
    </>
  );
}

export default Appointment;
