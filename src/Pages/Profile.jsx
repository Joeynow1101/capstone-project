import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import { motion } from "framer-motion";

function Profile() {
  return (
    <>
      <Header titleText={"Profil"} />
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <ProfileForm></ProfileForm>
      </motion.div>
      <Navbar />
    </>
  );
}

export default Profile;
