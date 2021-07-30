import React from "react";
import axios from "axios";

const useDeleteSurvey = (testId) => {
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
  return handleDeleteSurvey;
};

export default useDeleteSurvey;
