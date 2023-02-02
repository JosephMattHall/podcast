import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from '@/themes/createEmotionCache';
import theme from '@/themes/theme';

import Header from "@/components/Header";

import '@/styles/globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }) {

  

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>Joseph Hall</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />

      </ThemeProvider>
    </CacheProvider>
    )
}
