import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({
  showModal,
  toggleModal,
  profileImages,
  onAddProfileImage,
}) => {
  return (
    <AnimatePresence>
      {showModal && (
        <Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleModal}
        >
          <ModalBox onClick={(e) => e.stopPropagation()}>
            {profileImages.map((profileImage, index) => (
              <div key={index}>
                <img
                  src={profileImage.image}
                  alt="ProfilImage"
                  onClick={() => {
                    toggleModal();
                    onAddProfileImage(profileImage.image);
                  }}
                />
              </div>
            ))}
          </ModalBox>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalBox = styled.div`
  width: 25rem;
  max-height: 80vh;
  overflow-y: auto;
  background-color: #7d6e5b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 1rem;
  padding: 1.5rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    cursor: pointer;
    border: 3px solid transparent;
    transition: border-color 0.2s;

    &:hover {
      border-color: var(--primary);
    }
  }
`;
