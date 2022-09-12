import { useAppSelector } from "../store/redux-hooks/redux-hooks";

export const useAuth = () => {
  const { email, userDate, id } = useAppSelector(
    (state) => state.persistedReducer.user
  );

  return {
    isAuth: email,
    email,
    userDate,
    id,
  };
};
