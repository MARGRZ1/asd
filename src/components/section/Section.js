import styled from "styled-components";
import { constants } from "src/utils/constants";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === constants.DARK
      ? theme.colors.blue
      : theme.colors.white};
  width: 100vw;
  min-height: ${({ main }) => (main ? "100vh" : "auto")};
  padding: 4rem 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: ${({ img }) => (img ? "200%" : "auto")};
    height: ${({ img }) => (img ? "200%" : "auto")};
    transform: rotate(45deg);
    background-image: url(${({ img }) => (img ? img : "")});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 0.09;
    filter: blur(3px) drop-shadow(7px -4px 4px #000);
    z-index: 0;
    pointer-events: none;
  }

  @media (min-width: 500px) {
    &::before {
      background-size: ${({ img }) => (img ? "70%" : "auto")};
    }
  }

  @media (min-width: 800px) {
    &::before {
      background-size: ${({ img }) => (img ? "40%" : "auto")};
    }
  }

  @media (min-width: 1200px) {
    padding: ${({ main }) => (main ? "10rem 10rem 4rem" : "10rem")};

    &::before {
      background-size: ${({ img }) => (img ? "35%" : "auto")};
      background-size: ${({ img }) => (img ? "top center" : "auto")};
    }
  }
`;
