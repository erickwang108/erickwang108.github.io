import React from "react";
import ContextWrapper from "context/index";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ContextWrapper>
      <div>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none relative z-50 flex flex-col">
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </div>
    </ContextWrapper>
  );
}
