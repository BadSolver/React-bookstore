import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "../components";
import {
  AccountPage,
  BookDetailsPage,
  CartPages,
  Favorites,
  HelloPages,
  Home,
  NotFound,
  Registration,
  ResetPasswordPages,
  SearchPages,
  SignInPages,
} from "../pages";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />

        <Route path={ROUTE.HOME} element={<HelloPages />} />
        <Route path={ROUTE.SEARCH} element={<SearchPages />} />
        <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />
        <Route path={ROUTE.CART} element={<CartPages />} />
        <Route path={ROUTE.FAVORITES} element={<Favorites />} />

        <Route element={<RequareAuth />}>
          <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        </Route>

        <Route path={ROUTE.REGISTRATION} element={<Registration />} />
        <Route path={ROUTE.SIGNIN} element={<SignInPages />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPages />} />

        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
