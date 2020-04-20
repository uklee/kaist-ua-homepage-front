import React from "react";
import { Route, Redirect } from "react-router-dom";
import isTokenValid from "./util/isTokenValid";

const ProtectedRoute = ({ path, component: Component, email, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isTokenValid()) {
          if (path === "/") {
            return (
              <Redirect
                to={{
                  pathname: "/main",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
          return <Component {...props} />;
        } else {
          auth.logout();
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
