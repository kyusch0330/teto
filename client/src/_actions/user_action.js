import axios from "axios";
//action 타입들을 가져온다.
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  SOCIAL_LOGIN_USER,
} from "./types";

//login 시 dispatch에 들어갈 action을 반환하는 함수
export function loginUser(dataToSubmit) {
  // 로그인 정보를 서버로 전송하여 돌아온 응답을 저장
  const response = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);

  // user reducer로 보내서 저장할 데이터 반환
  return {
    type: LOGIN_USER,
    payload: response, //서버에서 받은 응답를 담는다.
  };
}

//social login 시 dispatch에 들어갈 action을 반환하는 함수
export function socialLoginUser(dataToSubmit) {
  // 로그인 정보를 서버로 전송하여 돌아온 응답을 저장
  const response = axios
    .post("/api/users/social_login", dataToSubmit)
    .then((response) => response.data);

  // user reducer로 보내서 저장할 데이터 반환
  return {
    type: SOCIAL_LOGIN_USER,
    payload: response, //서버에서 받은 응답를 담는다.
  };
}

//register 시 dispatch에 들어갈 action을 반환하는 함수
export function registerUser(dataToSubmit) {
  // 회원가입 정보를 서버로 전송하여 돌아온 응답을 저장
  const response = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);

  // user reducer로 보내서 저장할 데이터 반환
  return {
    type: REGISTER_USER,
    payload: response, //서버에서 받은 응답를 담는다.
  };
}

//쿠키의 토큰을 전송해 사용자 인증
export function authUser() {
  // 쿠키 외에 전송할 데이터 없음 (서버에서 토큰에서 사용자 아이디 추출가능)
  const response = axios.get("/api/users/auth").then((res) => res.data);

  // user reducer로 보내서 저장할 데이터 반환
  return {
    type: AUTH_USER,
    payload: response, //사용자의 모든 정보가 담겨짐
  };
}
