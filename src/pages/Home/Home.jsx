import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ScrollTop } from "../../components/scrollTop/ScrollTop";
import { Layout } from "../../Mainlayout/Layout";
import { useTheme, Grid, Typography } from "@mui/material";
import { PhotoLogo } from "../../components/photoLogo/PhotoLogo";
import { AboutMe } from "../../components/aboutMe/AboutMe";

export const Home = () => {
  const theme = useTheme();
  return (
    <Layout>
      <div id="back-to-top-anchor" />
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Grid
          item
          sx={{ mt: "80px" }}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h2"
            sx={{ textAlign: "center", color: theme.palette.text.primary }}
          >
            Frontend Developer
          </Typography>
        </Grid>

        <Grid item>
          <PhotoLogo />
        </Grid>

        <Grid item>
          <AboutMe />
        </Grid>

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
      </Grid>
    </Layout>
  );
};
