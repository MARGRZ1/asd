export const NameValidator = (name) => {
  const regex = new RegExp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm);
  return regex.test(name);
};
