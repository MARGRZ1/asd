import { Section } from "src/components/section/Section";
import { SectionTitle } from "src/components/section/SectionTitle";
import { ScrollIndicator } from "src/components/UI/ScrollIndicator";
import { constants } from "src/utils/constants";
import { texts } from "src/utils/texts";
import { AnimatedParagraph } from "src/components/UI/Paragraph";
import { Button } from "src/components/UI/Button";
import { AnimatedHeading } from "src/components/UI/Heading";
import { CardComponent as Card } from "src/components/UI/Card";
import CardBackgroundImage from "src/assets/images/Card-Black.svg";
import { Overflow } from "src/components/UI/Overflow";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 30vh;
  align-self: flex-start;

  @media (min-width: 650px) {
    display: flex;
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    height: 35vh;
  }
`;

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

export const Main = () => (
  <Overflow>
    <Section
      main={true}
      backgroundColor={constants.DARK}
      img={CardBackgroundImage}
    >
      <SectionTitle color={constants.LIGHT}>{texts.main.logo}</SectionTitle>
      <Container>
        <ContentContainer>
          <AnimatedHeading color={constants.LIGHT}>
            {texts.main.heading}
          </AnimatedHeading>
          <AnimatedParagraph color={constants.LIGHT}>
            {texts.main.desc}
          </AnimatedParagraph>
          <Link to="/order">
            <Button>Zamów</Button>
          </Link>
        </ContentContainer>
        <ContentContainer>
          <Card />
        </ContentContainer>
      </Container>
      <ScrollIndicator onClick={scrollDown} />
    </Section>
  </Overflow>
);
