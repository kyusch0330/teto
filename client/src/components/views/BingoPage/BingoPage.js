import React, { useEffect, useState } from "react";
import {
  BingoSizeInfo,
  Container,
  CreateButton,
  LoadMoreButton,
  OrderByButtonContainer,
  TestBoard,
  TestLinkItem,
  TestList,
} from "./BingoPage.styles";
import { ReactComponent as BingoImg } from "assets/bingo.svg";
import { PALLETE } from "constants/pallete";
import getTime from "utils/getTime";
import LikeInfo from "components/Common/LikeInfo";
import bingoAPI from "api/bingos";

function BingoPage() {
  const [bingoList, setBingoList] = useState([]);
  const [orderBy, setOrderBy] = useState(0);
  const [loadCount, setLoadCount] = useState(1);
  useEffect(() => {
    bingoAPI
      .getLatestBingos(loadCount, 8)
      .then((bingos) => setBingoList(bingoList.concat(bingos)));
  }, []);

  useEffect(() => {
    if (orderBy === 0) {
      bingoAPI
        .getLatestBingos(loadCount, 8)
        .then((bingos) => setBingoList(bingoList.concat(bingos)));
    } else if (orderBy === 1) {
      bingoAPI
        .getPopularBingos(loadCount, 8)
        .then((bingos) => setBingoList(bingoList.concat(bingos)));
    }
  }, [orderBy, loadCount]);

  const handleOrderByChange = (e) => {
    const nextOrderBy = Number(e.target.value);
    if (nextOrderBy === orderBy) return;
    setBingoList([]);
    setLoadCount(1);
    setOrderBy(nextOrderBy);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <CreateButton to="/bingo/create">
        <BingoImg width={24} height={24} fill={PALLETE.WHITE} />
        <span>Create Bingo</span>
      </CreateButton>
      <TestBoard>
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
        <TestList>
          {bingoList.map((bingo) => {
            const d = new Date(Number(bingo.createdAt));
            console.log(bingo);
            return (
              <TestLinkItem key={bingo._id} to={`/bingo/${bingo._id}`}>
                <BingoSizeInfo bingoSize={bingo.bingoSize}>
                  {bingo.bingoSize} x {bingo.bingoSize}
                </BingoSizeInfo>
                <div className="bingo_title">{bingo.title}</div>
                <div className="bingo_createdAt">
                  {getTime(bingo.createdAt, true)}
                </div>
                <div className="bingo_userName">{bingo.userName}</div>
                <p className="bingo_description">
                  {bingo.description && bingo.description.length > 30
                    ? bingo.description.slice(0, 30) + "..."
                    : bingo.description}
                </p>
                <LikeInfo likes={bingo.likes} />
              </TestLinkItem>
            );
          })}
        </TestList>

        {bingoList.length > 0 && bingoList.length % 8 === 0 && (
          <LoadMoreButton onClick={() => setLoadCount(loadCount + 1)}>
            load more...
          </LoadMoreButton>
        )}
      </TestBoard>
    </Container>
  );
}

export default BingoPage;
