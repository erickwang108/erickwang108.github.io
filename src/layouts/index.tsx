import React from "react";
import ContextWrapper from "context/index";
// import HomeLayout from "./HomeLayout";
import ResumeLayout from "./ResumeLayout";

// const PATH_FILTER = "/resume";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  // const { pathname = "" } =
  //   typeof window !== "undefined" ? window.location : {};

  // if (!pathname.includes(PATH_FILTER)) {
  //   return <HomeLayout>{children}</HomeLayout>;
  // }

  return (
    <ContextWrapper>
      <ResumeLayout>{children}</ResumeLayout>
    </ContextWrapper>
  );
}
