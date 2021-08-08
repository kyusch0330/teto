import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EditImg } from "assets/edit.svg";
import { PALLETE } from "constants/pallete";

const EditSurveyButton = ({ survey, creatorId, userObj }) => {
  return (
    <>
      {userObj && (creatorId === userObj._id || userObj.isAdmin) && (
        <Link
          to={{
            pathname: "/survey/create",
            state: {
              edit: true,
              surveyToEdit: survey,
            },
          }}
        >
          <EditImg
            className="editLink"
            width={32}
            height={32}
            fill={PALLETE.BLACK_LIGHT}
          />
        </Link>
      )}
    </>
  );
};

export default EditSurveyButton;
