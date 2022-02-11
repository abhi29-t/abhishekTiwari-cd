import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// IMPORT REDUX
import { actionCreators } from "../redux";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export default useActions;
