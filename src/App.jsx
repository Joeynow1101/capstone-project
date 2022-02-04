import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Info from './Pages/Info';
import Appointment from './Pages/Appointment';
import Notes from './Pages/Notes';
import Profile from './Pages/Profile';
import Season from './Pages/Season';
import Vaccination from './Pages/Vaccination';
import Deworming from './Pages/Deworming';
import ProfileEdit from './components/ProfileEdit';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="profile/newprofile" element={<ProfileEdit />} />
          <Route path="info/*" element={<Info />}></Route>
          <Route path="info/season" element={<Season />}></Route>
          <Route path="info/deworming" element={<Deworming />}></Route>
          <Route path="info/vaccination" element={<Vaccination />}></Route>
          <Route path="appointment" element={<Appointment />} />
          <Route path="notes" element={<Notes />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
