import React from "react";
import { ThemeController } from "./Controller";
import ThemeHelmet from "./ThemeHelmet";

const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeController>
      <ThemeHelmet />
      {children}
    </ThemeController>
  );
};

export default ThemeContainer;
