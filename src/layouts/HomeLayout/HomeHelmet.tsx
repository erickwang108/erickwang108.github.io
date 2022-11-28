import React from "react";
import Helmet from "react-helmet";

const HomeHelmet = () => {
  return (
    <Helmet>
      <html className="dark" />
      <body className="h-full text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900" />
    </Helmet>
  );
};

export default HomeHelmet;
