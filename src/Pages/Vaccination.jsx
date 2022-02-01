import Navbar from "../components/Navbar";
import Header from "../components/Header";
import VaccinationList from "../components/VaccinationList";
import { motion } from "framer-motion";

function Vaccination() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Header titleText={"Impfungen"} />
        <VaccinationList />
        <Navbar />
      </motion.div>
    </>
  );
}

export default Vaccination;
