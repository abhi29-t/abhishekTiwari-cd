import { Action } from "../types/action-creator-type/PropertyActionReqType";
import { ActionType } from "../types/action-type/action-types";

type PropertiesPageState = {
  loading: boolean;
  error: string | null;
  propertyList: {
    ID: string;
    uniqueID: number;
    availability: string;
    bedroom: string;
    view: string;
    layout: string;
    floor: string;
    aptNo: string;
    grossm2: string;
    netAream2: string;
    direction: string;
    blockNew: string;
    price: string;
    blockMap: string;
    apartment_id: string;
  }[];
  filtersList: { name: string; values: string[] }[];
};

const initialState = {
  loading: false,
  error: null,
  propertyList: [],
  filtersList: [],
};

export const PropertiesPageReducer = (
  state: PropertiesPageState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.FETCH_PROPERTY_LIST:
      return { ...state, loading: false, error: null, propertyList: [] };
    case ActionType.FETCH_PROPERTY_LIST_SUCCESS:
      console.log("action", action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        propertyList: action.payload,
      };
    case ActionType.FETCH_PROPERTY_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        propertyList: [],
      };
    case ActionType.FETCH_FILTERS_LIST:
      return { ...state, loading: false, error: null, filtersList: [] };
    case ActionType.FETCH_FILTERS_LIST_SUCCESS:
      console.log("action", action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        filtersList: action.payload,
      };
    case ActionType.FETCH_FILTERS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        filtersList: [],
      };
    default:
      return state;
  }
};
