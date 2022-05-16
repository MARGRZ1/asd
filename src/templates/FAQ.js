import { Section } from "src/components/section/Section";
import { SectionTitle } from "src/components/section/SectionTitle";
import { constants } from "src/utils/constants";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../assets/styles/faq.css";
import { texts } from "src/utils/texts";

export const Faq = () => (
  <Section backgroundColor={constants.DARK}>
    <SectionTitle color={constants.LIGHT}>{texts.faq.heading}</SectionTitle>
    <Accordion>
      {texts.faq.accordionItems.map(({ q, a }, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>{q}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{a}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </Section>
);
