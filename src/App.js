import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import UserProvider from "./providers/userProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* <UserProvider> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
