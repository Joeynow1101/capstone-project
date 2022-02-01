import Navbar from "../components/Navbar";
import Header from "../components/Header";
import DewormingList from "../components/DewormingList";
import { motion } from "framer-motion";

function Deworming() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Header titleText={"Entwurmung"} />
        <DewormingList />
        <Navbar />
      </motion.div>
    </>
  );
}

export default Deworming;
