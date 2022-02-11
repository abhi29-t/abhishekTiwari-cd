import React, { useEffect, useState } from "react";

// IMPORT CUSTOM HOOKS
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// IMPORT CUSTOM STYLES
import { useStyles } from "./Properties.style";

const PropertiesController = () => {
  const classes = useStyles();
  const { propertyList } = useTypedSelector(
    (state) => state.propertiesPageState
  );
  const { fetchPropertyList } = useActions();
  const [resetList, setResetList] = useState<boolean>(false);
  const [propertiesList, setPropertiesList] = useState<any>(propertyList);

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
      ...property,
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

  useEffect(() => {
    fetchPropertyList();
  }, []);

  useEffect(() => {
    setPropertiesList(propertyList);
  }, [resetList, propertyList]);

  return { classes, setResetList, filterPropertiesHandler, propertiesList };
};

export default PropertiesController;
