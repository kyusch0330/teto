import React from "react";
import { Link } from "react-router-dom";

function ResultPage({ location }) {
  const resultType = location.state
    ? location.state
    : { name: "잘못된 요청", description: "잘못된 경로입니다." };

  return (
    <div>
      Result
      <h2>{resultType.name}</h2>
      <p>{resultType.description}</p>
      <Link to="/survey">다른 테스트하러 가기</Link>
    </div>
  );
}

export default ResultPage;
