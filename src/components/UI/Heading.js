import { headingSentence, letter } from "./TextsAniamtion";
import { motion } from "framer-motion";
import styled from "styled-components";
import { constants } from "src/utils/constants";

const StyledHeading = styled(motion.h3)`
  color: ${({ theme, color }) =>
    color === constants.LIGHT ? theme.colors.white : theme.colors.blue};
  font-size: ${({ theme }) => theme.size.md};
  font-weight: regular;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.size.lg};
  }

  @media (min-width: 2000px) {
    font-size: ${({ theme }) => theme.size.ultra};
  }
`;

export const AnimatedHeading = ({ children, color }) => (
  <StyledHeading
    color={color}
    variants={headingSentence}
    initial="hidden"
    animate="show"
  >
    {children.split("").map((char, index) => {
      return (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      );
    })}
  </StyledHeading>
);

export const Heading = ({ children, color }) => (
  <StyledHeading color={color}>{children}</StyledHeading>
);
