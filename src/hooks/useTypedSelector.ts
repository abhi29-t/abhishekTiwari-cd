import { TypedUseSelectorHook, useSelector } from "react-redux";

// IMPORT REDUX
import { RootState } from "../redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
