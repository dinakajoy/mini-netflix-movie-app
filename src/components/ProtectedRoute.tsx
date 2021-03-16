import React from 'react';
import { Route, Redirect } from "react-router-dom";

type Props = {
  path: string;
  signedIn: boolean;
  component: React.FC<any>;
  token: string;
}

const ProtectedRoute = ({ component: Component, signedIn, token, path, ...rest }: Props) => {
  return (
    <Route path={path} {...rest} render={(props) => {
      return (signedIn) ? (
        <Component {...props} token={token} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: {
              prevLocation: path,
            },
          }}
        />
      );
    }} />
  );
};

export default ProtectedRoute;