import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewAppointment from "../components/NewAppointment";
import { motion } from "framer-motion";

function Appointment() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Header titleText={"Termine"} />
        <NewAppointment></NewAppointment>
        <Navbar />
      </motion.div>
    </>
  );
}

export default Appointment;
