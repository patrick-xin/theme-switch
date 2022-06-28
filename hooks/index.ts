import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ITheme } from "../types";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export const useMultipleTheme = (themes: ITheme[]) => {
  const { theme, setTheme } = useTheme();

  const currentIndex = Math.max(
    0,
    themes.findIndex((t) => t.name === theme)
  );

  const currentTheme = themes[currentIndex];
  const nextTheme = themes[(currentIndex + 1) % themes.length];
  return {
    theme,
    setTheme,
    currentTheme,
    nextTheme,
  };
};
