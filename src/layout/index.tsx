import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "../pages/home/Index";
import Location from "../pages/location/Index";
import Properties from "../pages/properties";
import Apartment from "../pages/apartment/Index";
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
