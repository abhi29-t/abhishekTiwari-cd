import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../types/action-type/action-types";

export const fetchPropertyList = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: ActionType.FETCH_PROPERTY_LIST,
    });
    try {
      const { data } = await axios.get(
        "http://localhost:3000/Mock/test_units_data (5) (1) (2).json"
      );
      dispatch({
        type: ActionType.FETCH_PROPERTY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_PROPERTY_LIST_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchFiltersList = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: ActionType.FETCH_FILTERS_LIST,
    });
    try {
      const { data } = await axios.get(
        "http://localhost:3000/Mock/test_fliter_options (4) (1) (2).json"
      );
      const filter: { [key: string]: string[] } = { ...data };
      const FILTERS = Object.keys(filter).map((key) => ({
        name: key,
        values: filter[key],
      }));
      dispatch({
        type: ActionType.FETCH_FILTERS_LIST_SUCCESS,
        payload: FILTERS,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_FILTERS_LIST_ERROR,
        payload: error.message,
      });
    }
  };
};
