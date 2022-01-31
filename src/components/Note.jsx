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
  -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  border-radius: 10px;
  border: 1px solid #3e3e3e18;
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

