import axios from "axios";

const api = (() => {
  const uploadBingo = (bingoToUpload) =>
    axios.post("/api/bingos/upload", bingoToUpload);
  // .then((response) => console.log(response.data))

  const updateBingo = (testId, bingoToUpdate) =>
    axios.put("/api/bingos/update", {
      _id: testId,
      bingoToEdit: bingoToUpdate,
    });
  // .then((response) => console.log(response.data));

  const deleteBingo = (testId) =>
    axios
      .delete("/api/bingos/delete", {
        data: { id: testId },
        withCredentials: true,
      })
      .then((res) => console.log(res.data));

  const getBingo = (testId) =>
    axios.post("/api/bingos/specific", { id: testId });

  const getLatestBingos = (loadCount, limit) =>
    axios
      .get("/api/bingos/latest", { params: { loadCount, limit } })
      .then((res) => res.data.bingos);

  const getPopularBingos = (loadCount, limit) =>
    axios
      .get("/api/bingos/popular", { params: { loadCount, limit } })
      .then((res) => res.data.bingos);

  const updateLikes = (testId) =>
    axios
      .put("/api/bingos/update_like", {
        testId,
      })
      .then((res) => console.log(res.data));

  return {
    uploadBingo,
    updateBingo,
    deleteBingo,
    getBingo,
    getLatestBingos,
    getPopularBingos,
    updateLikes,
  };
})();

export default api;
