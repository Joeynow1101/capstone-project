import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewNotes from "../components/NewNotes";

function Notes() {
  return (
    <>
      <Header titleText={"Notizen"} />
      <NewNotes></NewNotes>
      <Navbar />
    </>
  );
}

export default Notes;
