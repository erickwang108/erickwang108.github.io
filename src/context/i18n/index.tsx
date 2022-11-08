import React, { FC, useMemo } from "react";
import { IntlProvider } from "react-intl";
import Cookies from "js-cookie";
import { I18nController } from "./Controller";
import { Locales, DEFAULT_LOCALE, translationMessages } from "./utils";

const INTL_KEY = "i18n";

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const locale = useMemo(() => {
    return (Cookies.get(INTL_KEY) || DEFAULT_LOCALE) as Locales;
  }, []);

  return (
    <I18nController>
      <IntlProvider
        key={locale}
        locale={locale as string}
        messages={translationMessages[locale]}
      >
        {React.Children.only(children)}
      </IntlProvider>
    </I18nController>
  );
};
