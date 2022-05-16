export const InpostValidator = (str) => {
  const regex = new RegExp(/[A-Z]{3}\d{2,3}[A-Z]{1,2}/g);
  const regex2 = new RegExp(/[A-Z]{3}-[A-Z]{3}\d/g);

  // return regex2.test(str);
  return regex.test(str) || regex2.test(str);
};
