import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  MainBar,
  MenuBar,
  MenuButton,
  NavContainer,
  UserBar,
} from "./NavBar.styles";
import { ReactComponent as MenuImg } from "assets/menu.svg";
import { ReactComponent as LogoImg } from "assets/teto_logo.svg";
import { PALLETE } from "constants/pallete";

function NavBar({ isAuth, loading }) {
  const [menuBarDisplay, setMenuBarDisplay] = useState(false);
  const handleCloseMenu = () => {
    setTimeout(() => setMenuBarDisplay(false), 250);
  };
  return (
    <NavContainer onBlur={handleCloseMenu}>
      <MainBar>
        <Link className="logo" to="/">
          <LogoImg width={130} height={50} fill={PALLETE.WHITE} />
        </Link>
        <MenuButton
          type="button"
          onClick={() => setMenuBarDisplay((menuBarDisplay) => !menuBarDisplay)}
        >
          <MenuImg width={24} height={24} fill={PALLETE.WHITE} />
        </MenuButton>
        <MenuBar menuDisplay={menuBarDisplay}>
          <Link to="/survey">Survey</Link>
          <Link to="/bingo">Bingo</Link>
          <Link to="/about">About</Link>
        </MenuBar>
      </MainBar>
      <UserBar menuDisplay={menuBarDisplay}>
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
