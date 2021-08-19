const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bingoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  userName: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  bingoSize: {
    type: Number,
  },
  levels: {
    type: Array,
  },
  questions: {
    type: Array,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

//mongoose의 메소드, save전에 수행할 내용 정의
bingoSchema.pre("save", function (next) {
  let bingo = this; //저장될 bingo 정보를 가져온다.

  // save 이전 처리할 사항 작성
  // bingo.
  // if (bingo.isModified("title")) {
  // } else {
  //   next();
  // }
  next();
});

//스키마를 모델로 감싸준다.
const Bingo = mongoose.model("Bingo", bingoSchema);

//이 모델을 다른 곳에서 쓸 수 있도록
module.exports = { Bingo };
