import React from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoReact, BiLogoRedux, BiLogoFirebase } from "react-icons/bi";
import { SiReactrouter, SiMui, SiAxios, SiNetlify } from "react-icons/si";
import { BsGit, BsGithub, BsTrello } from "react-icons/bs";

import Link from "@mui/material/Link";

export const HardSkills = () => {
  const theme = useTheme();
  return (
    <Box
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
      component="section"
      display="flex"
      flexDirection="column"
      gap={5}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: theme.palette.text.primary }}
        justifyContent="center"
      >
        HARD SKILLS
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap={3}
      >
        <Link
          href="https://html5book.ru/html-html5/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <DiHtml5
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            HTML5
          </Typography>
        </Link>

        <Link
          href="https://html5book.ru/css-css3/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <DiCss3
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            CSS3
          </Typography>
        </Link>

        <Link
          href="https://learn.javascript.ru/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <IoLogoJavascript
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Javascript
          </Typography>
        </Link>

        <Link
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <TbBrandTypescript
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Typescript
          </Typography>
        </Link>

        <Link
          href="https://react.dev/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <BiLogoReact
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            React
          </Typography>
        </Link>

        <Link
          href="https://redux.js.org/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <BiLogoRedux
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Redux
          </Typography>
        </Link>

        <Link
          href="https://reactrouter.com/en/main"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <SiReactrouter
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            React Router
          </Typography>
        </Link>

        <Link
          href="https://mui.com/material-ui/react-switch/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <SiMui
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Material UI
          </Typography>
        </Link>

        <Link
          href="https://axios-http.com/docs/intro"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <SiAxios
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Axios
          </Typography>
        </Link>

        <Link
          href="https://git-scm.com/doc"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <BsGit
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Git
          </Typography>
        </Link>

        <Link
          href="https://github.com/Vardan-Khachatryan"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <BsGithub
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            GitHub
          </Typography>
        </Link>

        <Link
          href="https://firebase.google.com/docs?hl=ru"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <BiLogoFirebase
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Firebase
          </Typography>
        </Link>

        <Link
          href="https://docs.netlify.com/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <SiNetlify
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Netlify
          </Typography>
        </Link>

        <Link
          href="https://trello.com"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <BsTrello
            style={{
              color: theme.palette.text.primary,
              border: `4px solid ${theme.palette.text.primary}`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            color={theme.palette.text.primary}
            size={100}
          />
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary, textAlign: "center" }}
          >
            Trello
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
