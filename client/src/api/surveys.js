import axios from "axios";

const api = (() => {
  const uploadSurvey = (surveyToUpload) =>
    axios.post("/api/surveys/upload", surveyToUpload);
  // .then((response) => console.log(response.data))

  const updateSurvey = (testId, surveyToUpdate) =>
    axios.put("/api/surveys/update", {
      _id: testId,
      surveyToEdit: surveyToUpdate,
    });
  // .then((response) => console.log(response.data));

  const deleteSurvey = (testId) =>
    axios
      .delete("/api/surveys/delete", {
        data: { id: testId },
        withCredentials: true,
      })
      .then((res) => console.log(res.data));

  const getSurvey = (testId) =>
    axios.post("/api/surveys/specific", { id: testId });

  const getLatestSurveys = (loadCount, limit) =>
    axios
      .get("/api/surveys/latest", { params: { loadCount, limit } })
      .then((res) => res.data.surveys);

  const getPopularSurveys = (loadCount, limit) =>
    axios
      .get("/api/surveys/popular", { params: { loadCount, limit } })
      .then((res) => res.data.surveys);

  const updateLikes = (testId) =>
    axios
      .put("/api/surveys/update_like", {
        testId,
      })
      .then((res) => console.log(res.data));

  return {
    uploadSurvey,
    updateSurvey,
    deleteSurvey,
    getSurvey,
    getLatestSurveys,
    getPopularSurveys,
    updateLikes,
  };
})();

export default api;
