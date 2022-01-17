import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function NoteForm({ setInputText, setNotes, notes, inputText }) {
  function handleChange(event) {
    setInputText(event.target.value);
  }

  const handleSubmit = () => {
    if (inputText !== "") {
      setNotes([...notes, { text: inputText, completed: false, id: uuidv4() }]);
      setInputText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <div>
        <NoteInput
          value={inputText}
          onChange={handleChange}
          type="text"
          placeholder="Neue Notiz..."
          onKeyPress={handleKeyDown}
        />
        <Button onClick={handleSubmit} type="submit">
          +
        </Button>
      </div>
    </>
  );
}

export default NoteForm;

const NoteInput = styled.input`
  font-family: "CaveatBrush";
  width: 18rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.3rem;
  background: transparent;
  color: var(--secondary-one);
  margin: 2rem 0 1rem 0;

  &::placeholder {
    font-family: "CaveatBrush";
    font-size: 1.5rem;
    color: var(--secondary-one);
  }
`;

const Button = styled.button`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  color: var(--secondary-one);
  background-color: var(--primary-one);
  border: none;
  text-decoration: none;
`;
