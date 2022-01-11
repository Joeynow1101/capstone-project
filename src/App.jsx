import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Feeding from "./Pages/Feeding";
import Appointment from "./Pages/Appointment";
import Notes from "./Pages/Notes";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="feeding" element={<Feeding />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="notes" element={<Notes />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
