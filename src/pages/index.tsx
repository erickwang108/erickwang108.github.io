import * as React from "react";
import type { HeadFC } from "gatsby";
import Home from "./home";

const HomePage = () => {
  return <Home />;
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
