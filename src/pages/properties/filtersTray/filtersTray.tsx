import React, { useEffect } from "react";
import { Formik, Form } from "formik";

// IMPORT MATERIAL UI
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

// IMPORT CUSTOM HOOKS
import useActions from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

type FiltersTrayProps = {
  filterPropertiesHandler: (enteredValues: any) => void;
  setResetList: () => void;
};

const FiltersTray: React.FC<FiltersTrayProps> = (props) => {
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
  return (
    <Box>
      <Formik
        initialValues={formikAttributes.initialValues}
        onSubmit={formikAttributes.submitHandler}
      >
        {({
          values,
          handleChange,
          handleReset,
          isValid,
          dirty,
          handleSubmit,
        }: any) => (
          <Form>
            {filterOptions?.map(
              (filter: { name: string; values: string[] }, index: number) => (
                <FormControl
                  key={filter.name}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{ textTransform: "capitalize" }}
                  >
                    {filter.name}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name={filter.name}
                    value={values[filter.name]}
                    onChange={handleChange}
                    label={`${filter.name}`}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {filter.values.map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )
            )}
            <Button
              onClick={() => {
                if (!(isValid && dirty)) {
                  return;
                }
                handleSubmit();
              }}
            >
              Filter
            </Button>
            <Button
              onClick={() => {
                handleReset();
                props.setResetList();
              }}
            >
              Reset
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FiltersTray;
