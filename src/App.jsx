import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Appointment from "./Pages/Appointment";
import Notes from "./Pages/Notes";
import Profile from "./Pages/Profile";
import Season from "./Pages/Season";
import Vaccination from "./Pages/Vaccination"
import Deworming from "./Pages/Deworming"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Info/" element={<Info />} />
        <Route path="/Season" element={<Season />} />
        <Route path="/Vaccination" element={<Vaccination />} />
        <Route path="/Deworming" element={<Deworming />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/*" element={<h2>Page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
