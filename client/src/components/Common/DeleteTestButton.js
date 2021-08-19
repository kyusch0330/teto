import surveyAPI from "api/surveys";
import bingoAPI from "api/bingos";
import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as DeleteImg } from "assets/delete.svg";
import { PALLETE } from "constants/pallete";

const DeleteTestButton = (
  { testId, creatorId, userObj, testType },
  props = []
) => {
  const history = useHistory();
  // survey 삭제 (작성자, 어드민만)
  const handleDeleteSurvey = () => {
    const doDelete = window.confirm("sure to delete this test?");
    if (!doDelete) return;
    if (testType === "survey") {
      surveyAPI
        .deleteSurvey(testId)
        .then(() => history.push("/survey"))
        .catch((err) => console.log(err));
    } else if (testType === "bingo") {
      bingoAPI
        .deleteBingo(testId)
        .then(() => history.push("/bingo"))
        .catch((err) => console.log(err));
    }
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

export default DeleteTestButton;
