import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.size.md};
  color: ${({ theme }) => theme.colors.blue};

  @media (min-width: 800px) {
    padding: 3rem;
  }

  @media (min-width: 1400px) {
    padding: 4rem;
  }

  @media (min-width: 2000px) {
    font-size: ${({ theme }) => theme.size.lg};
  }
`;
