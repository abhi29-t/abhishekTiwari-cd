import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "../pages/home/Home";
import Location from "../pages/location/Location";
import Properties from "../pages/properties/Properties";
import Apartment from "../pages/apartment/Apartment";
import NotFound from "../pages/NotFound";

const AppLayout = () => {
  const projectName = "luxHomes";
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={`/${projectName}/home`} />}
        />
        <Route path={`/${projectName}/home`} element={<Home />} />
        <Route path={`/${projectName}/properties`} element={<Properties />} />
        <Route
          path={`/${projectName}/properties/:apartmentID`}
          element={<Apartment />}
        />
        <Route path={`/${projectName}/location`} element={<Location />} />
        <Route
          path="*"
          element={<Navigate replace to={`/${projectName}/home`} />}
        />
        <Route path={`/${projectName}/*`} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppLayout;
