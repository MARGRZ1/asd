import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const BackArrow = styled.div`
  display: inline-block;
  align-self: flex-start;
  margin: 0 0 2rem 1rem;
  width: 10px;
  height: 10px;
  background: transparent;
  border-top: 2px solid ${({ theme }) => theme.colors.blue};
  border-left: 2px solid ${({ theme }) => theme.colors.blue};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: transparent;
  transform: rotate(-45deg);
  cursor: pointer;
  position: relative;

  &::after {
    content: "Wróć";
    font-size: ${({ theme }) => theme.size.sm};
    display: block;
    position: absolute;
    top: 190%;
    left: 105%;
    color: ${({ theme }) => theme.colors.blue};
    transform: rotate(45deg) translate(-10px);
    transition: 0.3s ease-out;
    opacity: 0;
  }

  &:hover {
    &::after {
      content: "Wróć";
      display: block;
      position: absolute;
      top: 190%;
      left: 105%;
      color: ${({ theme }) => theme.colors.blue};
      transform: rotate(45deg) translate(0);
      opacity: 1;
    }
  }

  @media (min-width: 1200px) {
    width: 15px;
    height: 15px;
    font-size: ${({ theme }) => theme.size.md};

    &::after {
      top: 160%;
    }

    &:hover {
      &::after {
        top: 160%;
      }
    }
  }
`;

const BackButtonContainer = styled(motion.div)`
  display: block;
  width: 100%;
  text-align: left;
`;

export const BackButton = () => (
  <BackButtonContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
  >
    <Link to="/">
      <BackArrow />
    </Link>
  </BackButtonContainer>
);
