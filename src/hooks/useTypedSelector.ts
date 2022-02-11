import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/Index";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
