export type I18nLocale = "en" | "zh";

export interface I18nState {
  locale: I18nLocale;
}

export type I18nAPI = {
  setLocale: (locale: I18nLocale) => void;
};

export type I18nContext = [I18nState, I18nAPI];

type I18nSelector<T> = (ctx: I18nContext) => T;

export interface I18nControllerProps extends I18nState {}

export type I18nStateSelector = I18nSelector<I18nState>;
export type I18nAPISelector = I18nSelector<I18nAPI>;
