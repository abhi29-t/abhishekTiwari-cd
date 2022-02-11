import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// IMPORT COMPONENTS
import AppLayout from "../layout/Layout";

// IMPORT STORE
import { store } from "../redux/Store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
