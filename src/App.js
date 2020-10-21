import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import PasswordForgetPage from "./components/PasswordForgetPage";
import HomePage from "./components/HomePage";
import AccountPage from "./components/AccountPage";
import AdminPage from "./components/AdminPage";

import * as ROUTES from "./constans/routes";

const App = () => (
  <Router>
    <header class="header">
      <nav className="navigation">
        <Navigation />
      </nav>
      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </header>
  </Router>
);

export default App;
