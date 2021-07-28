import axios from "axios";
import { useEffect, useState } from "react";

const useLike = (userObj, isTestLoaded, testId) => {
  const [likedBefore, setLikedBefore] = useState(null);
  const [likes, setLikes] = useState("");
  useEffect(() => {
    if (!isTestLoaded) return;
    console.log("USE EFFECT");
    // 해당 글 좋아요 개수 가져오기
    if (isTestLoaded) {
      axios
        .get("/api/likes/count", { params: { testId: testId } })
        .then((res) => setLikes(res.data.likes));
    }
    // 사용자 좋아요 여부 가져오기
    if (isTestLoaded && userObj) {
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
  }, [isTestLoaded]); //like를 dependency에 추가하면 좋아요 누를 시 현재 좋아요 개수 갱신 가능

  // 좋아요 저장
  const handleLikeClick = () => {
    if (!userObj) {
      // 로그인하지 않은 유저
      alert("you should sign in first.");
      return;
    } else if (likedBefore === null) {
      // 좋아요 여부 가져오는 중
      alert("loading like info");
      return;
    } else if (likedBefore) {
      // 이미 좋아요 등록
      alert("you already liked before.");
      //좋아요 삭제가 필요하면 여기에
      return;
    } else {
      const response = axios
        .post("/api/likes/register", {
          testId: testId,
          userId: userObj._id,
        })
        .then((res) => console.log(res.data))
        .then(() => {
          setLikedBefore(true);
          setLikes(likes + 1);
        })
        .catch((err) => console.log(err));
    }
  };
  return [likes, handleLikeClick];
};

export default useLike;
