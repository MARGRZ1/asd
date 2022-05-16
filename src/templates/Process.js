import { Section } from "src/components/section/Section";
import { SectionTitle } from "src/components/section/SectionTitle";
import { texts } from "src/utils/texts";
import { CardContainer } from "src/components/UI/CardContainer";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    width: 60%;
  }
`;

export const Process = () => (
  <Section main={false}>
    <SectionTitle>{texts.orderProcess.heading}</SectionTitle>
    <ContentContainer>
      {texts.orderProcess.steps.map((item, index) => (
        <CardContainer key={index} item={item} />
      ))}
    </ContentContainer>
  </Section>
);
