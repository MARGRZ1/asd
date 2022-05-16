import { motion } from "framer-motion";
import styled from "styled-components";
import { texts } from "src/utils/texts";
import { Paragraph } from "./Paragraph";
import { Input } from "./Input";
import { Button } from "./Button";
import { OrderModal } from "./OrderModal";

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const StyledButtonBlue = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.blue};
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  }

  &::before {
    background: ${({ theme }) => theme.colors.blue};
  }
`;

const InstructionWrapper = styled(motion.ol)`
  width: 80%;
  margin: 25px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.size.sm};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.size.md};
  }

  @media (min-width: 2000px) {
    font-size: ${({ theme }) => theme.size.lg};
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 5px;
`;

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const listItem = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  hidden: {
    opacity: 0,
    y: 5,
    transition: {
      when: "afterChildren",
    },
  },
};

const PAY_URL = "https://coincher.com";

const PaymentInstructions = ({ address, price }) => {
  const handleCopy = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(address);
    alert("Skopiowano adres portfela");
  };

  const handlePayment = () => {
    window.open(PAY_URL, "_blank");
  };

  return (
    <OrderModal>
      <StyledParagraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8 } }}
      >
        Adres portfela BTC:
      </StyledParagraph>
      <Input
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        value={address}
        readOnly
      />
      <StyledButton onClick={handleCopy} type="button">
        Kopiuj
      </StyledButton>
      <InstructionWrapper initial="hidden" animate="visible" variants={list}>
        {texts.payment.instructions.map((item, index) => (
          <motion.li key={index} variants={listItem}>
            {item}
          </motion.li>
        ))}
      </InstructionWrapper>
      <StyledButtonBlue type="button" onClick={handlePayment}>
        Płatność: {price}€
      </StyledButtonBlue>
    </OrderModal>
  );
};

export default PaymentInstructions;
