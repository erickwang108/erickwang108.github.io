import React from "react";
import { useI18nState, useI18nAPI } from "./Controller";

const ToggleLocale = () => {
  const { setLocale } = useI18nAPI();
  const { locale } = useI18nState();

  return <div>{locale}</div>;
};

export default ToggleLocale;
