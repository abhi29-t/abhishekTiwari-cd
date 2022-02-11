import React, { useEffect } from "react";

// IMPORT CUSTOM HOOKS
import useActions from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface Props {
  filterPropertiesHandler: (enteredValues: any) => void;
  setResetList: () => void;
}

const FiltersTrayController = (props: Props) => {
  const formikAttributes = {
    initialValues: { prices: "", floor: "", bedroom: "", grossm2: "" },
    submitHandler: props.filterPropertiesHandler,
  };
  const { fetchFiltersList } = useActions();
  const { filtersList: filterOptions } = useTypedSelector(
    (state) => state.propertiesPageState
  );

  useEffect(() => {
    fetchFiltersList();
  }, []);
  return { formikAttributes, fetchFiltersList, filterOptions };
};

export default FiltersTrayController;
