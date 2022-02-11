import React from "react";
import { useNavigate } from "react-router-dom";

// IMPORT CUSTOM STYLES
import classes from "./Header.module.css";

const HeaderController = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuItemActiveHandler = (navData: { isActive: boolean }) => {
    return navData.isActive ? classes.menuItemActive : classes.menuItem;
  };
  return {
    navigate,
    anchorElNav,
    setAnchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    menuItemActiveHandler,
  };
};

export default HeaderController;
