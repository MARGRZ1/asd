export const headingSentence = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.06,
    },
  },
};

export const paragraphSentence = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.01,
    },
  },
};

export const letter = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};
