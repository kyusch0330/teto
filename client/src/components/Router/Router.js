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
import Bingo from "../views/Bingo/Bingo";
import About from "../views/About/About";
import CreateSurvey from "../views/CreateSurvey/CreateSurvey";
import Survey from "../views/Survey/Survey";
import ResultPage from "../views/ResultPage/ResultPage";
import Footer from "../views/Footer/Footer";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/profile" component={Auth(Profile, true)} />
        <Route exact path="/survey" component={SurveyPage} />
        <Route
          exact
          path="/survey/create"
          component={Auth(CreateSurvey, true)}
        />
        <Route exact path="/survey/:id" component={Auth(Survey, null)} />
        <Route exact path="/result" component={ResultPage} />
        <Route exact path="/bingo" component={Bingo} />
        <Route exact path="/about" component={About} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
