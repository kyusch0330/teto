import surveyAPI from "api/surveys";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useSurvey = (testId) => {
  const [survey, setSurvey] = useState(null);

  const history = useHistory();
  // 해당 survey 가져오기
  useEffect(() => {
    surveyAPI.getSurvey(testId).then((res) => {
      if (!res.data.success) {
        alert(res.data.message);
        history.push("/survey");
      }
      setSurvey(res.data.survey);
    });
  }, []);

  return survey;
};

export default useSurvey;
