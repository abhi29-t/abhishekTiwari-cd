import { Typography, Grid, Theme } from "@mui/material";
import React from "react";
import { Wrapper, LandingImage } from "./Home.style";
import { makeStyles } from "@mui/styles";
const useStyles: any = makeStyles((theme: Theme) => ({
  heroText: {
    fontSize: "1.5rem",
    marginBottom: "4rem",
  },
}));

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
