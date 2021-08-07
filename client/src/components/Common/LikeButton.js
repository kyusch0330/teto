import React, { useEffect, useState } from "react";
import { ReactComponent as LikeImg } from "../../assets/like.svg";
import axios from "axios";
import styled from "styled-components";
import { PALLETE } from "../../constants/pallete";

const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  background: ${PALLETE.WHITE};
  padding: 10px;
  border: 1px solid ${PALLETE.GRAY_LIGHT};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    svg: {
      color: ${PALLETE.GRAY_LIGHT};
    }
  }
`;
const LikeButton = ({ initialLikes, userObj, testId }) => {
  const [likedBefore, setLikedBefore] = useState(null);
  const [likes, setLikes] = useState(initialLikes);
  useEffect(() => {
    // 사용자 좋아요 여부 가져오기
    if (userObj && userObj.isAuth) {
      axios
        .get("/api/likes/likedbefore", {
          params: {
            testId: testId,
            userId: userObj._id,
          },
          withCredentials: true,
        })
        .then((res) => setLikedBefore(res.data.likedBefore))
        .catch((err) => console.log(err));
    }
  }, []); //like를 dependency에 추가하면 좋아요 누를 시 현재 좋아요 개수 갱신 가능

  // 좋아요 저장
  const handleLikeClick = () => {
    if (!userObj || !userObj.isAuth) {
      // 로그인하지 않은 유저
      alert("you should sign in first.");
      return;
    } else if (likedBefore === null) {
      // 좋아요 여부 가져오는 중
      alert("loading like info");
      return;
    } else if (likedBefore) {
      // 이미 좋아요 등록
      //좋아요 삭제가 필요하면 여기에
      alert("you already liked before.");
      return;
    } else {
      setLikedBefore(true);
      //해당 게시글 해당 유저 좋아요 등록
      axios
        .post("/api/likes/register", {
          testId,
          userId: userObj._id,
        })
        .then((res) => console.log(res.data))
        .then(() => {
          setLikes(likes + 1);
        })
        .catch((err) => {
          console.log(err);
          setLikedBefore(true);
        });
      // 해당 게시글에 좋아요 수 업데이트
      axios
        .put("/api/surveys/update_like", {
          testId,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <LikeBtn type="button" onClick={handleLikeClick}>
      <LikeImg
        width={likedBefore ? 20 : 15}
        height={likedBefore ? 20 : 15}
        fill={likedBefore ? PALLETE.RED : PALLETE.GRAY_LIGHT}
      />
      &nbsp;{likes}
    </LikeBtn>
  );
};

export default LikeButton;
