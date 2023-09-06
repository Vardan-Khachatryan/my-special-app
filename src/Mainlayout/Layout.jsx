import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

export const Layout = (props) => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        {props.children}
      </Box>
      <Footer />
    </>
  );
};
