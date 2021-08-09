import axios from "axios";

const api = (() => {
  const registerUser = (dataToSubmit) =>
    axios
      .post("/api/users/register", dataToSubmit)
      .then((response) => response.data);

  const loginUser = (dataToSubmit) =>
    axios
      .post("/api/users/login", dataToSubmit)
      .then((response) => response.data);

  const socialLoginUser = (dataToSubmit) =>
    axios
      .post("/api/users/social_login", dataToSubmit)
      .then((response) => response.data);

  const logoutUser = () => axios.get("/api/users/logout");

  const authUser = () => axios.get("/api/users/auth").then((res) => res.data);

  const checkSocialId = (socialId) =>
    axios.get("api/users/check_social_id", {
      params: { socialId: socialId },
    });

  const updateProfile = (userInfoToUpdate) =>
    axios.put("/api/users/update_profile", userInfoToUpdate); //req.body에 존재하게 됨

  return {
    registerUser,
    loginUser,
    socialLoginUser,
    logoutUser,
    authUser,
    checkSocialId,
    updateProfile,
  };
})();

export default api;
