import styled from "styled-components";
import DeleteIcon from "../Images/delete.svg";
import GlobalStyles, {
DeleteButton,
} from "../GlobalStyles/GlobalStyles";

function Note({ text, notes, setNotes, note }) {
  const deleteHandler = () => {
    setNotes(notes.filter((element) => element.id !== note.id));
  };

  return (
    <NoteBox>
      <span>{text}</span>
      <NoteFooter>
        <DeleteButton onClick={deleteHandler}>
          <img src={DeleteIcon} alt="DeleteIcon" />
        </DeleteButton>
      </NoteFooter>
    </NoteBox>
  );
}

export default Note;

const NoteBox = styled.div`
  background-color: var(--primary-one-opacity);
  margin-bottom: 1rem;
  padding: 0.5rem;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.01),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.01),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.01);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-wrap: break-word;

  span {
    color: var(--secondary-one);
  }
`;

const NoteFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

