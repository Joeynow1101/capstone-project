import { useState, useEffect } from "react";
import styled from "styled-components";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";

function NewNotes() {
  const [inputText, setInputText] = useState("");
  const localStorageNotes = loadFromLocal("_notes");
  const [notes, setNotes] = useState(localStorageNotes ?? []);

  useEffect(() => {
    saveToLocal("_notes", notes);
  }, [notes]);

  return (
    <>
      <ContainerForm>
        <NoteForm
          inputText={inputText}
          notes={notes}
          setNotes={setNotes}
          setInputText={setInputText}
        />
      </ContainerForm>
      <ContainerList>
        <NoteList setNotes={setNotes} notes={notes}></NoteList>
      </ContainerList>
    </>
  );
}

export default NewNotes;

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
