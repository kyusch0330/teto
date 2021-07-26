import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Survey() {
  const [surveyList, setSurveyList] = useState([]);
  useEffect(() => {
    const request = axios
      .get("/api/surveys")
      .then((res) => setSurveyList(res.data.surveys));
  }, []);
  console.log(surveyList);

  return (
    <div>
      Survey
      <Link to="/survey/create">Create Survey</Link>
      <ul>
        {surveyList.length &&
          surveyList.map((survey) => {
            const d = new Date(Number(survey.createdAt));
            return (
              <li key={survey.id}>
                <h3>제목: {survey.title}</h3>
                <h5>{`${d.getFullYear()}년 
                ${d.getMonth() + 1}월 
                ${d.getDate()}일 
                ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</h5>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Survey;
