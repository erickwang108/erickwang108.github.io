export type ThemeMode = "dark" | "light";

export interface ThemeState {
  mode: ThemeMode;
}

export type ThemeAPI = {
  switchMode: () => void;
};

export type ThemeContext = [ThemeState, ThemeAPI];

type ThemeSelector<T> = (ctx: ThemeContext) => T;

export interface ThemeControllerProps extends ThemeState {}

export type ThemeStateSelector = ThemeSelector<ThemeState>;
export type ThemeAPISelector = ThemeSelector<ThemeAPI>;
