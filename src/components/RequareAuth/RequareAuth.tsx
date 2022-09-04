import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";
import { ROUTE } from "../../router";

export const RequareAuth = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.REGISTRATION} />;
};
