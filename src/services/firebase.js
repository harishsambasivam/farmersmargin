import * as firebase from "firebase/app";
import "firebase/auth";
import dotenv from "dotenv";
dotenv.config({ silent: true });

console.log(process.env.REACT_APP_API_KEY);

firebase.initializeApp({
  apiKey: "AIzaSyD6ekOVfdLDy0gDmjzEUQOdW0TNayHFvio",
  authDomain: "farmersmargin.firebaseapp.com",
  databaseURL: "https://farmersmargin.firebaseio.com",
  projectId: "farmersmargin",
  storageBucket: "farmersmargin.appspot.com",
  messagingSenderId: "362019645996",
  appId: "1:362019645996:web:41fdd28f75720966203f89",
  measurementId: "G-C573170P98",
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
