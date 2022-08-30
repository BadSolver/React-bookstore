import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "../components";
import {
  Account,
  BookDetailsPage,
  Cart,
  Favorites,
  HelloPages,
  Home,
  NotFound,
  Registration,
  Search,
} from "../pages";
import { SignInPages } from "../pages/SignIn/SignInPages";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />

        <Route path={ROUTE.HOME} element={<HelloPages />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
        <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />
        <Route path={ROUTE.CART} element={<Cart />} />
        <Route path={ROUTE.FAVORITES} element={<Favorites />} />

        <Route element={<RequareAuth />}>
          <Route path={ROUTE.ACCOUNT} element={<Account />} />
        </Route>

        <Route path={ROUTE.REGISTRATION} element={<Registration />} />
        <Route path={ROUTE.SIGNIN} element={<SignInPages />} />

        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
