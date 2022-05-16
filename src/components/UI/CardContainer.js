import styled from "styled-components";
import { Paragraph } from "./Paragraph";

const StyledCardContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin: 4rem 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`;

const StyledStep = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  pointer-events: none;
`;

const StyledText = styled.div`
  padding: 1rem;
  z-index: 2;

  @media (min-width: 600px) {
    padding: 2rem;
  }

  @media (min-width: 2000px) {
    padding: 3rem;
  }
`;

const StyledBackgroundChar = styled.span`
  font-size: 10rem;
  opacity: 0.2;
  pointer-events: none;
`;

export const CardContainer = ({ item: { text, step } }) => {
  return (
    <StyledCardContainer>
      <StyledText>
        <Paragraph>{text}</Paragraph>
      </StyledText>
      <StyledStep>
        <StyledBackgroundChar>{step}</StyledBackgroundChar>
      </StyledStep>
    </StyledCardContainer>
  );
};
