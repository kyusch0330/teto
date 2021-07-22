import React from 'react'
import { HashRouter, Switch, Route} from 'react-router-dom';
import LandingPage from '../views/LandingPage/LandingPage';
import LoginPage from '../views/LoginPage/LoginPage';
import RegisterPage from '../views/RegisterPage/RegisterPage';
import Auth from '../../hoc/auth';
import NavBar from '../views/NavBar/NavBar';
import Profile from '../views/Profile/Profile';

function AppRouter() {
  return (
    <HashRouter>
      <NavBar/>
      <Switch> {/**매칭되는 첫번째 라우트만 보여준다. */}
        <Route exact path='/' component ={Auth(LandingPage, null)}/>
        <Route exact path='/login' component ={Auth(LoginPage, false)}/>
        <Route exact path='/register' component ={Auth(RegisterPage, false)}/>
        <Route exact path='/profile' component={Auth(Profile,true)}/>
      </Switch>
    </HashRouter>
  )
}

export default AppRouter;
