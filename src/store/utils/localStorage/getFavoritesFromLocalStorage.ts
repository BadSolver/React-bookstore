export const getFavoritesFromLocalStorage = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};
