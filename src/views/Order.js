import { Section } from "src/components/section/Section";
import { SectionTitle } from "src/components/section/SectionTitle";
import { Overflow } from "src/components/UI/Overflow";
import CardBackgroundImage from "src/assets/images/Card-Black.svg";
import { constants } from "src/utils/constants";
import { texts } from "src/utils/texts";
import { OrderForm } from "src/templates/OrderForm";

export const Order = ({ handlePaymentPrice }) => (
  <Overflow>
    <Section
      main={true}
      backgroundColor={constants.DARK}
      img={CardBackgroundImage}
    >
      <SectionTitle color={constants.LIGHT}>{texts.order.heading}</SectionTitle>
      <OrderForm handlePaymentPrice={handlePaymentPrice} />
      <div></div>
    </Section>
  </Overflow>
);
