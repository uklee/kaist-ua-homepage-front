import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = useSelector(state => state.auth);
  console.log(auth);
  if (auth === "loading") return <div />;
  return (
    <Route
      {...rest}
      render={props =>
        auth === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/web/main" />
        )
      }
    />
  );
};

export default ProtectedRoute;
