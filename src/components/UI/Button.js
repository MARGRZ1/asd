import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.size.sm};
  padding: 10px 45px;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  pointer-events: ${({ disabled }) => disabled && "none"};

  &:hover {
    padding: 10px 75px 10px 15px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }

  &::before {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    content: "";
    width: 20%;
    height: 2px;
    background: white;
    opacity: 0;
    pointer-events: none;
    border-radius: 5px;
  }

  &:hover {
    &::before {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.size.md};
  }

  @media (min-width: 2000px) {
    font-size: ${({ theme }) => theme.size.lg};
  }
`;

export const Button = ({ children, ...props }) => (
  <StyledButton
    initial={{ scaleX: 0, originX: 0, opacity: 0 }}
    animate={{
      scaleX: 1,
      originX: 0,
      opacity: 1,
      transition: { delay: 0.6 },
    }}
    {...props}
  >
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.9 } }}
    >
      {children}
    </motion.span>
  </StyledButton>
);

//TODO : Button styles
export const StyledOrderButton = styled(StyledButton)`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")}
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")}

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.white};
    color: ${({ theme, disabled }) => !disabled && theme.colors.blue};
    border-bottom: 2px solid ${({ theme, disabled }) =>
      !disabled && theme.colors.blue};
  }

  &::before {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const OrderButton = ({ children, ...props }) => (
  <StyledOrderButton
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.3 } }}
    {...props}
  >
    {children}
  </StyledOrderButton>
);
