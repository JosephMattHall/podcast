
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { AuthUserProvider } from '../auth/AuthUserContext';
import createEmotionCache from '@/themes/createEmotionCache';

import IconButton from '@mui/material/IconButton';
import Header from "@/components/Header";
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode({ Component, pageProps }) {
  const theme = useTheme();
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const currentTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>Joseph Hall</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <AuthUserProvider>
        <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>
          <Component {...pageProps} />
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              color: 'text.primary',
              borderRadius: 1,
              p: 3,
            }}
          >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          </ThemeProvider>
    </ColorModeContext.Provider>
        </AuthUserProvider>
    </CacheProvider>
    )
}


