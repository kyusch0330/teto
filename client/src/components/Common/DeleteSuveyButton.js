import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

const DeleteSuveyButton = ({ testId, creatorId, userObj }) => {
  const history = useHistory();
  // survey 삭제 (작성자, 어드민만)
  const handleDeleteSurvey = () => {
    axios
      .delete("/api/surveys/delete", {
        data: { id: testId },
        withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .then(() => history.push("/survey"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {userObj && (creatorId === userObj._id || userObj.isAdmin) && (
        <button onClick={handleDeleteSurvey}>Delete Test</button>
      )}
    </>
  );
};

export default DeleteSuveyButton;
