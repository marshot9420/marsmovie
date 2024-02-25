export const formatDate = (modified) => {
  const date = new Date(modified);
  const year = String(date.getFullYear());

  if (year === "1970") return "Unknown Date";

  return `${year}`;
};
