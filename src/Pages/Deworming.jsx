import Navbar from "../components/Navbar";
import Header from "../components/Header";
import DewormingList from "../components/DewormingList";

function Deworming() {
  return (
    <>
      <Header titleText={"Entwurmung"} />
      <DewormingList />
      <Navbar />
    </>
  );
}

export default Deworming;
