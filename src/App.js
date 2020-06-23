import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import LandingPage from "./screens/LandingPage/index.js";
import ErrorPage from "./screens/ErrorPage/index.js";

export default function App() {
  return (
    <Router>
      <Switch>

        <Route path="/error">
          <ErrorPage />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>

        <Route component={RedirectToMain}/> 

      </Switch>
    </Router>
  );
}

const RedirectToMain = _ => {
  return (
      <Redirect to="/error" />
  );
}
