import styled from "styled-components";

const Modal = ({ showModal, toggleModal, profileImage }) => {
  return (
    <Container>
      {showModal && (
        <ModalBox>
          {profileImage.map((profileImage, index) => (
            <div key={index}>
              <img
                src={profileImage.image}
                alt="ProfilImage"
                onClick={toggleModal}
              />
            </div>
          ))}
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

  position: absolute;
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
  top: -6rem;
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
