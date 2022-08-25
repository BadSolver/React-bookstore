import { Route, Routes} from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Account,  Cart, Favorites, Home, NotFound, Search, SignIn, SignUp } from "../pages";
import { BookDetailsPage } from "../pages/BookDetailsPages/BookDetailsPages";


import { HelloPages } from "../pages/HelloPages";

import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home  />} />

        <Route path={ROUTE.HOME} element={<HelloPages />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
        <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />
        <Route path={ROUTE.CART} element={<Cart />} />
        <Route path={ROUTE.FAVORITES} element={<Favorites />} />

        <Route path={ROUTE.ACCOUNT} element={<Account />} />
        <Route path={ROUTE.SIGNIN} element={<SignIn />} />
        <Route path={ROUTE.SIGNUP} element={<SignUp />} />

        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
