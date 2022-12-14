import React from "react";
import { removeUser, useAppDispatch } from "store";
import { Button, StyledLogOut } from "./style";

export const LogOut = () => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeUser());
  };

  return (
    <StyledLogOut>
      <Button onClick={handleRemove} whileTap={{ scale: 1.15 }}> Log out </Button>
    </StyledLogOut>
  );
};
