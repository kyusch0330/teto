import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getTime from "../../../utils/getTime";

function SurveyPage() {
  const [surveyList, setSurveyList] = useState([]);
  const [loadCount, setLoadCount] = useState(1);
  useEffect(() => {
    const request = axios
      .get("/api/surveys", { params: { loadCount: loadCount } })
      .then((res) => setSurveyList(surveyList.concat(res.data.surveys)));
  }, [loadCount]);
  console.log(surveyList);

  return (
    <div>
      <Link to="/survey/create">Create Survey</Link>
      <br />
      Survey List
      <ul>
        {surveyList.length > 0 &&
          surveyList.map((survey) => {
            const d = new Date(Number(survey.createdAt));
            return (
              <>
                <Link key={survey.id} to={`/survey/${survey._id}`}>
                  <span>제목: {survey.title} </span>
                  <span> {getTime(survey.createdAt)}</span>
                </Link>
                <br />
                <br />
              </>
            );
          })}
      </ul>
      <button onClick={() => setLoadCount(loadCount + 1)}>load more...</button>
    </div>
  );
}

export default SurveyPage;
