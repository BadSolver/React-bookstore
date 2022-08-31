import React from "react";
import { LogOut } from "../../components";
import { useAuth } from "../../hooks";

export const Account = () => {
  const { email, id, token } = useAuth();

  return (
    <div>
      <LogOut />
      <p>{email}</p>
      <p>{id}</p>
      <p>{token}</p>
    </div>
  );
};
