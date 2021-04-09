import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routelist";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((routes) => (
        <Route
          exact
          key={routes.path}
          path={routes.path}
          component={routes.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
