import styled from "styled-components";
import AvatarData from "./AvatarData";
const Modal = ({ showModal, toggleModal }) => {
  return (
    <Container>
      {showModal && (
        <ModalBox>
          <Button onClick={toggleModal}>-</Button>
          <AvatarData></AvatarData>
        </ModalBox>
      )}
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13rem;
`;

const ModalBox = styled.div`
  position: absolute;
  width: 22rem;
  height: 35rem;
  background-color: var(--secondary-one);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 1rem;
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
