import * as React from "react";
import { NavLink } from "react-router-dom";

// IMPORT MATERIAL UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// IMPORT COMPONENTS
import HeaderController from "./HeaderController";

const MENU_OPTIONS = [
  { title: "Home", link: "/luxHomes/home" },
  { title: "Building", link: "/luxHomes/properties" },
  { title: "Location", link: "/luxHomes/location" },
];

const Header = () => {
  const {
    navigate,
    anchorElNav,
    setAnchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    menuItemActiveHandler,
  } = HeaderController();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            onClick={() => {
              console.log("lci");
              navigate("/luxHomes/home");
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {MENU_OPTIONS.map((menuItem) => (
                <MenuItem key={menuItem.title} onClick={handleCloseNavMenu}>
                  <NavLink className={menuItemActiveHandler} to={menuItem.link}>
                    <Typography textAlign="center">{menuItem.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LUX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {MENU_OPTIONS.map((menuItem) => (
              <Button
                key={menuItem.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink className={menuItemActiveHandler} to={menuItem.link}>
                  {menuItem.title}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
