import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Profile({ userObj, history }) {
  const [name, setName] = useState(userObj.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //로그아웃 서버에 요청(토큰을 지움)
  const handleLogoutClick = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        history.push("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("/api/users/update_profile", { name }) //req.body에 존재하게 됨
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" onChange={handleNameChange} value={name} id="name" />
        <label htmlFor="email">email</label>
        <input type="email" readOnly value={userObj.email} id="email" />
        <input type="submit" value="update" />
        {/* 비밀번호 변경, 프로필 사진 변경... */}
      </form>
      <button onClick={handleLogoutClick}>로그아웃</button>
    </div>
  );
}

export default withRouter(Profile);
// const mapStateToProps = (state, ownProps) => {
//   return { userObj: state.user.userData };
// };

// export default connect(mapStateToProps)(Profile);
