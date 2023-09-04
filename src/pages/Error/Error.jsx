import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Layout } from "../../Mainlayout/Layout";
import { useTheme } from "@mui/material";
export const Error = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", backgroundColor: theme.palette.primary.main }}
      >
        <Grid item>
          <Typography variant="h1" color="error">
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Նշված հասցեն չի գտնվել
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" href="/">
            Վերադառնալ գլխավոր էջ
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};
