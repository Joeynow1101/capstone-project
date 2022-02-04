import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';

const ProfileForm = () => {
  const localStorageUsers = loadFromLocal('_users');

  const [users, setUsers] = useState(localStorageUsers ?? []);

  useEffect(() => {
    saveToLocal('_users', users);
  }, [users]);

  const addUser = (user) => setUsers([...users, user]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <form onChange={addUser}>
        {users.map((user, index) => (
          <article key={index}>
            <ImgBox>
              <Avatar src={user.image} alt="Avatar" />
              <h2>{user.name}</h2>
            </ImgBox>
            <InfoBox>
              <h2>Rasse:</h2>
              <p>{user.breed}</p>
              <h2>Alter:</h2>
              <p>{user.age}</p>
              <h2>Gewicht:</h2>
              <p>{user.weight} Kg</p>
              <h2>Aktivität:</h2>
              <p>{user.activity}</p>
              <h2>Geschlecht:</h2>
              <p>{user.gender}</p>
            </InfoBox>
          </article>
        ))}
      </form>
    </motion.div>
  );
};

export default ProfileForm;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h2 {
    font-family: 'CaveatBrush';
    font-size: 2.8rem;
    color: var(--secondary-one);
  }
`;
const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 5px solid var(--primary-one);
  margin: 1rem;
  background-color: #ffffff88;
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: justify;
  grid-row-gap: 1.5rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  align-items: start;
  width: 90%;
  margin: auto;
  margin-top: 1.2rem;
  h2 {
    margin: auto;
    color: var(--secondary-one);
    font-size: 1.7rem;
  }
  p {
    color: var(--secondary-one);
    font-size: 1.5rem;
    margin: auto;
  }
`;
