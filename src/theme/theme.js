import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#0074a6",
      light: "#32585d",
      dark: "#091f22",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
  },
  spacing: 4,
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#091f22",
      light: "#32585d",
      dark: "#091f22",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
  },
  spacing: 4,
});
