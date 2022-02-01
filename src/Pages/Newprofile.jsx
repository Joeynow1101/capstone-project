import ProfileEdit from "../components/ProfileEdit";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { motion } from "framer-motion";

const Newprofile = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <Header titleText={"Profil"} />
        <ProfileEdit></ProfileEdit>
        <Navbar />
      </motion.div>
    </>
  );
};

export default Newprofile;
