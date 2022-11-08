import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authentication from "../../Authentication";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = Authentication();

  const signinhandle = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="main_login">
      <div className="sub_login">
        <Input type="text" placeholder="Enter you email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Enter you password" onChange={(e) => setPassword(e.target.value)} />
        <Button type="button" onClick={signinhandle}>
          Login
        </Button>
      </div>
      <Link to="/signup">Create your Amazon account</Link>
    </div>
  );
};

export default Login;
