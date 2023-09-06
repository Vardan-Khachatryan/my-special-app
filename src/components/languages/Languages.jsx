import React from "react";
import { List, ListItem, Typography, Box, useTheme } from "@mui/material";

export const Languages = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      gap={2}
      sx={{
        margin: "5%",
        border: `4px solid ${theme.palette.text.primary}`,
        padding: "3%",
        borderRadius: "40px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
          transform: "translateY(-5px)",
        },
        marginBottom: "20%",
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: theme.palette.text.primary }}
        justifyContent="center"
      >
        LANGUAGES
      </Typography>

      <List
        sx={{
          fontSize: "2rem",
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <ListItem
          sx={{
            "::before": {
              content: '"\\2022"',
              color: theme.palette.text.primary,
              marginRight: "5px",
              fontSize: "3rem",
            },
          }}
        >
          Armenian(Native)
        </ListItem>
        <ListItem
          sx={{
            "::before": {
              content: '"\\2022"',
              color: theme.palette.text.primary,
              marginRight: "5px",
              fontSize: "3rem",
            },
          }}
        >
          Russian(Bilingual Proficiency)
        </ListItem>
        <ListItem
          sx={{
            "::before": {
              content: '"\\2022"',
              color: theme.palette.text.primary,
              marginRight: "5px",
              fontSize: "3rem",
            },
          }}
        >
          English(Limited working proficiency)
        </ListItem>
      </List>
    </Box>
  );
};
