import React from "react";
import { removeUser } from "../../store";
import { useAppDispatch } from "../../store/redux-hooks/redux-hooks";
import { Button, StyledLogOut } from "./style";

export const LogOut = () => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeUser());
  };

  return (
    <StyledLogOut>
      <Button onClick={handleRemove}> Log out </Button>
    </StyledLogOut>
  );
};
