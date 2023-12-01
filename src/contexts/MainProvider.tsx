import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "./index";

export const MainProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
