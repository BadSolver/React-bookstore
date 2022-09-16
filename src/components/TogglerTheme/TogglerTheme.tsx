import React, { useState } from "react";
import { useAppDispatch } from "store";
import { setThemesDark, setThemesLight } from "store/slices/userSlice";
import { ButtonTheme, StyledToggler } from "./style";

export const TogglerTheme = () => {
  const [title, setTitle] = useState(false);

  const dispatch = useAppDispatch();
  const handleThemeLight = () => {
    setTitle((title) => !title);
    dispatch(setThemesLight());
  };
  const handleThemeDark = () => {
    setTitle((title) => !title);
    dispatch(setThemesDark());
  };

  return (
    <StyledToggler>
      {title && (
        <ButtonTheme onClick={handleThemeLight} title={title}>
          {title && "Light"}
        </ButtonTheme>
      )}
      {!title && (
        <ButtonTheme onClick={handleThemeDark} title={!title}> {!title && "Dark"}</ButtonTheme>
      )}
    </StyledToggler>
  );
};
