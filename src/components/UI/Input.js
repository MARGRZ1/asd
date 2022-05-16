import { motion } from "framer-motion";
import styled from "styled-components";

const StyledInput = styled(motion.input)`
  border: 2px solid ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.blue};
  border-radius: 5px;
  padding 5px 10px;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  transition: .2s ease-out;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
  }

  &::focus {
    border: 2px solid ${({ theme }) => theme.colors.gray} !important;
  }

  @media(min-width: 1200px) {
    font-size: ${({ theme }) => theme.size.md};
  }
`;

const StyledSpan = styled(motion.span)`
  color: ${({ theme }) => theme.colors.red};
`;

export const Input = ({
  name,
  placeholder,
  type,
  initial,
  animate,
  value,
  handleChange,
  min,
  max,
  error,
  ...props
}) => (
  <>
    <StyledInput
      initial={initial}
      animate={animate}
      type={type}
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      error={error}
      {...props}
    />
    {error && (
      <StyledSpan initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Niepoprawna wartość w polu
      </StyledSpan>
    )}
  </>
);
