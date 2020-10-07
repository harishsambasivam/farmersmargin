import React, { useContext } from "react";
import "./SignIn.scss";
import * as firebase from "firebase/app";
import { Button } from "@material-ui/core";
import { useForm } from "../../custom_hooks/useForm";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { signInWithGoogle } from "../../services/firebase";
import { LoginContext } from "../../providers/loginProvider";

const SignIn = () => {
  const [{ email, password }, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const signIn = async (e) => {
    console.log(email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) setLoggedIn(true);
      })
      .catch((e) => {
        // setErrors(e.message);
      });
  };

  return (
    <ValidatorForm
      className="SignIn"
      data-testid="SignIn"
      onSubmit={() => signIn()}
    >
      <TextValidator
        id="email"
        label="Email or Username"
        variant="outlined"
        name="email"
        value={email}
        onChange={handleChange}
        validators={["required", "isEmail"]}
        errorMessages={["this field is required", "email is not valid"]}
      />
      <TextValidator
        id="password"
        label="Enter Your Password"
        name="password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handleChange}
        validators={["required"]}
        errorMessages={["this field is required"]}
      />
      <Button type="submit" variant="contained">
        Default
      </Button>
      <Button className="login-provider-button" onClick={signInWithGoogle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </Button>
    </ValidatorForm>
  );
};

export default SignIn;
