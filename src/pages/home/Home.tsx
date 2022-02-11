import React from "react";

// IMPORT MATERIAL UI
import { Typography, Grid } from "@mui/material";

// IMPORT COMPONENTS
import { Wrapper, LandingImage, useStyles } from "./Home.style";

const Home = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <LandingImage>
        <Grid
          container
          justifyContent="center"
          alignItems="end"
          style={{ height: "100%" }}
        >
          <Typography className={classes.heroText}>
            Welcome to world of Luxorious homes!
          </Typography>
        </Grid>
      </LandingImage>
    </Wrapper>
  );
};

export default Home;
