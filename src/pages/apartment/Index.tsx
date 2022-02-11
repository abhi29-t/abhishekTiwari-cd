import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

// IMPORT MATERIAL UI
import { Box, Button, Container, Grid, Typography } from "@mui/material";

// IMPORT CUSTOM HOOKS
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";
import Loader from "../../components/Loader";

const Apartment = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { fetchPropertyList } = useActions();
  const { loading, propertyList } = useTypedSelector(
    (state) => state.propertiesPageState
  );

  useEffect(() => {
    if (propertyList.length === 0) {
      fetchPropertyList();
    }
  }, []);

  if (propertyList.length === 0 || loading) {
    return <Loader />;
  } else {
    const propertyData = propertyList.find(
      (property) => property.uniqueID.toString() === params.apartmentID
    );

    return propertyData ? (
      <Box>
        <Grid container>
          {/* ----------------------------------------------------------------*/}
          <Grid item container>
            <Grid item>
              <Typography>{propertyData.uniqueID}</Typography>
              <Typography>{propertyData.uniqueID}</Typography>
            </Grid>
            <Grid item>
              <Typography>Image</Typography>
            </Grid>
          </Grid>
          {/* ----------------------------------------------------------------*/}
          <Grid item container>
            <Container>
              <Typography>{propertyData.ID}</Typography>
              <Typography>{propertyData.uniqueID}</Typography>
              <Typography>{propertyData.aptNo}</Typography>
              <Typography>{propertyData.availability}</Typography>
              <Typography>{propertyData.blockMap}</Typography>
              <Typography>{propertyData.direction}</Typography>
            </Container>
          </Grid>
          {/* -----------------------------------------------------------------*/}
        </Grid>
      </Box>
    ) : (
      <Box>
        <Typography>
          The property you are looking for is not available.
        </Typography>
        <Button
          onClick={() => navigate("/luxHomes/properties", { replace: true })}
        >
          Click here, to see other properties
        </Button>
      </Box>
    );
  }
};

export default Apartment;
