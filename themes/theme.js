import { createTheme, responsiveFontSizes } from "@mui/material/styles";


// Create a theme instance.
let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4d5054',
    },
    secondary: {
      main: '#9aa0a0',
    },
    error: {
      main: '#af231a',
    },
    warning: {
      main: '#e8f16e',
    },
    info: {
      main: '#4029ef',
    },
    success: {
      main: '#87ec8b',
    },
    background: {
      paper: '#ececec',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;