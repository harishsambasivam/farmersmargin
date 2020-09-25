import React from "react";
import "./SignIn.scss";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "../../custom_hooks/useForm";

const SignIn = () => {
  const [{ email, password }, handleChange] = useForm({
    email: "",
    password: "",
  });

  const login = async (e) => {
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:5500/user/signin", {
        "Content-Type": "application/json",
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SignIn" data-testid="SignIn">
      <TextField
        id="email"
        label="Email or Username"
        variant="outlined"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <TextField
        id="password"
        label="Enter Your Password"
        name="password"
        variant="outlined"
        value={password}
        onChange={handleChange}
      />
      <Button id="submit-button" variant="contained" onClick={() => login()}>
        Default
      </Button>
    </div>
  );
};

export default SignIn;
