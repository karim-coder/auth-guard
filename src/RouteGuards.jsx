import React from "react";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children, auth }) => {
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export const NoAuthGuard = ({ children, auth }) => {
  if (auth) {
    return <Navigate to="/" />;
  }
  return children;
};
