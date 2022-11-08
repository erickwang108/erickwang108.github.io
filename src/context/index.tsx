import React from "react";

import { LanguageProvider } from "./i18n";
import ThemeContainer from "./theme";

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ThemeContainer>{children}</ThemeContainer>
    </LanguageProvider>
  );
}
