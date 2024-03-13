"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Additional code for setting up custom theme configurations
  const customThemeConfig = {
    light: {
      primaryColor: "#ffffff",
      secondaryColor: "#f0f0f0",
    },
    dark: {
      primaryColor: "#333333",
      secondaryColor: "#1a1a1a",
    },
  };

  return (
    <NextThemesProvider {...props} customThemes={customThemeConfig}>
      {children}
    </NextThemesProvider>
  );
}
