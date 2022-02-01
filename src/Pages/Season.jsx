import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import SeasonList from "../components/SeasonList";

function Season() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Header titleText={"Läufigkeit"} />
        <SeasonList />
        <Navbar />
      </motion.div>
    </>
  );
}

export default Season;
