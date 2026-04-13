import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import ProfileEdit from '../components/ProfileEdit';
import { motion } from 'framer-motion';

function Profile() {
  const [editingUser, setEditingUser] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (user, index) => {
    setEditingUser(user);
    setEditingIndex(index);
  };

  const handleEditDone = () => {
    setEditingUser(null);
    setEditingIndex(null);
  };

  return (
    <>
      <Header titleText={'Profil'} />
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {editingUser ? (
          <ProfileEdit
            existingUser={editingUser}
            existingIndex={editingIndex}
            onEditDone={handleEditDone}
          />
        ) : (
          <ProfileForm onEdit={handleEdit} />
        )}
      </motion.div>
      <Navbar />
    </>
  );
}

export default Profile;
