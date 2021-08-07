import React, { useEffect, useState } from "react";
import {
  BingoPageContainer,
  CreateBingoButton,
  OrderByButtonContainer,
  BingoTestBoard,
  BingoList,
  BingoLinkItem,
  LoadMoreButton,
} from "./BingoPage.styles";
import { ReactComponent as BingoImg } from "../../../assets/bingo.svg";
import { PALLETE } from "../../../constants/pallete";
import axios from "axios";
import getTime from "../../../utils/getTime";
import LikeInfo from "../../Common/LikeInfo";

function BingoPage() {
  const [surveyList, setSurveyList] = useState([]);
  const [orderBy, setOrderBy] = useState(0);
  const [loadCount, setLoadCount] = useState(1);
  useEffect(() => {
    axios
      .get("/api/bingos/latest", { params: { loadCount: loadCount } })
      .then((res) => setSurveyList(surveyList.concat(res.data.surveys)));
  }, []);

  useEffect(() => {
    if (orderBy === 0) {
      axios
        .get("/api/bingos/latest", { params: { loadCount: loadCount } })
        .then((res) => setSurveyList(surveyList.concat(res.data.surveys)));
    } else if (orderBy === 1) {
      axios
        .get("/api/bingos/popular", { params: { loadCount: loadCount } })
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BingoPageContainer>
      <CreateBingoButton to="/bingo/create">
        <BingoImg width={24} height={24} fill={PALLETE.WHITE} />
        <span>Create Bingo</span>
      </CreateBingoButton>
      <BingoTestBoard>
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
        <BingoList>
          {surveyList.map((survey) => {
            const d = new Date(Number(survey.createdAt));
            return (
              <BingoLinkItem key={survey._id} to={`/bingo/${survey._id}`}>
                <div className="bingo_title">{survey.title}</div>
                <div className="bingo_createdAt">
                  {getTime(survey.createdAt)}
                </div>
                <p className="bingo_description">
                  {survey.description && survey.description.length > 50
                    ? survey.description.slice(0, 50) + "..."
                    : survey.description}
                </p>
                <LikeInfo likes={survey.likes} />
              </BingoLinkItem>
            );
          })}
        </BingoList>

        {surveyList.length > 0 && (
          <LoadMoreButton onClick={() => setLoadCount(loadCount + 1)}>
            load more...
          </LoadMoreButton>
        )}
      </BingoTestBoard>
    </BingoPageContainer>
  );
}

export default BingoPage;
