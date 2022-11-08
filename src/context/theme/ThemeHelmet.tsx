import Helmet from "react-helmet";
import React, { useEffect } from "react";
import { useThemeState } from "./Controller";

const HelmetWrapper = () => {
  const { mode } = useThemeState();
  return (
    <Helmet>
      <html className={mode} />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black" />
    </Helmet>
  );
};

export default HelmetWrapper;
