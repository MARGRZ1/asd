import { motion } from "framer-motion";
import styled from "styled-components";
import RobotoBold from "src/assets/fonts/roboto.bold.ttf";
import { constants } from "src/utils/constants";

const titleVariants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Title = styled(motion.h1)`
  @font-face {
    font-family: "Roboto";
    font-weight: bold;
    src: url(${RobotoBold}) format("truetype");
  }

  color: ${({ theme, color }) =>
    color === constants.LIGHT ? theme.colors.white : theme.colors.blue};
  text-align: center;
  font-size: ${({ theme }) => theme.size.lg};

  @media (min-width: 1200px) {
    text-align: left;
    align-self: flex-start;
    font-size: ${({ theme }) => theme.size.ultra};
  }

  @media (min-width: 2000px) {
    font-size: ${({ theme }) => theme.size.xultra};
  }
`;

export const SectionTitle = (props) => (
  <Title variants={titleVariants} initial="hidden" animate="show" {...props} />
);
