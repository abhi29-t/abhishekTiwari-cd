import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/Index";
import { bindActionCreators } from "redux";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export default useActions;
