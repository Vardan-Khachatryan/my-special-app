import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ScrollTop } from "../../components/scrollTop/ScrollTop";
import { Layout } from "../../Mainlayout/Layout";
import { useTheme, Box, Typography, Paper } from "@mui/material";
import tooth from "../../images/favicon-128x128.png";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Projects = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const theme = useTheme();

  return (
    <Layout>
      <div id="back-to-top-anchor" />
      <Box
        sx={{ backgroundColor: theme.palette.primary.main }}
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
          THERE WILL BE UPCOMING PROJECTS HERE SHORTLY SO PLEASE CHECK BACK
          FREQUENTLY
        </Typography>

        <Paper
          elevation={5}
          sx={{
            backgroundColor: theme.palette.primary.main,
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            transition:
              "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
              transform: "translateY(-5px)",
            },
            margin: "8%",
            border: `4px solid ${theme.palette.text.primary}`,
            padding: "3%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: "1rem",
          }}
        >
          <Box display="flex" alignSelf="center">
            <img src={tooth} style={{ maxHeight: "100px" }} alt="Toothphoto" />
          </Box>

          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: "1rem",
                textAlign: "justify",
                padding: "2%",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                transition:
                  "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              We did this project in two weeks as part of a React course. During
              this time we created the admin panel and frontend part. I can now
              use the admin panel to delete or add doctors and services. We used
              Firebase for data storage and Trello for collaboration.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: "1rem",
                textAlign: "justify",
                padding: "2%",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                transition:
                  "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              I personally created the UI part of the project, without header
              and footer, configured routing also on the admin panel configured
              authentication, created two pages in the admin panel, deployed the
              project on Netlify, also participated in writing the redux.
              <Link
                href="https://avafront.netlify.app/"
                target="_blank"
                sx={{
                  color: theme.palette.text.primary,
                  marginLeft: "1%",
                  fontWeight: "bold",
                }}
                rel="noopener"
              >
                avafront.netlify.app/
              </Link>
            </Typography>
          </Box>
        </Paper>
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
