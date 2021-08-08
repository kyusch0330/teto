import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as DeleteImg } from "assets/delete.svg";
import { PALLETE } from "constants/pallete";

const DeleteSurveyButton = ({ testId, creatorId, userObj }, props = []) => {
  const history = useHistory();
  // survey 삭제 (작성자, 어드민만)
  const handleDeleteSurvey = () => {
    const doDelete = window.confirm("sure to delete this test?");
    if (!doDelete) return;
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
        <DeleteImg
          className="deleteBtn"
          width={32}
          height={32}
          fill={PALLETE.BLACK_LIGHT}
          {...props}
          onClick={handleDeleteSurvey}
        >
          Delete Test
        </DeleteImg>
      )}
    </>
  );
};

export default DeleteSurveyButton;
