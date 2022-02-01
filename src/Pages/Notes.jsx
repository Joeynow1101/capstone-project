import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewNotes from "../components/NewNotes";
import { motion } from "framer-motion";

function Notes() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Header titleText={"Notizen"} />
        <NewNotes></NewNotes>
        <Navbar />
      </motion.div>
    </>
  );
}

export default Notes;
