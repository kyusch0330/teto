/* production */
module.exports = {
  mongoURI: process.env.MONGO_URI, //HEROKU에서 가져오게 될 예정
  tokenKey: process.env.TOKEN_KEY
}