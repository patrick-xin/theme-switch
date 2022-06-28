import React from "react";
import { useTheme } from "next-themes";
import { themes } from "../constants/theme";
import { useHasMounted, useMultipleTheme } from "../hooks";

const ThemeSwitchButton = () => {
  const { theme, setTheme, currentTheme, nextTheme } = useMultipleTheme(themes);
  const hasMounted = useHasMounted();
  if (!hasMounted || !theme) return null;

  return (
    <div>
      <button
        className="border inline-flex gap-2 justify-center w-32 items-center border-TextColor px-4 py-2 rounded-md"
        onClick={() => setTheme(nextTheme.name)}
      >
        {currentTheme.emoji}
        <span>{currentTheme.name}</span>
      </button>
    </div>
  );
};

export default ThemeSwitchButton;
