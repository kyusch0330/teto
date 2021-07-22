import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Ant Design
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducer'; ///index.js 생략해도 알아서 처리됨

//store에서 객체 이외에 promise와 function도 받을 수 있도록 미들웨어 추가
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__() //크롬 Redux DevTools extension 연동
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

