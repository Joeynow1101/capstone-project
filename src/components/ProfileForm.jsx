import { useEffect, useState } from "react";
import styled from "styled-components";
import DogAvatar from "../Images/DogAvatar.png";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";

const ProfileForm = () => {
  const localStorageUsers = loadFromLocal("_users");

  const [users, setUsers] = useState(localStorageUsers ?? []);

  useEffect(() => {
    saveToLocal("_users", users);
  }, [users]);

  const addUser = (user) => setUsers([...users, user]);

  return (
    <form onChange={addUser}>
      {users.map((user, index) => (
        <article key={index}>
          <ImgBox>
            <Avatar src={user.image} alt="Avatar" />
            <h2>{user.name}</h2>
          </ImgBox>
          <InfoBox>
            <p>Rasse:</p>
            <p>{user.breed}</p>
            <p>Alter:</p>
            <p>{user.age}</p>
            <p>Gewicht:</p>
            <p>{user.weight} Kg</p>
            <p>Aktivität:</p>
            <p>{user.activity}</p>
          </InfoBox>
        </article>
      ))}
    </form>
  );
};

export default ProfileForm;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  h2 {
    font-family: "CaveatBrush";
    font-size: 2.5rem;
    color: var(--secondary-one);
  }
`;
const Avatar = styled.img`
  width: 10rem;
  border-radius: 50%;
  border: 1px solid var(--primary-one);
  margin: 2rem;
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 2rem;

  align-items: start;
  max-width: 80%;
  margin: auto;
  margin-top: 2rem;

  p {
    color: var(--secondary-one);
    font-size: 1.5rem;
  }
`;
