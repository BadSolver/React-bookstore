import { getUserInfo } from "../store";
import { useAppSelector } from "../store/redux-hooks/redux-hooks";

export const useAuth = () => {
  const { email, userDate, id } = useAppSelector(getUserInfo);

  return {
    isAuth: !!email,
    email,
    userDate,
    id,
  };
};
