import React, { useEffect } from "react";

// Import Custom Hooks
import useActions from "../../hooks/useActions";

const PropertiesController = () => {
  const { fetchPropertyList } = useActions();
  const hello = "hello";
  useEffect(() => {
    fetchPropertyList();
  }, []);

  return { hello };
};

export default PropertiesController;
