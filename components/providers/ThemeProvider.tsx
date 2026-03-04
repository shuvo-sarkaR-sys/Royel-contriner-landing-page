"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({
  children,
  ...props
}: Omit<ThemeProviderProps, "forcedTheme"> & { forcedTheme: Theme }) {
  return (
    <NextThemesProvider
      attribute="class"
      themes={["royal", "rentals", "containers", "auto"] satisfies Theme[]}
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
export type Theme = "royal" | "rentals" | "containers" | "auto";
