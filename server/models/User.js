const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); //비밀번호 암호화를 위한 패키지
const saltRounds = 10; // 비밀번호 암호화용 salt값의 자릿수
const jwt = require("jsonwebtoken");
const tokenKey = require("../config/key").tokenKey; //access 토큰을 만들기 위한 토큰 키

const userSchema = mongoose.Schema({
  socialId: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //space를 없애주는 역할을 한다.
    unique: 1, //똑같은 이메일 불가능
  },
  password: {
    type: String,
    minlength: 6, //암호화 전 길이에 해당한다.
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    //어떤 사용자인지(관리자,일반유저)
    type: Number,
    default: 0, //기본 값
  },
  image: String,
  token: {
    //유효성 관리(로그인 상태 유지)
    type: String,
  },
  tokenExp: {
    //토큰 유효기간
    type: Number,
  },
});

//mongoose의 메소드, index.js에서 save전에 수행할 내용 정의
userSchema.pre("save", function (next) {
  let user = this; //저장될 user 정보를 가져온다.
  //비밀번호 암호화

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err); //err와 함께 save 부분으로 돌아간다.

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash; // 해시값으로 비밀번호 교체
        next(); // 다시 save 부분으로 돌아가게 한다.
      });
    });
  } else {
    //비밀번호가 아닌 다른 것을 수정했다면 바로 save
    next();
  }
});

/* if(user.isModified('password')) 의 의미
  없을 시 문제점 : 최초 save 뿐만 아니라, 이메일 등 다른 정보를 수정할 때에도
  수행되어 매번 비밀번호가 암호화 된다.
  비밀번호는 비밀번호 변경시에만 암호화 되도록 한다.
*/

//평문암호와 콜백함수를 인자로 받아 해시화된 비밀번호를 비교하는 메소드
userSchema.methods.comparePassword = function (plainPassword, cb) {
  //bcrypt.compare의 인자로 입력된 평문 비밀번호를 해시화 시켜
  //db의 동일 이메일에 해당하는 유저(index.js에서 찾음)의 비밀번호 해시값과 비교한다.
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    // isMatch는 일치하면 true, 불일치하면 false
    // err는 타입 오류등 에러를 나타낸다.
    if (err) return cb(err);
    cb(null, isMatch); // true 혹은 false를 콜백함수에 넣어서 실행
  });
};

//토큰 생성
userSchema.methods.generateToken = function (cb) {
  const user = this;
  //jsonwebtoken으로 콜백 생성
  const token = jwt.sign(user._id.toHexString(), tokenKey); // _id: database에 존재하는 id , tokenKey: 임의로 지정하면 된다.

  /*
    user._id + 'tokenKey' => access token 을 만드는 것
    나중에 토큰 해석 시, tokenKey 넣으면
    user._id가 나와서 누군지 알 수 있게 되는 것.
    => tokenKey 을 기억 해둬야 함
  */

  user.token = token;
  //토큰을 DB에 저장(로그인 시 생성, 로그아웃 시 제거)
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;

  //jsonwebtoken으로 토큰을 decode 한다.
  jwt.verify(token, tokenKey, function (err, decoded) {
    //유저 아이디를 이용해서 유저를 찾고,
    //클라이언트에서 가져온 token과 DB에 보관된 token이 일치하는지 확인

    //mongoDB 메소드 findOne 이용
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

//스키마를 모델로 감싸준다.
const User = mongoose.model("User", userSchema);

//이 모델을 다른 곳에서 쓸 수 있도록
module.exports = { User };
