import DogAvatar from "../Images/DogAvatar.png";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";


function AvatarChanger() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
      };

  return (
    <>
      <AvatarBox>
          <img src={DogAvatar} alt="" />
      <Modal showModal={showModal} toggleModal={toggleModal}>
      
      </Modal>
      <Button onClick={toggleModal}  >+</Button>
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
