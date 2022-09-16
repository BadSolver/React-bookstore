import React, { memo, useState } from "react";
import { useAppDispatch } from "store";
import { setThemesDark, setThemesLight } from "store/slices/userSlice";
import { ButtonTheme, StyledToggler } from "./style";

export const TogglerTheme = memo(() => {
  const [title, setTitle] = useState<boolean>(false);

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
        <ButtonTheme onClick={handleThemeLight} title={title.toString()}>
          {title && "Light"}
        </ButtonTheme>
      )}
      {!title && (
        <ButtonTheme onClick={handleThemeDark} title={title.toString()}>
          {!title && "Dark"}
        </ButtonTheme>
      )}
    </StyledToggler>
  );
});
