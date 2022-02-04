import styled from 'styled-components';
import Logo from '../Images/Logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '../GlobalStyles/GlobalStyles';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Container>
        <img src={Logo} alt="Logo" />

        <AnimatePresence exitBeforeEnter>
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Link to="profile/newprofile">
              <Button>Start</Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 19rem;
    margin: 1rem;
    filter: drop-shadow();
  }

  button {
    transform: scale(1);
    animation: pulse 2s infinite;

    @keyframes pulse {
      0% {
        transform: scale(0.95);
      }

      70% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(0.95);
      }
    }
  }
`;
