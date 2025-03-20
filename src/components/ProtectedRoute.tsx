import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";

type Props = {
  path: string;
  component: React.FC<any>;
}

const ProtectedRoute = ({ component: Component, path, ...rest }: Props) => {
  const [token] = useState<string | null>(localStorage.getItem("token"))

  return (
    <Route path={path} {...rest} render={(props) => {
      return (token) ? (
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