import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const token = localStorage.getItem("gettoken");
  console.log("token", token);
  return token ? <Outlet /> : <Navigate to="/" />;
};
