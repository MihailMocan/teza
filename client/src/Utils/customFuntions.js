export const toUpperCase = (data) => {
  if (typeof data === "string") return data.toUpperCase();
  return undefined;
};

export const getDate = (date = new Date()) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
};
