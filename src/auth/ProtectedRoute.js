import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as adminAPI from "../lib/api/admin";

const checkAdmin = () => {
  adminAPI
    .check()
    .then(res => {
      if (res.auth === "admin") {
        return true;
      }
      return false;
    })
    .catch(err => false);
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAdmin() ? <Component {...props} /> : <Redirect to="/web/main" />
    }
  />
);

export default ProtectedRoute;
