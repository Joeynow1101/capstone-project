import Header from "../components/Header";
import Navbar from "../components/Navbar";

import SeasonList from "../components/SeasonList";

function Season() {
  return (
    <>
      <Header titleText={"Läufigkeit"} />
      <SeasonList />
      <Navbar />
    </>
  );
}

export default Season;
