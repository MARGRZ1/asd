import styled from "styled-components";
import { motion } from "framer-motion";
import { Heading } from "./Heading";

const StyledPrice = styled.span`
  font-size: ${({ theme }) => theme.size.md};
  color: ${({ theme }) => theme.colors.blue};
  margin-left: 5px;
`;

const StyledPriceContainer = styled(motion.div)`
  margin-bottom: 2rem;
`;

export const Price = ({ price }) => (
  <StyledPriceContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.4, delay: 1 } }}
  >
    <Heading>
      Cena:
      <StyledPrice>{price}</StyledPrice>€
    </Heading>
  </StyledPriceContainer>
);
