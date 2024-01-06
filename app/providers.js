"use client";

import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <div>
      <NextUIProvider>
        {/* <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark", "modern"]}
        > */}
        {children}
        {/* </NextThemesProvider> */}
      </NextUIProvider>
    </div>
  );
}
