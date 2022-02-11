// IMPORT MATERIAL UI
import { Grid } from "@mui/material";

// IMPORT CONTROLLER
import PropertiesController from "./PropertiesController";

// IMPORT COMPONENTS
import PropertyInfoCard from "./propertyInfoCard/PropertyInfoCard";
import FiltersTray from "./filtersTray/FiltersTray";

const Properties: React.FC = () => {
  const { classes, setResetList, filterPropertiesHandler, propertiesList } =
    PropertiesController();

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.filtersContainer}>
          <FiltersTray
            filterPropertiesHandler={filterPropertiesHandler}
            setResetList={() => setResetList((state) => !state)}
          />
        </Grid>

        <Grid
          item
          container
          className={classes.filtersResult}
          spacing={{ xs: 2, md: 3, lg: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {propertiesList.map((property: any) => {
            return (
              <Grid item key={property.uniqueID}>
                <PropertyInfoCard
                  uniqueID={property.uniqueID}
                  bedroom={property.bedroom}
                  price={property.price}
                  grossm2={property.grossm2}
                  availability={property.availability}
                  floor={property.floor}
                  apartment_id={property.apartment_id}
                  blockNew={property.blockNew}
                  layout={property.layout}
                  aptNo={property.aptNo}
                  view={property.view}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Properties;
