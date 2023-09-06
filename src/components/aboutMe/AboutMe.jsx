import React from "react";
import { useTheme, Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export const AboutMe = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      gap={3}
      sx={{
        margin: "10%",
        border: `4px solid ${theme.palette.text.primary}`,
        padding: "3%",
        borderRadius: "40px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
          transform: "translateY(-5px)",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: theme.palette.text.primary }}
        justifyContent="center"
      >
        ABOUT ME
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontSize: "1.2rem",
          textAlign: "justify",
        }}
      >
        Hello everyone and welcome to my page. I created it to showcase my
        skills and great desire to be a part of the IT world. Let's get to know
        each other and learn a bit more about my professional path.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontSize: "1.2rem",
          textAlign: "justify",
        }}
      >
        I studied in Moscow and I am a qualified lawyer with over 2 years of
        experience in a government agency. However, I always thought about
        trying my hand at IT and decided to become a frontend programmer.
        Disregarding all the challenges and obstacles I had to face while
        entering a new unknown field, I managed to reach this stage and perform
        to the best of my ability.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontSize: "1.2rem",
          textAlign: "justify",
        }}
      >
        I am glad that I have entered the world of information technology with
        unlimited opportunities and freedom, which I value the most. I am
        proficient in programming languages such as JavaScript and TypeScript as
        well as the React library.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontSize: "1.2rem",
          textAlign: "justify",
        }}
      >
        I have taken courses in JavaScript(TypeScript) and React at{" "}
        <Link
          href="https://bdg.am/en/"
          target="_blank"
          sx={{
            color: theme.palette.text.primary,
            marginLeft: "1%",
            fontWeight: "bold",
          }}
          rel="noopener"
        >
          Business Development Group
        </Link>
        . As of May 2023, I have a profile in{" "}
        <Link
          href="https://kwork.ru/"
          target="_blank"
          sx={{
            color: theme.palette.text.primary,
            marginLeft: "1%",
            fontWeight: "bold",
          }}
          rel="noopener"
        >
          KWORK
        </Link>
        . I do some freelance work there.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontSize: "1.2rem",
          textAlign: "justify",
        }}
      >
        Finally, I am happy to announce that I am ready to start a new chapter
        in my professional life and I am open to offers for the position of
        frontend developer.
      </Typography>
    </Box>
  );
};
