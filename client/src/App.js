import './App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

function App() {
  return (
    <HashRouter>
      <Switch> {/**매칭되는 첫번째 라우트만 보여준다. */}
        <Route exact path='/' component ={Auth(LandingPage, null)}/>
        <Route exact path='/login' component ={Auth(LoginPage, false)}/>
        <Route exact path='/register' component ={Auth(RegisterPage, false)}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
