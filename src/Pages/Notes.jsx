import Navbar from '../components/Navbar';
import Header from '../components/Header';
import NewNotes from '../components/NewNotes';
import { motion } from 'framer-motion';

function Notes() {
  return (
    <>
      <Header titleText={'Notizen'} />
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <NewNotes />
      </motion.div>
      <Navbar />
    </>
  );
}

export default Notes;
