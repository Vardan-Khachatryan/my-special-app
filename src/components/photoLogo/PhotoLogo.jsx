import React from "react";
import { Paper, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Myphoto from "../../images/Myphoto.jpeg";
import VK from "../../images/VK.png";

export const PhotoLogo = () => {
  const theme = useTheme();
  return (
    <Stack
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      divider={<Divider orientation="vertical" flexItem />}
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{ backgroundColor: theme.palette.primary.main, marginTop: "10%" }}
    >
      <Paper
        elevation={5}
        sx={{
          backgroundColor: theme.palette.primary.main,
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
            transform: "translateY(-5px)",
          },
          width: "45%",
          height: "auto",
        }}
      >
        <img
          style={{ width: "100%", maxWidth: "100%", height: "auto" }}
          src={Myphoto}
          alt="Myphoto"
        />
      </Paper>

      <Paper
        elevation={5}
        sx={{
          backgroundColor: theme.palette.primary.main,
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
            transform: "translateY(-5px)",
          },
          width: "45%",
          height: "auto",
        }}
      >
        <img
          style={{ width: "100%", maxWidth: "100%", height: "auto" }}
          src={VK}
          alt="Logo"
        />
      </Paper>
    </Stack>
  );
};
