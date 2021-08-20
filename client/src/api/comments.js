import axios from "axios";

const api = (() => {
  const uploadComment = (commentInfo) =>
    axios
      .post("/api/comments/upload", commentInfo)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

  const deleteComment = (commentIdtoDelete) =>
    axios
      .delete("/api/comments/delete", {
        data: { commentId: commentIdtoDelete },
        withCredentials: true,
      })
      .catch((err) => console.log(err));

  const getLatestComments = (testId, loadCount, limit) =>
    axios.get("/api/comments/latest", {
      params: { testId, loadCount, limit },
    });

  return {
    uploadComment,
    deleteComment,
    getLatestComments,
  };
})();

export default api;
