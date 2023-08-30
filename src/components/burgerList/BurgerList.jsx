import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Button, Box, Typography, useTheme } from "@mui/material";

export const BurgerList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Button>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Button
            variant="text"
            href="/projects"
            sx={{ color: theme.palette.primary.main }}
          >
            <Typography color="black">PROJECTS </Typography>
          </Button>
        </MenuItem>

        <MenuItem>
          <Button
            variant="text"
            href="/contact"
            sx={{ color: theme.palette.primary.main }}
          >
            <Typography color="black"> CONTACT </Typography>
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};
