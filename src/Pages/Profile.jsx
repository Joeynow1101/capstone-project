import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import { motion } from "framer-motion";

function Profile() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        
      >
        <Header titleText={"Profil"} />

        <ProfileForm></ProfileForm>

        <Navbar />
      </motion.div>
    </>
  );
}

export default Profile;
