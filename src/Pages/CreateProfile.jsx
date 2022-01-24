import ProfileEdit from "../components/ProfileEdit";
import Navbar from "../components/Navbar";
import Header from "../components/Header";


const CreateProfile = () => {
  

 
  return (
    <>
      <Header titleText={"Profil"} />

      <ProfileEdit></ProfileEdit>
      <Navbar />
    </>
  );
};

export default CreateProfile;
