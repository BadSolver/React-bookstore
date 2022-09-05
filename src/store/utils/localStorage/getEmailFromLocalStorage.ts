export const getEmailFromLocalStorage = () => {
  const data = localStorage.getItem("userEmail");
  return data ? JSON.parse(data) : [];
};
