import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledLabel = styled.label`
  border: 2px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.blue : theme.colors.white};
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.white : theme.colors.blue};
  padding: 5px 5px;
  margin: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-out;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.size.md};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
`;

export const Checkbox = ({
  checked,
  label,
  checkedBox,
  handleClick,
  ...props
}) => {
  const isChecked = checkedBox === label;

  return (
    <CheckboxContainer onClick={() => handleClick(label)}>
      <StyledLabel isChecked={isChecked}>
        <HiddenCheckbox {...props} />
        {label}
      </StyledLabel>
    </CheckboxContainer>
  );
};
