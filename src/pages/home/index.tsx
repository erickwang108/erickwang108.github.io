import * as React from "react";
import type { HeadFC } from "gatsby";
import Introduce from "./Introduce";

const HomePage = () => {
  return (
    <main>
      <Introduce />
    </main>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
