export const createYear = (year) => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() + year);
  return currentDate;
};
