import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EditImg } from "assets/edit.svg";
import { PALLETE } from "constants/pallete";

const EditTestButton = ({ testData, creatorId, userObj, testType }) => {
  return (
    <>
      {userObj && (creatorId === userObj._id || userObj.isAdmin) && (
        <Link
          to={{
            pathname: `/${testType}/create`,
            state: {
              edit: true,
              dataToEdit: testData,
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

export default EditTestButton;
