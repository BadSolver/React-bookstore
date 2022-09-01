import { useAppSelector } from "./redux-hooks";

export const useAuth = () => {
  const { email, userDate, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    userDate,
    id,
  };
};
