import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// IMPORT CUSTOM HOOKS
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ApartmentController = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { fetchPropertyList } = useActions();
  const { loading, propertyList } = useTypedSelector(
    (state) => state.propertiesPageState
  );

  useEffect(() => {
    if (propertyList.length === 0) {
      fetchPropertyList();
    }
  }, []);

  return {
    params,
    navigate,
    fetchPropertyList,
    loading,
    propertyList,
  };
};

export default ApartmentController;
