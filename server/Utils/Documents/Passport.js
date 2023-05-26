import { generateSequence } from "../Functions/GenerateSequence.js";

export const generateIDNP = () => {
  return generateSequence(13);
};

export const generateSerie = () => {
  const dictionary = ["A", "B"];
  const index = Math.round(Math.random());
  const initialLetter = dictionary[index];
  const numberSequence = generateSequence(8);
  return initialLetter + numberSequence;
};
