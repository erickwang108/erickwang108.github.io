import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "components/Layout";
import Introduce from "./Introduce";

const HomePage = () => {
  return (
    <Layout>
      <main>
        <Introduce />
      </main>
    </Layout>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>个人优势</title>;
