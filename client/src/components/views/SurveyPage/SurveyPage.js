import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getTime from "../../../utils/getTime";

function SurveyPage() {
  const [surveyList, setSurveyList] = useState([]);
  const [orderBy, setOrderBy] = useState(0);
  const [loadCount, setLoadCount] = useState(1);
  useEffect(() => {
    axios
      .get("/api/surveys/latest", { params: { loadCount: loadCount } })
      .then((res) => setSurveyList(surveyList.concat(res.data.surveys)));
  }, []);

  useEffect(() => {
    if (orderBy === 0) {
      axios
        .get("/api/surveys/latest", { params: { loadCount: loadCount } })
        .then((res) => setSurveyList(surveyList.concat(res.data.surveys)));
    } else if (orderBy === 1) {
      axios
        .get("/api/surveys/popular", { params: { loadCount: loadCount } })
        .then((res) => setSurveyList(surveyList.concat(res.data.surveys)));
    }
  }, [orderBy, loadCount]);

  const handleOrderByChange = (e) => {
    const nextOrderBy = Number(e.target.value);
    if (nextOrderBy === orderBy) return;
    setSurveyList([]);
    setLoadCount(1);
    setOrderBy(nextOrderBy);
  };

  return (
    <div>
      <Link to="/survey/create">Create Survey</Link>
      <br />
      Survey List
      <button onClick={handleOrderByChange} value="0">
        latest
      </button>
      <button onClick={handleOrderByChange} value="1">
        popular
      </button>
      <ul>
        {surveyList.length > 0 &&
          surveyList.map((survey) => {
            const d = new Date(Number(survey.createdAt));
            return (
              <>
                <Link key={survey.id} to={`/survey/${survey._id}`}>
                  <span>제목: {survey.title}</span>
                  <span> (추천:{survey.likes})</span>
                  <br />
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
