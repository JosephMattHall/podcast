import React, { useEffect, useState, useMemo, createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { AuthUserProvider } from "../auth/AuthUserContext";
import createEmotionCache from "@/themes/createEmotionCache";

import IconButton from "@mui/material/IconButton";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode({ Component, pageProps }) {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  const currentTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#5893df",
                },
                secondary: {
                  main: "#2ec5d3",
                },
                background: {
                  default: "#192231",
                  paper: "#24344d",
                },
                text: {
                  primary: "#f7f4f4",
                  secondary: "rgba(253,250,250,0.7)",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#414243",
                  light: "#a1a4a8",
                  dark: "#464c50",
                },
                secondary: {
                  main: "#676771",
                },
                background: {
                  default: "#494A4C",
                  paper: "#222222",
                },
                text: {
                  primary: "#f7f4f4",
                  secondary: "rgba(253,250,250,0.7)",
                },
              }),
        },
      }),
    [mode]
  );

  useEffect(() => {
    setMode(JSON.parse(window.localStorage.getItem("mode")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>
        <CacheProvider value={clientSideEmotionCache}>
          <Head>
            <title>Joseph Hall</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header />
          <AuthUserProvider>
            <Component {...pageProps} />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                m: 2,
              }}
            >
              {currentTheme.palette.mode} mode
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color={currentTheme.palette.text.primary.valueOf()}
              >
                {currentTheme.palette.mode === "light" ? (
                  <Brightness7Icon foregroundColor={currentTheme.palette.primary.dark} />
                ) : (
                  <Brightness4Icon color={currentTheme.palette.primary.dark.toString()} />
                )}
              </IconButton>
            </Box>
          </AuthUserProvider>
        </CacheProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
