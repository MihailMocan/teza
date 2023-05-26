export const generateSequence = (length) => {
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    randomString += randomNumber.toString();
  }

  return randomString;
};
