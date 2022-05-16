export const AmountValidator = (amount) => {
  const regex = new RegExp(/^[1-5]$/);
  return regex.test(amount);
};
