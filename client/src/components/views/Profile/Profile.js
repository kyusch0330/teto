import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

function Profile({ userObj }) {
  const [name, setName] = useState(userObj.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  console.log(userObj);
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
    </div>
  );
}

export default Profile;
// const mapStateToProps = (state, ownProps) => {
//   return { userObj: state.user.userData };
// };

// export default connect(mapStateToProps)(Profile);
