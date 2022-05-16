import { Section } from "src/components/section/Section";
import { SectionTitle } from "src/components/section/SectionTitle";
import { Overflow } from "src/components/UI/Overflow";
import CardBackgroundImage from "src/assets/images/Card-Black.svg";
import { constants } from "src/utils/constants";
import { texts } from "src/utils/texts";
import { useEffect, useState } from "react";
import Loader from "src/components/UI/Loader";
import PaymentInstructions from "src/components/UI/PaymentInstructions";
import { addresses as WALLET } from "src/utils/addresses";
import { OrderModal } from "src/components/UI/OrderModal";

const loadWallet = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(WALLET[Math.floor(Math.random() * WALLET.length)]);
    }, 1000);
  });
};

export const Payment = ({ price }) => {
  const [address, setAddress] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    loadWallet()
      .then((data) => setAddress(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Overflow>
      <Section
        main={true}
        backgroundColor={constants.DARK}
        img={CardBackgroundImage}
      >
        <SectionTitle color={constants.LIGHT}>
          {texts.payment.heading}
        </SectionTitle>
        {isLoading ? (
          <OrderModal>
            <Loader />
          </OrderModal>
        ) : (
          <PaymentInstructions price={price} address={address} />
        )}
        <div></div>
      </Section>
    </Overflow>
  );
};
