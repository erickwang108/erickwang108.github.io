import * as React from "react";
import type { HeadFC } from "gatsby";
import Home from "./resume/home";

const HomePage = () => {
  return <Home />;
};

export default HomePage;

export const Head: HeadFC = () => <title>首页</title>;
