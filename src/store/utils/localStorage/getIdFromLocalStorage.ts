export const getIdFromLocalStorage = () => {
  const data = localStorage.getItem("userId");
  return data ? JSON.parse(data) : [];
};
