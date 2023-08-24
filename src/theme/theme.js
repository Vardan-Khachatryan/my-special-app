import { createTheme } from "@mui/material";

export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#1792dc",
      light: "#56ccff",
      dark: "#1581c8",
    },
    secondary: {
      main: "#0aeca3",
      light: "#80f1bf",
      dark: "#00dc79",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
  },
  spacing: 4,
});
