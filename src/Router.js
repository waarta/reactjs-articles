import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import { Switch } from "react-router";
// screens
import App from "./screens/App";
import NotFoundScreen from "./screens/NotFoundScreen";

// RequireAuth check if the user is connected to render the component else redirect to "/"
import RequireAuth from "./components/RequireAuth";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RequireAuth(App)} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
};
