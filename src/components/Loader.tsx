import React from "react";

// IMPORT MATERIAL UI
import { CircularProgress, Box } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box
      sx={{ display: "flex" }}
      style={{ position: "relative", top: "100%", left: "50%" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
