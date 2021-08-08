const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  testId: {
    type: String,
  },
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  text: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

//스키마를 모델로 감싸준다.
const Comment = mongoose.model("Comment", commentSchema);

//이 모델을 다른 곳에서 쓸 수 있도록
module.exports = { Comment };
