import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Auth from "../../hoc/auth";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPage from "../views/LoginPage/LoginPage";
import RegisterPage from "../views/RegisterPage/RegisterPage";
import NavBar from "../views/NavBar/NavBar";
import Profile from "../views/Profile/Profile";
import Survey from "../views/Survey/Survey";
import Bingo from "../views/Bingo/Bingo";
import About from "../views/About/About";

function AppRouter() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/profile" component={Auth(Profile, true)} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/bingo" component={Bingo} />
        <Route exact path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
}

export default AppRouter;
