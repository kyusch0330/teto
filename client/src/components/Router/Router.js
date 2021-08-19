import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "../../hoc/auth";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPage from "../views/LoginPage/LoginPage";
import RegisterPage from "../views/RegisterPage/RegisterPage";
import NavBar from "../views/NavBar/NavBar";
import Profile from "../views/Profile/Profile";
import SurveyPage from "../views/SurveyPage/SurveyPage";
import About from "../views/About/About";
import CreateSurvey from "../views/CreateSurvey/CreateSurvey";
import Survey from "../views/Survey/Survey";
import SurveyResultPage from "../views/SurveyResultPage/SurveyResultPage";
import BingoResultPage from "../views/BingoResultPage/BingoResultPage";
import Footer from "../views/Footer/Footer";
import BingoPage from "../views/BingoPage/BingoPage";
import CreateBingo from "../views/CreateBingo/CreateBingo";
import Bingo from "components/views/Bingo/Bingo";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/profile" component={Auth(Profile, true)} />
        <Route exact path="/survey" component={Auth(SurveyPage, null)} />
        <Route
          exact
          path="/survey/create"
          component={Auth(CreateSurvey, true)}
        />
        <Route exact path="/survey/:id" component={Auth(Survey, null)} />
        <Route
          exact
          path="/survey-result"
          component={Auth(SurveyResultPage, null)}
        />
        <Route exact path="/bingo" component={Auth(BingoPage, null)} />
        <Route exact path="/bingo/create" component={Auth(CreateBingo, true)} />
        <Route exact path="/bingo/:id" component={Auth(Bingo, null)} />
        <Route
          exact
          path="/bingo-result"
          component={Auth(BingoResultPage, null)}
        />
        <Route exact path="/about" component={Auth(About, null)} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
