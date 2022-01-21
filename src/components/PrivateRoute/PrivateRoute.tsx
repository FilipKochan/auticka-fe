import React, { FunctionComponent } from "react";
import { Route, Navigate, RouteProps, NavigateProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const user = undefined;

  const handleRender = (props: NavigateProps) => {
    if (user) {
      return <Component {...props} />;
    }

    return (
      <Navigate
        to={{
          pathname: "/login",
        }}
        // state: {{from:...}}
      />
    );
  };

  return <Route {...rest} element={handleRender} />;
};

export default PrivateRoute;
