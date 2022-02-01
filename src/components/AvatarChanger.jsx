import DogAvatar from "../Images/DogAvatar.png";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
import AvatarData from "./AvatarData";
function AvatarChanger() {
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(AvatarData);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <AvatarBox>
        <img src={profileImage} alt="" />
        <Button onClick={toggleModal}>+</Button>
        <Modal
          showModal={showModal}
          toggleModal={toggleModal}
          profileImage={profileImage}
        ></Modal>
      </AvatarBox>
    </>
  );
}

export default AvatarChanger;

const AvatarBox = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  border: 5px solid var(--primary-one);
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    overflow: auto;
  }
`;

const Button = styled.button`
  position: absolute;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  color: var(--secondary-one);
  background-color: var(--primary-one);
  border: none;
  bottom: 0.2rem;
  right: 0.2rem;
`;
