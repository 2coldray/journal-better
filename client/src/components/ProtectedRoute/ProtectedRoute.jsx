import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { jwt } = useContext(AuthContext);
  // console.log(jwt);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (jwt) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/Auth",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
