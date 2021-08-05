import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
import {
  RegisterButton,
  RegisterContainer,
  RegisterForm,
} from "./Register.styles";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleNameChange = (event) => {
    setName(event.currentTarget.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleConfirmChange = (event) => {
    setConfirm(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirm) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    }

    let body = {
      name: name,
      email: email,
      password: password,
    };

    //registerUser에서 서버에 전송
    dispatch(registerUser(body)).then((response) => {
      //registerUser(body)의 액션 반환값(서버에서 보낸 회원가입 성공 여부 포함)
      if (response.payload.success) {
        props.history.push("/login"); //성공시 로그인 페이지로
      } else alert("회원가입에 실패했습니다.");
    });
  };

  return (
    <RegisterContainer>
      <RegisterForm
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
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
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="confirm password"
          value={confirm}
          onChange={handleConfirmChange}
        />
        <br />
        <RegisterButton>Register</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default withRouter(RegisterPage);
