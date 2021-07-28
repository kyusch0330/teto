const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  testId: {
    type: String,
  },
  userId: {
    type: String,
  },
  // commentId: {
  //   type:String,
  // }
});

likeSchema.pre("save", function (next) {
  let like = this; //저장될 survey 정보를 가져온다.

  next();
});

//스키마를 모델로 감싸준다.
const Like = mongoose.model("Like", likeSchema);

//이 모델을 다른 곳에서 쓸 수 있도록
module.exports = { Like };
