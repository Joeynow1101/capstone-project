import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewAppointment from "../components/NewAppointment";
import { motion } from "framer-motion";

function Appointment() {
  return (
    <>
      <Header titleText={"Termine"} />
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <NewAppointment></NewAppointment>
      </motion.div>
      <Navbar />
    </>
  );
}

export default Appointment;
