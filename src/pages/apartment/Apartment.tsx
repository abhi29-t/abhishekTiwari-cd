// IMPORT MATERIAL UI
import { Box, Button, Container, Grid, Typography } from "@mui/material";

// IMPORT COMPONENTS
import Loader from "../../components/Loader";
import ApartmentController from "./ApartmentController";

const Apartment = () => {
  const { params, navigate, fetchPropertyList, loading, propertyList } =
    ApartmentController();

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
