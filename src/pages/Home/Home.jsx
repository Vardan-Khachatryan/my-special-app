import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ScrollTop } from "../../components/scrollTop/ScrollTop";
import { Layout } from "../../Mainlayout/Layout";
import { useTheme, Grid, Typography } from "@mui/material";
import { PhotoLogo } from "../../components/photoLogo/PhotoLogo";
import { AboutMe } from "../../components/aboutMe/AboutMe";
import { HardSkills } from "../../components/hardSkills/HardSkills";
import { SoftSkills } from "../../components/softskills/SoftSkills";
import { Languages } from "../../components/languages/Languages";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Home = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const theme = useTheme();
  return (
    <Layout>
      <div id="back-to-top-anchor" />
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        sx={{ backgroundColor: theme.palette.primary.main }}
        spacing={10}
      >
        <Grid item sx={{ marginTop: "15%" }}>
          <Typography
            variant={isMobile ? "h4" : "h1"}
            sx={{
              textAlign: "center",
              color: theme.palette.text.primary,
            }}
          >
            FRONTEND DEVELOPER
          </Typography>
        </Grid>

        <Grid item>
          <PhotoLogo />
        </Grid>

        <Grid item>
          <AboutMe />
        </Grid>

        <Grid item>
          <HardSkills />
        </Grid>

        <Grid item>
          <SoftSkills />
        </Grid>

        <Grid item>
          <Languages />
        </Grid>
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
    </Layout>
  );
};
