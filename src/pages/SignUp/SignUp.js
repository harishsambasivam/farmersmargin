import React from "react";
import "./SignUp.scss";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "../../custom_hooks/useForm";

const SignUp = () => {
  const [
    { username, email, password, confirm_password },
    handleChange,
  ] = useForm({
    email: "",
    password: "",
    confirm_password: "",
    username: "",
  });

  const signUp = async (e) => {
    try {
      const response = await fetch("http://localhost:5500/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          name: username,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SignUp" data-testid="SignUp">
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
        label="Enter Your Username"
        variant="outlined"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <TextField
        id="password"
        label="Enter Your Password"
        variant="outlined"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <TextField
        id="confirm-password"
        label="Confirm Your Password"
        variant="outlined"
        name="confirm_password"
        value={confirm_password}
        onChange={handleChange}
      />
      <Button id="submit-button" onClick={() => signUp()} variant="contained">
        Default
      </Button>
    </div>
  );
};

export default SignUp;
