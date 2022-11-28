import React from "react";
import Helmet from "react-helmet";
import classNames from "classnames";
import { useThemeState } from "./Controller";

const HelmetWrapper = () => {
  const { mode } = useThemeState();
  const isDarkMode = mode === "dark";

  return (
    <Helmet>
      <html className={classNames("h-full", { dark: isDarkMode })} />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black" />
    </Helmet>
  );
};

export default HelmetWrapper;
