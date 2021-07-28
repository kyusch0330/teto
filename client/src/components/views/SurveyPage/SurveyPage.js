import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <h3>제목: {survey.title}</h3>
                <h5>{`${d.getFullYear()}년 
                ${d.getMonth() + 1}월 
                ${d.getDate()}일 
                ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</h5>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default SurveyPage;
