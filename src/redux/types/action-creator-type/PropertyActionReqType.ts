import { ActionType } from "../action-type/action-types";

export interface FetchPropertyList {
  type: ActionType.FETCH_PROPERTY_LIST;
}

export interface FetchPropertyListSuccess {
  type: ActionType.FETCH_PROPERTY_LIST_SUCCESS;
  payload: {
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
}

export interface FetchPropertyListError {
  type: ActionType.FETCH_PROPERTY_LIST_ERROR;
  payload: string;
}

export interface FetchFiltersList {
  type: ActionType.FETCH_FILTERS_LIST;
}

export interface FetchFiltersListSuccess {
  type: ActionType.FETCH_FILTERS_LIST_SUCCESS;
  payload: { name: string; values: string[] }[];
}

export interface FetchFiltersListError {
  type: ActionType.FETCH_FILTERS_LIST_ERROR;
  payload: string;
}

export type Action =
  | FetchPropertyList
  | FetchPropertyListSuccess
  | FetchPropertyListError
  | FetchFiltersList
  | FetchFiltersListSuccess
  | FetchFiltersListError;
