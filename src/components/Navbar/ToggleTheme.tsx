import React from "react";
import DarkIcon from "icons/Dark";
import LightIcon from "icons/Light";
import { useThemeState, useThemeAPI } from "context/theme/Controller";

const ToggleTheme = () => {
  const { switchMode } = useThemeAPI();
  const { mode } = useThemeState();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={switchMode}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      {mode === "dark" ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default ToggleTheme;
