import React from "react";
import { useAppDispatch } from "../../store";
import { setThemesDark, setThemesLight } from "../../store/slices/userSlice";
import { ButtonTheme, StyledToggler } from "./style";

export const TogglerTheme = () => {
  const dispatch = useAppDispatch();
  const handleThemeLight = () => {
    dispatch(setThemesLight());
  };
  const handleThemeDark = () => {
    dispatch(setThemesDark());
  };

  return (
    <StyledToggler>
      <ButtonTheme onClick={handleThemeLight}>light</ButtonTheme>
      <ButtonTheme onClick={handleThemeDark}> dark</ButtonTheme>
    </StyledToggler>
  );
};
