import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getTime from "../../../utils/getTime";

function SurveyPage() {
  const [surveyList, setSurveyList] = useState([]);
  useEffect(() => {
    const request = axios
      .get("/api/surveys")
      .then((res) => setSurveyList(res.data.surveys));
  }, []);
  console.log(surveyList);

  return (
    <div>
      <Link to="/survey/create">Create Survey</Link>
      <br />
      Survey List
      <ul>
        {surveyList.length &&
          surveyList.map((survey) => {
            const d = new Date(Number(survey.createdAt));
            return (
              <Link key={survey.id} to={`/survey/${survey._id}`}>
                <h5>제목: {survey.title}</h5>
                <h6>{getTime(survey.createdAt)}</h6>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default SurveyPage;
