import Navbar from "../components/Navbar";
import Header from "../components/Header";
import VaccinationList from "../components/VaccinationList";
import { motion } from "framer-motion";

function Vaccination() {
  return (
    <>
        <Header titleText={"Impfungen"} />
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <VaccinationList />
      </motion.div>
        <Navbar />
    </>
  );
}

export default Vaccination;
