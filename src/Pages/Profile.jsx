import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import ProfileEdit from "../components/ProfileEdit";

function Profile() {
  return (
    <>
      <Header titleText={"Profil"} />
     
      <ProfileForm></ProfileForm>

      <Navbar />
    </>
  );
}

export default Profile;
