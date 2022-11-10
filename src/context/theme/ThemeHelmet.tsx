import React from "react";
import Helmet from "react-helmet";
import { useThemeState } from "./Controller";

const HelmetWrapper = () => {
  const { mode } = useThemeState();

  return (
    <Helmet>
      <html className={`h-full ${mode}`} />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black" />
    </Helmet>
  );
};

export default HelmetWrapper;
