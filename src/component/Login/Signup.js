import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authentication from "../../Authentication";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = Authentication();

  const signuphandle = (e) => {
    e.preventDefault();
    signup(email, password, username);
  };

  return (
    <div className="main_login">
      <div className="sub_login">
        <Input type="text" placeholder="Enter you username" onChange={(e) => setUsername(e.target.value)} />
        <Input type="text" placeholder="Enter you email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Enter you password" onChange={(e) => setPassword(e.target.value)} />
        <Button type="button" onClick={signuphandle}>
          signup
        </Button>
      </div>
      <Link to="/login">Already you have account?</Link>
    </div>
  );
};

export default Login;
