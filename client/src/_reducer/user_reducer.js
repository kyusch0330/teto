import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
} from '../_actions/types';

//dispatch를 통해 전달된 action 처리
export default function(prevState = {}, action) {
  //action type 마다 다른 동작
  switch (action.type) {
    case LOGIN_USER:
        // 이전 state에서 loginSuccess만 payload로 교체해서(혹은 추가) store에 저장
        return { ...prevState, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
        return { ...prevState, register: action.payload };
      break;
    case AUTH_USER:
        return { ...prevState, userData: action.payload }; //payload에 유저의 모든 정보 포함됨
      break;
    default:  // 올바른 action이 아니면 이전 state 그대로 저장
      return  prevState;
      break;
  }
}