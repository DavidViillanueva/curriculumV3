"use client";

import { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { myThemes } from "./Themes";
import { bangers, patrickHand } from "@/fonts";

export function MyThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [themeState, setThemeState] = useState(myThemes.muppet);

  const contextValue = useMemo(
    () => ({
      imageTheme: themeState.image,
      fontTheme: "Roboto",
      setTheme: (theme: keyof typeof myThemes) => {
        console.log({ theme: myThemes[theme] });
        setThemeState(myThemes[theme]);
      },
    }),
    [themeState]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: themeState.palette,
        typography: {
          fontFamily: themeState.font,
          fontSize: themeState.fontSize,
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 700,
          },
          h3: {
            fontWeight: 600,
          },
          h4: {
            fontWeight: 600,
          },
          h5: {
            fontWeight: 500,
          },
          h6: {
            fontWeight: 500,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 12,
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 6,
              },
            },
          },
        },
      }),
    [themeState]
  );

  theme.typography.fontFamily = "var(--font-roboto)";

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${patrickHand.variable} ${bangers.variable}`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    </ThemeContext.Provider>
  );
}
