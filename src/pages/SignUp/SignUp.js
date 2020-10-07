import React, { useEffect } from "react";
import "./SignUp.scss";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "../../custom_hooks/useForm";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== password) {
        console.log(password);
        console.log(value);
        return false;
      }
      return true;
    });
  });

  useEffect(() => {
    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, []);

  return (
    <ValidatorForm
      className="SignUp"
      data-testid="SignUp"
      onSubmit={() => signUp()}
    >
      <TextValidator
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        value={email}
        onChange={handleChange}
        validators={["required", "isEmail"]}
        errorMessages={["this field is required", "email is not valid"]}
      />
      <TextValidator
        id="username"
        label="Username"
        variant="outlined"
        name="username"
        value={username}
        onChange={handleChange}
        validators={["required"]}
        errorMessages={["this field is required"]}
      />
      <TextValidator
        id="password"
        label="Password"
        variant="outlined"
        name="password"
        value={password}
        type="password"
        onChange={handleChange}
        validators={["required"]}
        errorMessages={["this field is required"]}
      />
      <TextValidator
        id="confirm-password"
        label="Confirm Password"
        variant="outlined"
        name="confirm_password"
        type="password"
        value={confirm_password}
        onChange={handleChange}
        validators={["isPasswordMatch", "required"]}
        errorMessages={["password mismatch", "this field is required"]}
      />
      <Button id="submit-button" variant="contained" type="submit">
        Default
      </Button>
    </ValidatorForm>
  );
};

export default SignUp;
