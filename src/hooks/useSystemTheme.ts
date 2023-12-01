import { useEffect, useState } from "react";

type HookType = {
  sysTheme: SystemThemeDefaultOptions;
};

const useSystemTheme = (): HookType => {
  let startUpTheme: SystemThemeDefaultOptions = "light";

  if (typeof window !== "undefined") {
    startUpTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }

  const [sysTheme, setSysTheme] =
    useState<SystemThemeDefaultOptions>(startUpTheme);

  const onChangeSystemTheme = (event: MediaQueryListEvent): void => {
    const newColorScheme: SystemThemeDefaultOptions = event.matches
      ? "dark"
      : "light";

    setSysTheme(newColorScheme);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onChangeSystemTheme);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChangeSystemTheme);
    };
  }, []);

  return { sysTheme };
};

export default useSystemTheme;
