import { useCallback, useMemo } from "react";
import { useImmer } from "use-immer";
import constate from "constate";
import Cookies from "js-cookie";
import {
  I18nAPI,
  I18nState,
  I18nLocale,
  I18nContext,
  I18nAPISelector,
  I18nStateSelector,
} from "./types";
import { DEFAULT_LOCALE } from "./utils";

const COOKIE_KEY = "i18n_locale";

const useI18nController = (): I18nContext => {
  const [state, setState] = useImmer<I18nState>({
    locale: (Cookies.get(COOKIE_KEY) || DEFAULT_LOCALE) as I18nLocale,
  });

  const setLocale: I18nAPI["setLocale"] = useCallback(
    (newLocale) => {
      setState((draft) => {
        draft.locale = newLocale;
        Cookies.set(COOKIE_KEY, newLocale);
      });
    },
    [setState]
  );

  const api: I18nAPI = useMemo(() => {
    return {
      setLocale,
    };
  }, [setLocale]);

  return [state, api];
};

const i18nAPISelector: I18nAPISelector = ([, i18nAPI]) => {
  return i18nAPI;
};

const i18nStateSelector: I18nStateSelector = ([i18nState]) => {
  return i18nState;
};

export const [I18nController, useI18nState, useI18nAPI] = constate(
  useI18nController,
  i18nStateSelector,
  i18nAPISelector
);
