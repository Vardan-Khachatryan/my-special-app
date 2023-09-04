import Link from "@mui/material/Link";
import { FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Stack, Box, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Stack
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        spacing={1}
        sx={{ backgroundColor: theme.palette.primary.dark, minHeight: "15vh" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Link
            href="https://www.linkedin.com/in/vardan-khachatryan/"
            target="_blank"
          >
            <BsLinkedin
              color={theme.palette.text.forHeaderandFooter}
              size={20}
            />
          </Link>
        </Box>

        <Box>
          <Link
            href="https://www.facebook.com/profile.php?id=100089031156070&mibextid=LQQJ4d"
            target="_blank"
          >
            <FaFacebook
              color={theme.palette.text.forHeaderandFooter}
              size={20}
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://github.com/Vardan-Khachatryan/" target="_blank">
            <BsGithub color={theme.palette.text.forHeaderandFooter} size={20} />
          </Link>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <FaPhoneAlt color={theme.palette.text.forHeaderandFooter} size={20} />
          <Link
            href="tel:+374 93 79 90 07"
            target="_blank"
            sx={{
              color: theme.palette.text.forHeaderandFooter,
              textDecoration: "none",
            }}
          >
            +374 93 79 90 07
          </Link>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <FaEnvelope color={theme.palette.text.forHeaderandFooter} size={20} />
          <Link
            href="mailto:vardankhachatryan0022@gmail.com"
            target="_blank"
            sx={{
              color: theme.palette.text.forHeaderandFooter,
              textDecoration: "none",
            }}
          >
            vardankhachatryan0022@gmail.com
          </Link>
        </Box>
      </Stack>

      <Box
        sx={{ backgroundColor: theme.palette.primary.light }}
        display="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.forHeaderandFooter,
            textAlign: "center",
          }}
        >
          © 2023
        </Typography>
      </Box>
    </Box>
  );
};
