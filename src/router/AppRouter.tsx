import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "../components";
import {
  AccountPage,
  BookDetailsPage,
  CartPages,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  RegistrationPage,
  ResetPasswordPage,
  SearchPage,
  SignInPage,
} from "../pages";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />

        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />

        <Route element={<RequareAuth />}>
          <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTE.CART} element={<CartPages />} />
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        </Route>

        <Route path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTE.SIGNIN} element={<SignInPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />

        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
