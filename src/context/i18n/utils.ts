import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import cnLocaleData from "react-intl/locale-data/zh";

import enTranslationMessages from "./messages/en";
import zhTranslationMessages from "./messages/zh";

addLocaleData(enLocaleData);
addLocaleData(cnLocaleData);

export type Messages = Record<string, string>;
export type Locales = "en" | "zh";

export const DEFAULT_LOCALE = "en";
export const appLocales = ["en", "zh"];

const formatTranslationMessages = (locale: Locales, messages: Messages) => {
  const defaultFormattedMessages: Messages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (
    formattedMessages: Messages,
    key: string
  ) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages("en", enTranslationMessages),
  zh: formatTranslationMessages("zh", zhTranslationMessages),
};
