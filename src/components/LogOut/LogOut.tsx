import React from "react";
import { useAppDispatch } from "../../hooks";
import { removeUser } from "../../store";
import { StyledLogOut } from "./style";

export const LogOut = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledLogOut>
      <button onClick={() => dispatch(removeUser())}> Log out </button>
    </StyledLogOut>
  );
};
