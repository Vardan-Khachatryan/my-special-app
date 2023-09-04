import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Box } from "@mui/material";

export const Layout = (props) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        style={{
          minHeight: "100vh",
        }}
      >
        {props.children}
      </Box>
      <Footer />
    </>
  );
};
