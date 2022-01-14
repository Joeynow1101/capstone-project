import styled from "styled-components";
import DeleteIcon from "../Images/delete.svg";

function Note({ text, notes, setNotes, note }) {
  const deleteHandler = () => {
    setNotes(notes.filter((element) => element.id !== note.id));
  };

  return (
    <NoteBox>
      <li>{text}</li>
      <button onClick={deleteHandler}>
        <img src={DeleteIcon} alt="" />
      </button>
    </NoteBox>
  );
}

export default Note;

const NoteBox = styled.div`
  margin: 1rem;
  background: transparent;
  font-size: 1.5rem;
  color: var(--secondary-one);
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  button {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    color: var(--primary-two);
    background-color: var(--primary-one);
    border: none;
    margin-left: 2rem;
    img {
      width: 1rem;
    }
  }
`;
