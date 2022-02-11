import styled from "styled-components";

// IMPORT MATERIAL UI
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const Wrapper = styled.div`
  border: 1px solid black;
`;

export const LandingImage = styled.div`
  height: 42vw;
  background: #ff0914;
  background: url("http://localhost:3000/assets/home.jpg") top center / 100%;
`;

export const useStyles: any = makeStyles((theme: Theme) => ({
  heroText: {
    fontSize: "1.5rem",
    marginBottom: "4rem",
  },
}));
