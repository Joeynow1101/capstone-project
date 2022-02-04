import styled from 'styled-components';
import Note from '../components/Note';
import { motion, AnimatePresence } from 'framer-motion';

function NoteList({ setNotes, notes }) {
  return (
    <AnimatePresence>
      <NewNoteList>
        <ul>
          {notes.map((note) => (
            <motion.div
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              key={note.id}
            >
              <Note
                setNotes={setNotes}
                notes={notes}
                text={note.text}
                id={note.id}
                note={note}
              />
            </motion.div>
          ))}
        </ul>
      </NewNoteList>
    </AnimatePresence>
  );
}

export default NoteList;

const NewNoteList = styled.div`
  font-family: 'CaveatBrush';
  font-size: 1.5rem;
  margin: 1rem;

  ul {
    min-width: 30%;
    list-style: none;
  }
`;
