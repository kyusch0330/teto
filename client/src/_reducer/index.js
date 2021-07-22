import { combineReducers } from 'redux';
import user from './user_reducer';

/*
  Reducer는 여러가지가 있을 수 있음
  Reducer는 state의 변화값을 리턴해주는데,
  여러 state가 있기 때문에 여러 reduce가 존재
  combine reducer로 여러 reducer를 rootReducer에 하나로 합쳐준다.
*/
const rootReducer = combineReducers({
  user,
});

export default rootReducer;