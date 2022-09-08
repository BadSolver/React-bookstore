import { useLayoutEffect, useState } from "react";



export const useTheme = () => {
  const [theme, setTheme] = useState("light");
  useLayoutEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return { theme, setTheme };
};
