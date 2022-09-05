export const getUserDateFromLocalStorage = () => {
  const data = localStorage.getItem("userDate");
  return data ? JSON.parse(data) : [];
};
