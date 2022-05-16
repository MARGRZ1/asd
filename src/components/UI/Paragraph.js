import { motion } from "framer-motion";
import { paragraphSentence, letter } from "./TextsAniamtion";
import styled from "styled-components";
import { constants } from "src/utils/constants";

const StyledParagraph = styled(motion.p)`
  color: ${({ theme, color }) =>
    color === constants.LIGHT ? theme.colors.white : theme.colors.blue};
  font-size: ${({ theme }) => theme.size.sm};
  max-width: ${({ width }) => width + "px"};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.size.md};
  }

  @media (min-width: 2000px) {
    font-size: ${({ theme }) => theme.size.lg};
  }
`;

export const AnimatedParagraph = ({ children, color }) => (
  <StyledParagraph
    width={300}
    color={color}
    variants={paragraphSentence}
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
  </StyledParagraph>
);

export const Paragraph = ({ children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
);
