import React, { useEffect, useState } from "react";
import surveyAPI from "api/surveys";
import bingoAPI from "api/bingos";
//history는 react-router-dom을 이용해서 사용하는 것
//HOC를 거쳐도 history.push를 사용할 수 있도록 import
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  MainContainer,
  PopularTestContainer,
} from "./LandingPage.styles";
import PopularTestList from "./Sections/PopularTestList";
import Introduction from "./Sections/Introduction";

function LandingPage({ userObj }) {
  const [surveyList, setSurveyList] = useState([]);
  const [bingoList, setBingoList] = useState([]);
  useEffect(() => {
    surveyAPI
      .getPopularSurveys(1, 5)
      .then((surveys) => setSurveyList(surveyList.concat(surveys)));
    bingoAPI
      .getPopularBingos(1, 5)
      .then((bingos) => setBingoList(bingoList.concat(bingos)));
  }, []);
  console.log("surveys", surveyList);
  return (
    <Container>
      <PopularTestContainer>
        <PopularTestList testArray={surveyList} testType={"survey"} />
        <PopularTestList testArray={bingoList} testType={"bingo"} />
      </PopularTestContainer>
      <MainContainer>
        <Introduction />
      </MainContainer>
    </Container>
  );
}

export default withRouter(LandingPage);
