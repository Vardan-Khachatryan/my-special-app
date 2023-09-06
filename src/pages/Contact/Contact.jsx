import Link from "@mui/material/Link";
import { FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Box, Typography, useTheme } from "@mui/material";
import { Layout } from "../../Mainlayout/Layout";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ScrollTop } from "../../components/scrollTop/ScrollTop";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const theme = useTheme();
  return (
    <Layout>
      <div id="back-to-top-anchor" />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        gap={3}
      >
        <Typography
          variant={isMobile ? "h4" : "h1"}
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
            marginTop: "15%",
          }}
        >
          OPEN TO COMMUNICATION
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={5}
          sx={{
            margin: "10%",
            border: `4px solid ${theme.palette.text.primary}`,
            padding: "3%",
            borderRadius: "40px",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            transition:
              "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
              transform: "translateY(-5px)",
            },
          }}
        >
          <Link
            href="https://www.linkedin.com/in/vardan-khachatryan/"
            target="_blank"
          >
            <BsLinkedin color={theme.palette.text.primary} size={100} />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100089031156070&mibextid=LQQJ4d"
            target="_blank"
          >
            <FaFacebook color={theme.palette.text.primary} size={100} />
          </Link>

          <Link href="https://github.com/Vardan-Khachatryan/" target="_blank">
            <BsGithub color={theme.palette.text.primary} size={100} />
          </Link>

          <Link
            href="tel:+374 93 79 90 07"
            target="_blank"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            <FaPhoneAlt color={theme.palette.text.primary} size={100} />
          </Link>

          <Link
            href="mailto:vardankhachatryan0022@gmail.com"
            target="_blank"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            <FaEnvelope color={theme.palette.text.primary} size={100} />
          </Link>
        </Box>
      </Box>
      <ScrollTop>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{ backgroundColor: theme.palette.primary.dark }}
        >
          <KeyboardArrowUpIcon
            sx={{ color: theme.palette.text.forHeaderandFooter }}
          />
        </Fab>
      </ScrollTop>
    </Layout>
  );
};
