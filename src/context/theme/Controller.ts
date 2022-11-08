import { useCallback, useMemo } from "react";
import { useImmer } from "use-immer";
import constate from "constate";
import Cookies from "js-cookie";
import {
  ThemeMode,
  ThemeAPI,
  ThemeState,
  ThemeContext,
  ThemeAPISelector,
  ThemeStateSelector,
} from "./types";
const COOKIE_KEY = "theme_mode";

const useThemeController = (): ThemeContext => {
  const [state, setState] = useImmer<ThemeState>({
    mode: (Cookies.get(COOKIE_KEY) || "dark") as ThemeMode,
  });

  const switchMode: ThemeAPI["switchMode"] = useCallback(() => {
    setState((draft) => {
      const newMode = draft.mode === "dark" ? "light" : "dark";
      draft.mode = newMode;
      Cookies.set(COOKIE_KEY, newMode);
    });
  }, [setState]);

  const api: ThemeAPI = useMemo(() => {
    return {
      switchMode,
    };
  }, [switchMode]);

  return [state, api];
};

const themeAPISelector: ThemeAPISelector = ([, themeAPI]) => {
  return themeAPI;
};

const themeStateSelector: ThemeStateSelector = ([themeState]) => {
  return themeState;
};

export const [ThemeController, useThemeState, useThemeAPI] = constate(
  useThemeController,
  themeStateSelector,
  themeAPISelector
);
