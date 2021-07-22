import React, { useEffect } from 'react';
import axios from 'axios';
//history는 react-router-dom을 이용해서 사용하는 것
//HOC를 거쳐도 history.push를 사용할 수 있도록 import
import { withRouter } from 'react-router-dom'; 

function LandingPage({ userObj, history }) {
  console.log( userObj ); 
  // useEffect(() => {
  //   axios.get('/api/hello')
  //   .then(res => console.log(res));
  // }, []);

  //로그아웃 서버에 요청(토큰을 지움)
  const handleLogoutClick = () => {
    axios.get('/api/users/logout').
      then(response => {
        if(response.data.success) {
          history.push('/login');
        } else {
          alert("로그아웃 실패");
        }
      });
  }
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '100vh'
      }}>
      <h2>시작 페이지</h2>
      {userObj? "로그인 상태":"비로그인 상태"}
      {userObj && userObj.isAuth ? <button onClick={handleLogoutClick}>로그아웃</button> :null}
    </div>
  );
}

export default withRouter(LandingPage);