import React, { useEffect, useState } from "react";
import axios from "axios";
//history는 react-router-dom을 이용해서 사용하는 것
//HOC를 거쳐도 history.push를 사용할 수 있도록 import
import { Link, withRouter } from "react-router-dom";

function LandingPage({ userObj }) {
  const [surveyList, setSurveyList] = useState([]);
  useEffect(() => {
    const request = axios
      .get("/api/surveys/popular", { params: { loadCount: 1 } })
      .then((res) => setSurveyList(surveyList.concat(res.data.surveys)));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <h3>인기 테스트</h3>
        {surveyList.length > 0 &&
          surveyList.map((survey) => (
            <div>
              <Link key={survey.id} to={`/survey/${survey._id}`}>
                <span>
                  제목: {survey.title} (추천:{survey.likes})
                </span>
              </Link>
            </div>
          ))}
      </div>
      <h2>시작 페이지</h2>
      {userObj ? "로그인 상태" : "비로그인 상태"}
    </div>
  );
}

export default withRouter(LandingPage);
