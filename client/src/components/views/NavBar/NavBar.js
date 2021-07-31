import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MenuBar, NavContainer, UserBar } from "./NavBar.styles";
function NavBar({ isAuth, loading }) {
  return (
    <NavContainer>
      <MenuBar>
        <Link to="/">Home</Link>
        <Link to="/survey">Survey</Link>
        <Link to="/bingo">Bingo</Link>
        <Link to="/about">About</Link>
      </MenuBar>
      <UserBar>
        {!loading && !isAuth && (
          <>
            <Link to="/register">Sign up</Link>
            <Link to="/login">Sign in</Link>
          </>
        )}
        {!loading && isAuth && <Link to="/profile">Profile</Link>}
      </UserBar>
    </NavContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  // auth 완료 후에 로그인 여부에 따라 login, register 혹은 profile 메뉴가 보이도록
  if (!state.user.userData) return { isAuth: false, loading: true };
  return { isAuth: state.user.userData.isAuth, loading: false };
};

export default connect(mapStateToProps)(NavBar);
