import styled from "styled-components";
import Note from "../components/Note";

function NoteList({ setNotes, notes }) {
  return (
    <NewNoteList>
      <ul>
        {notes.map((note) => (
          <Note
            setNotes={setNotes}
            notes={notes}
            key={note.id}
            text={note.text}
            id={note.id}
            note={note}
          />
        ))}
      </ul>
    </NewNoteList>
  );
}

export default NoteList;

const NewNoteList = styled.div`
  font-family: "CaveatBrush";
  font-size: 1.5rem;
  margin: 1rem;
  

  ul {
    min-width: 30%;
  list-style: none;
  }
`;
