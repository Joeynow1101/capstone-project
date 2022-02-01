import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewAppointment from "../components/NewAppointment";

function Appointment() {
  return (
    <>
      <Header titleText={"Termine"} />
      <NewAppointment></NewAppointment>
      <Navbar />
    </>
  );
}

export default Appointment;
