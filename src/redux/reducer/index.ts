import { combineReducers } from "redux";
import { PropertiesPageReducer } from "./PropertiesReducer";

export const reducers = combineReducers({
  propertiesPageState: PropertiesPageReducer,
});

export type RootState = ReturnType<typeof reducers>;
