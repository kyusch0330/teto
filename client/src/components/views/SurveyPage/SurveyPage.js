import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getTime from "../../../utils/getTime";
import LikeInfo from "../../Common/LikeInfo";
import { LoadMoreButton } from "../NavBar/NavBar.styles";
import {
  Container,
  CreateButton,
  OrderByButtonContainer,
  TestLinkItem,
  TestList,
} from "./SurveyPage.styles";

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
    <Container>
      <CreateButton to="/survey/create">Create Test</CreateButton>
      {surveyList.length > 0 && (
        <TestList>
          <OrderByButtonContainer>
            <button
              onClick={handleOrderByChange}
              className={orderBy === 0 ? "selected" : ""}
              value="0"
            >
              latest
            </button>
            <button
              onClick={handleOrderByChange}
              className={orderBy === 1 ? "selected" : ""}
              value="1"
            >
              popular
            </button>
          </OrderByButtonContainer>

          {surveyList.map((survey) => {
            const d = new Date(Number(survey.createdAt));
            return (
              <TestLinkItem key={survey._id} to={`/survey/${survey._id}`}>
                <span className="survey_title">{survey.title}</span>
                <span className="survey_createdAt">
                  &nbsp; {getTime(survey.createdAt)}
                </span>
                <p className="survey_description">{survey.description}</p>
                <LikeInfo likes={survey.likes} />
              </TestLinkItem>
            );
          })}
        </TestList>
      )}
      {surveyList.length > 0 && (
        <LoadMoreButton onClick={() => setLoadCount(loadCount + 1)}>
          load more...
        </LoadMoreButton>
      )}
    </Container>
  );
}

export default SurveyPage;
