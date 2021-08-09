import axios from "axios";

const api = (() => {
  const registerLike = (testId, userId) =>
    axios
      .post("/api/likes/register", {
        testId,
        userId,
      })
      .then((res) => console.log(res.data));

  const getLikedBefore = (testId, userId) =>
    axios.get("/api/likes/likedbefore", {
      params: {
        testId,
        userId,
      },
      withCredentials: true,
    });

  return {
    registerLike,
    getLikedBefore,
  };
})();

export default api;
