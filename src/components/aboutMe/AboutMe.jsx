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
      gap={5}
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
        Welcome everyone to my page. I wrote this page to show my skills and
        also it was a challenge for me. Now let me tell you a little bit about
        me. After finishing school, I went to higher education 2015 and
        graduated 2020, I qualified as a lawyer and worked until December 2022
        in a government agency and then I decided to become a frontend
        programmer and quit. Since December 2022, I started a difficult period
        for me, because everything was new to me, and everyone said that now it
        is impossible to find a job in this field because the market is
        overcrowded, juniors are not needed. But I did not give up, because it
        was a challenge for me and I decided not to give up, because whoever is
        looking for a job will find one. So I signed up for a course on
        JavaScript in the company
        <Link
          href="https://bdg.am/en/"
          target="_blank"
          sx={{
            color: theme.palette.text.primary,
            marginRight: "1%",
            marginLeft: "1%",
            fontWeight: "bold",
          }}
          rel="noopener"
        >
          Business Development Group
        </Link>
        and realized that I like it, after this course I took a course on React
        in the same company, but it was not limited to that, I started to search
        the Internet for answers to questions and realized that in programming
        one of the main advantages is that you can solve the same problem in
        many ways and it gives a sense of freedom. Now I plan to find a frontend
        developer position and join the game.
      </Typography>
    </Box>
  );
};
