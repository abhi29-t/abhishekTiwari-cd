import React, { useEffect, useState } from "react";

// IMPORT MATERIAL UI
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

// IMPORT CONTROLLER
import PropertiesController from "./controller";

// IMPORT COMPONENTS
import PropertyInfoCard from "./propertyCard";
import FiltersTray from "./filtersTray";

// IMPORT CUSTOM HOOKS
import { useTypedSelector } from "../../hooks/useTypedSelector";

const useStyles: any = makeStyles({
  root: {
    height: "84vh",
  },
  filtersContainer: {
    height: "8rem",
  },
  filtersResult: {
    height: "100%",
  },
});

const Properties = () => {
  const classes = useStyles();
  const { hello } = PropertiesController();
  const { propertyList } = useTypedSelector(
    (state) => state.propertiesPageState
  );
  const [resetList, setResetList] = useState<boolean>(false);
  const [propertiesList, setPropertiesList] = useState<any>(propertyList);
  useEffect(() => {
    setPropertiesList(propertyList);
  }, [resetList, propertyList]);
  const filterPropertiesHandler = (enteredCriteria: any) => {
    const searchCriteria = {
      floor: +enteredCriteria.floor,
      bedroom: +enteredCriteria.bedroom.charAt(0),
      prices: {
        low: +enteredCriteria.prices.split("-")[0],
        high: +enteredCriteria.prices.split("-")[1],
      },
      grossm2: {
        low: +enteredCriteria.grossm2.split("-")[0],
        high: +enteredCriteria.grossm2.split("-")[1],
      },
    };
    const listToBeFilter = propertyList.map((property) => ({
      bedroom: +property.bedroom.split("+")[0],
      floor: property.floor === "DUBLEKS" ? 2 : +property.floor.split(".")[0],
      prices: +property.price,
      grossm2: Math.round(+property.grossm2),
      uniqueID: property.uniqueID,
    }));
    const filteredProperties = listToBeFilter.filter((property) => {
      if (
        (property.grossm2 < searchCriteria.grossm2.high &&
          searchCriteria.grossm2.low < property.grossm2) ||
        (property.prices < searchCriteria.prices.high &&
          searchCriteria.prices.low < property.prices) ||
        property.bedroom === searchCriteria.bedroom ||
        property.floor === searchCriteria.floor
      ) {
        return true;
      }
    });
    setPropertiesList(filteredProperties);
  };

  console.log("pro", propertiesList);
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
