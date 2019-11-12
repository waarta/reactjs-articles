import React from "react";
import { Redirect } from "react-router";

const RequireAuth = ComposedComponent => {
  const Auth = props => {
    const isAuthenticated = true; //check if user is connected

    return isAuthenticated ? (
      <ComposedComponent {...props} />
    ) : (
      <Redirect to="/" /> // the login page
    );
  };
  return Auth;
};

export default RequireAuth;
