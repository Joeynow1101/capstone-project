import ProfileEdit from '../components/ProfileEdit';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';

const Newprofile = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Header titleText={'Profil'} />
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <ProfileEdit />
        </motion.div>
        <Navbar />
      </AnimatePresence>
    </>
  );
};

export default Newprofile;
