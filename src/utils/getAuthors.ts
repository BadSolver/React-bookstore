export const getAuthor = (authors: string): string => {
  const authorsArray = authors?.split(",");

  if (authorsArray.length === 1) {
    return `${authorsArray[0]}`;
  } else if (authorsArray.length > 1) {
    return `${authorsArray[0]}, ...`;
  } else {
    return "Unknown author";
  }
};
