import React from "react";
import { Redirect, Route } from "react-router-dom";
import Authentication from "./Authentication";

const PrivetRoute = ({ children, ...rest }) => {
    const { user } = Authentication();

  return !user ? <Route {...rest}>{children}</Route> : <Redirect to="/" />;
};

export default PrivetRoute;
