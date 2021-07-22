import React from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar({isAuth,loading}) {
  return (
    <div>
     <Link to="/">Home</Link>
     {( !loading && !isAuth ) && (
      <><Link to="/register">Sign up</Link>
      <Link to="/login">Sign in</Link></>)
     }
     {
       ( !loading && isAuth ) && (
        <Link to ="/profile">Profile</Link>
       )
     }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => { 
  // auth 완료 후에 로그인 여부에 따라 login, register 메뉴가 보이도록 
  if(!state.user.userData) return {isAuth:false, loading:true};
  return { isAuth: state.user.userData.isAuth, loading:false}; //Home은 store를 사용할 수 있게 됨
};

export default connect(mapStateToProps)(NavBar);