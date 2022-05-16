import { motion } from "framer-motion";
import styled from "styled-components";

export const InputContainer = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: ${({ direction }) => (direction === "column" ? "20rem" : "8rem")};
  overflow: hidden;
`;
