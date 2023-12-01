import useSystemTheme from "@/hooks/useSystemTheme";
import StyledComponentsRegistry from "@/lib/registry";
import {
  GlobalStyle,
  breakpoints,
  colors,
  radius,
  shadows,
  spacings,
  typography,
  zIndex,
} from "@/utils";
import React, { createContext, useEffect, useRef, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

type ThemeData = {
  theme: AppTheme;
  themeChoice: ColorThemeDefaultOptions;
};

export const ThemeContext = createContext<ThemeData>({} as ThemeData);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { sysTheme } = useSystemTheme();

  const [themeChoice, setThemeChoice] =
    useState<ColorThemeDefaultOptions>("light");
  const [theme, setTheme] = useState<AppTheme>({
    breakpoints,
    colors: colors[themeChoice],
    radius,
    spacings,
    typography,
    zIndex,
    shadows,
  });

  const handleChangeThemeChoice = useRef((choice: ColorThemeDefaultOptions) => {
    setThemeChoice(choice);
    setTheme({ ...theme, colors: colors[choice] });
  });

  useEffect(() => {
    handleChangeThemeChoice.current(sysTheme);
  }, [handleChangeThemeChoice, sysTheme]);

  return (
    <StyledComponentsRegistry>
      <ThemeContext.Provider value={{ theme, themeChoice }}>
        <StyledComponentsThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </StyledComponentsThemeProvider>
      </ThemeContext.Provider>
    </StyledComponentsRegistry>
  );
};
