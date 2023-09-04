import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f0f0f0",
      light: "#31585d",
      dark: "#091f22",
    },
    text: {
      primary: "#0f1010",
      forHeaderandFooter: "#dedede",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#091f22",
      light: "#31585d",
      dark: "#091f22",
    },
    text: {
      primary: "#27cce8",
      secondary: "#091f22",
      forHeaderandFooter: "#27cce8",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
  },
});
