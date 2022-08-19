import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";

import {
  Account,
  Book,
  Cart,
  Favorites,
  Home,
  NotFound,
  Search,
  SignIn,
  SignUp,
} from "../pages";

import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={routes.HOME} element={<Home />}/>
        <Route path={routes.NOT_FOUND} element={<NotFound />} />
        <Route path={routes.SEARCH} element={<Search />} />
        <Route path={routes.BOOK} element={<Book />} />
        <Route path={routes.CART} element={<Cart />} />
        <Route path={routes.FAVORITES} element={<Favorites />} />
        <Route path={routes.ACCOUNT} element={<Account />} />
        <Route path={routes.SIGNIN} element={<SignIn />} />
        <Route path={routes.SIGNUP} element={<SignUp />} />
      </Route>
    </Routes>
  );
};
