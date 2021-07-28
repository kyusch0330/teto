import React from "react";
import { Link, useHistory } from "react-router-dom";
import useLike from "../../../hooks/useLike";

function ResultPage({ location }) {
  const history = useHistory();
  const state = location.state
    ? location.state
    : {
        result: { name: null, description: null },
        userObj: null,
        testId: null,
      };
  if (!state.testId) {
    alert("잘못된 경로입니다.");
    history.push("/");
  }
  const resultType = state.result;
  const [likes, handleLikeClick] = useLike(state.userObj, state.testId);
  return (
    <div>
      Result
      <h2>{resultType.name}</h2>
      <p>{resultType.description}</p>
      <h3>Like {likes}</h3>
      <button onClick={handleLikeClick}>Like</button>
      <br />
      <Link to="/survey">다른 테스트하러 가기</Link>
    </div>
  );
}

export default ResultPage;
