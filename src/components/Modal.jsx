import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({
  showModal,
  toggleModal,
  profileImages,
  onHandleChange,
  onAddProfileImage,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Container>
        {showModal && (
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <ModalBox>
              {profileImages.map((profileImage, index) => (
                <div key={index}>
                  <img
                    src={profileImage.image}
                    alt="ProfilImage"
                    onClick={() => {
                      toggleModal();
                      onAddProfileImage(profileImage.image);
                    }}
                    onChange={onHandleChange}
                  />
                </div>
              ))}
            </ModalBox>
          </motion.div>
        )}
      </Container>
    </AnimatePresence>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 25rem;
  height: 56rem;
  background-color: #7d6e5b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 1rem;
  margin-top: 24rem;
  transform: scale(0.7);
`;
