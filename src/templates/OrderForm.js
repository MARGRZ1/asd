import { OrderModal } from "src/components/UI/OrderModal";
import { InputContainer } from "src/components/UI/InputContainer";
import { Input } from "src/components/UI/Input";
import { OrderButton } from "src/components/UI/Button";
import { Checkbox } from "src/components/UI/Checkbox";
import { useEffect, useState } from "react";
import { BackButton } from "src/components/UI/BackButton";
import { Price } from "src/components/UI/Price";
import { NameValidator } from "src/utils/Validators/NameValidator";
import { EmailValidator } from "src/utils/Validators/EmailValidator";
import { InpostValidator } from "src/utils/Validators/InpostValidator";
import { AmountValidator } from "src/utils/Validators/AmountValidator";
import { useNavigate } from "react-router-dom";

const BASE_PRICE = 160;
const getTotalPrice = (amount) => BASE_PRICE * amount;

const checkFormValidity = (array) => array.every((item) => !item);
const checkFormComplety = (array) => !array.some((item) => item === "");

const handleValid = (name, inpost, mail, amount) => {
  return checkFormValidity([
    name?.error,
    inpost?.error,
    mail?.error,
    amount?.error,
  ]);
};

const handleCompletion = (name, inpost, mail, amount) => {
  return checkFormComplety([
    name?.value,
    inpost?.value,
    mail?.value,
    amount?.value,
  ]);
};

export const OrderForm = ({ handlePaymentPrice }) => {
  const navigate = useNavigate();
  const [name, setName] = useState({ value: "", error: false });
  const [inpost, setInpost] = useState({ value: "", error: false });
  const [mail, setMail] = useState({ value: "", error: false });
  const [amount, setAmount] = useState({ value: 1, error: false });
  const [box, setBox] = useState("PKO");
  const [totalPrice, setTotalPrice] = useState(getTotalPrice(amount.value));
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault(e);
    const isFormValid = handleValid();
    const isFormCompleted = handleCompletion();
    if (!isFormValid || !isFormCompleted) return;
    else navigate("/payment");
  };

  const setCurrentBox = (val) => {
    setBox(val);
  };

  const handleNameChange = ({ target: { value } }) => {
    setName({ error: !NameValidator(value), value: value });
  };

  const handleInpostChange = ({ target: { value } }) => {
    setInpost({ error: !InpostValidator(value), value: value });
  };

  const handleMailChange = ({ target: { value } }) => {
    setMail({ error: !EmailValidator(value), value: value });
  };

  const handleAmountChange = ({ target: { value } }) => {
    const correctValues = [1, 2, 3, 4, 5];
    const amount = parseInt(value[value.length - 1]);

    if (correctValues.includes(amount)) {
      setAmount({ error: !AmountValidator(amount), value: amount });
      setTotalPrice(getTotalPrice(amount));
    }
  };

  useEffect(() => {
    const isFormValid = handleValid(name, inpost, mail, amount);
    const isFormCompleted = handleCompletion(name, inpost, mail, amount);
    if (!isFormValid || !isFormCompleted) setButtonEnabled(false);
    else setButtonEnabled(true);
  }, [name, inpost, mail, amount, box]);

  useEffect(() => {
    handlePaymentPrice(totalPrice);
  }, [totalPrice, handlePaymentPrice]);

  return (
    <OrderModal onSubmit={(e) => handleFormSubmit(e)}>
      <InputContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        direction="column"
      >
        <BackButton />
        <Input
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          type="input"
          name="Imie"
          placeholder="Imie"
          value={name.value}
          handleChange={handleNameChange}
          error={name.error}
        />
        <Input
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          type="input"
          name="Nr paczkomatu"
          placeholder="Nr paczkomatu"
          value={inpost.value}
          handleChange={handleInpostChange}
          error={inpost.error}
        />
        <Input
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
          type="input"
          name="E-mail"
          placeholder="E-mail"
          value={mail.value}
          handleChange={handleMailChange}
          error={mail.error}
        />
        <Input
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
          type="number"
          min="1"
          max="5"
          name="Ilosc"
          placeholder="Ilosc"
          value={amount.value}
          handleChange={handleAmountChange}
          error={amount.error}
        />
      </InputContainer>
      <InputContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8 } }}
        direction="row"
      >
        <Checkbox label="PKO" checkedBox={box} handleClick={setCurrentBox} />
        <Checkbox label="mBank" checkedBox={box} handleClick={setCurrentBox} />
        <Checkbox
          label="Alior Bank"
          checkedBox={box}
          handleClick={setCurrentBox}
        />
      </InputContainer>
      <Price price={totalPrice} />
      <OrderButton disabled={!buttonEnabled} type="submit">
        Zamów
      </OrderButton>
    </OrderModal>
  );
};
