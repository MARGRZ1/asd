import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledOrderModal = styled(motion.form)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderModal = ({ children, ...props }) => (
  <StyledOrderModal
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
    autoComplete="off"
    {...props}
  >
    {children}
  </StyledOrderModal>
);
