import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
//HOC 사용후 history.push가 안되는 오류방지
import { withRouter } from "react-router-dom";

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
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
        <br />
        <h5>{loginError}</h5>
        <button>Login</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
