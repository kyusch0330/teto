import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser, socialLoginUser } from "_actions/user_action";
//HOC 사용후 history.push가 안되는 오류방지
import { Link, withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import {
  LoginButton,
  LoginContainer,
  LoginForm,
  RegisterLinkButton,
} from "./LoginPage.styles";
import { ReactComponent as LogoImg } from "assets/teto_logo.svg";
import { PALLETE } from "constants/pallete";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function LoginPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //submit 누를 때마다 새로고침 방지

    let body = {
      email: email,
      password: password,
    };

    //axios.post('api/users/login',body) ~~ -> redux를 사용하지 않는 경우
    //action을 반환받아 dispatch 실행
    //redux thunk 덕에 비동기 동작을 하는 함수가 인자로 들어갈 수 있다.
    dispatch(loginUser(body)).then((response) => {
      //loginUser(body)의 반환값인 action 객체가 전달됨(???)
      if (response.payload.loginSuccess) {
        console.log(response);
        props.history.push("/"); //로그인 성공시 landing page로
      } else {
        setLoginError(response.payload.message);
      }
    });
  };

  const handleGoogleSuccess = (res) => {
    console.log(res);
    const socialId = "G" + res.googleId;
    let body = {
      name: res.Ts.Me,
      email: res.Ts.Et,
      password: socialId,
      socialId: socialId,
    };
    //해당 Social ID가 DB에 존재하는지 확인
    axios
      .get("api/users/check_social_id", {
        params: { socialId: socialId },
      })
      .then((res) => {
        if (!res.data.checkSocialIdSuccess) {
          //존재하지 않으면 회원가입
          dispatch(registerUser(body)).then((response) => {
            if (!response.payload.success) console.log("social register error");
          });
        }
      })
      .then(() => {
        dispatch(socialLoginUser(body)).then((response) => {
          if (response.payload.loginSuccess) {
            props.history.push("/"); //로그인 성공시 landing page로
          } else setLoginError(response.payload.message);
        });
      });
  };
  const handleGoogleFailure = (err) => console.log(err);

  return (
    <LoginContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <LoginForm
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <LogoImg width={130} height={50} fill={PALLETE.GRAY_LIGHT} />
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <h5>{loginError}</h5>
        <LoginButton>Login</LoginButton>
      </LoginForm>
      <RegisterLinkButton>
        <Link to="/register">Sign up</Link>
      </RegisterLinkButton>
      <GoogleLogin
        clientId={GOOGLE_API_KEY}
        buttonText="Login with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        cookiePolicy="single_host_origin"
      />
    </LoginContainer>
  );
}

export default withRouter(LoginPage);
