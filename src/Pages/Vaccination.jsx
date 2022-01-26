import Navbar from "../components/Navbar";
import Header from "../components/Header";
import VaccinationList from "../components/VaccinationList";

function Vaccination() {
  return (
    <>
      <Header titleText={"Impfungen"} />
      <VaccinationList />
      <Navbar />
    </>
  );
}

export default Vaccination;
