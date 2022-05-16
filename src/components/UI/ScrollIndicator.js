import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const indicatorVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const upDown = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  90%, 100% {
    transform: translate(-50%, 120%); 
  }
`;

const Border = styled(motion.div)`
  width: 16px;
  height: 30px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    & div {
      animation: none;
      height: 70%;
    }
  }
`;

const Dot = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 30%;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${upDown} 0.5s ease-in infinite alternate;
  transition: 0.3s ease-out;
`;

export const ScrollIndicator = ({ ...props }) => (
  <Border
    variants={indicatorVariants}
    initial="hidden"
    animate="show"
    {...props}
  >
    <Dot />
  </Border>
);
