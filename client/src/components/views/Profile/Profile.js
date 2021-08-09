import React, { useState } from "react";
import userAPI from "api/users";
import { withRouter } from "react-router-dom";
import {
  ProfileForm,
  LogoutButton,
  ProfileContainer,
  UpdateButton,
} from "./Profile.styles";

function Profile({ userObj, history }) {
  const [name, setName] = useState(userObj.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //로그아웃 서버에 요청(토큰을 지움)
  const handleLogoutClick = () => {
    userAPI.logoutUser().then((response) => {
      if (response.data.success) {
        history.push("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userAPI
      .updateProfile({ name })
      .then((response) => {
        if (response.data.success) {
          alert("업데이트 성공");
        } else {
          alert("업데이트 실패");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <ProfileContainer>
      <ProfileForm onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" onChange={handleNameChange} value={name} id="name" />
        <label htmlFor="email">email</label>
        <input type="email" readOnly value={userObj.email} id="email" />
        <UpdateButton type="submit">Update Profile</UpdateButton>
        {/* 비밀번호 변경, 프로필 사진 변경... */}
      </ProfileForm>
      <LogoutButton onClick={handleLogoutClick}>로그아웃</LogoutButton>
    </ProfileContainer>
  );
}

export default withRouter(Profile);
// const mapStateToProps = (state, ownProps) => {
//   return { userObj: state.user.userData };
// };

// export default connect(mapStateToProps)(Profile);
