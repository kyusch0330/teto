/*
  mongoDB key
  token key
  환경변수 process.env.NODE_ENV 가
  production 인지 development 인지에 따라
  어떤 key를 가져올지 나눠진다.
*/
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./prod");
}
