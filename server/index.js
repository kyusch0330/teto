const express = require("express");
const app = express();
const port = 5000;
//const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const { auth } = require("./middleware/auth");
const { User } = require("./models/User");
const { Survey } = require("./models/Survey");

//Content-type이 application/x-www-form-urlencoded인 데이터를 분석해서 가져올 수 있도록 해줌
//app.use(bodyParser.urlencoded({extended: true})); //bodyParser는 deprecated 되어있어 수정
app.use(express.urlencoded());

//Content-type이 application/json인 데이터를 분석해서 가져올 수 있게 해줌
//app.use(bodyParser.json());
app.use(express.json());
//토큰을 쿠키에 저장하기 위한 cookie-parser 사용
app.use(cookieParser());

const mongoose = require("mongoose");

//mongoDB 연결
mongoose
  .connect(
    config.mongoURI, //key값
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

//기본 출력
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

/* register router */
app.post("/api/users/register", (req, res) => {
  //'/register' -> end point
  /* 회원 가입 시 필요한 필요 정보들을 client에서 가져오면
     그것들을 DB에 넣어준다.  */

  /*
     req.body 는
     { 
       id: "hello",
       email: "james@google.com",
       ...
      }
      이런 식으로 되어있다. -> bodyParser가 해주는 역할
      */
  const user = new User(req.body);

  /* password 암호화 (User.js의 pre 부분과 연동됨)*/

  user.save((err, userInfo) => {
    // mongoDB에서 온 메소드, 정보들이 유저 모델에 저장됨
    if (err) return res.json({ success: false, err }); //json 형식으로 에러정보 전달
    return res.status(200).json({
      success: true,
    });
  }); //status(200)는 성공했다는 의미
});

/* login router */
app.post("/api/users/login", (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.

  //MongoDB 메소드 findOne
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }

    //요청된 이메일이 DB에 있다면, 비밀번호가 맞는지 확인

    //User.js의 메소드
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        // 비밀번호 불일치 시
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      //비밀번호까지 맞다면 토큰을 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err); //400: error

        //토큰을 저장한다. (쿠키, 로컬스토리지 등의 장소에 - 어디가 나은지는 논란이 있음)
        //지금은 쿠키에 저장한다. (cookie-parser를 이용)
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

/* authentication */
//auth는 middleware, endpoint의 request를 받고 call back을 실행하기 전에 중간에서 수행하는 동작
app.get("/api/users/auth", auth, (req, res) => {
  //***여기까지 왔으면 미들웨어를 통과해 왔다는 이야기, Authentication이 true라는 의미
  res.status(200).json({
    //middleware auth.js에서 req에 user와 token을 전달해주어서 사용가능
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true, //role에 따른 정책은 임의로 정하면 된다.
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    image: req.user.image,
  });
  // 이렇게 정보를 주면 어떤 페이지서든 유저 정보를 활용 가능해져서 유용하다.
});

/* logout router */
//로그인 처럼 middleware로 auth를 수행한다.
app.get("/api/users/logout", auth, (req, res) => {
  //쿠키의 토큰을 가지고 auth를 통해 id를 일치하는지 확인하고 가져온 상태
  //mongoose 메소드 findOneAndUpdate로 토큰 지우기 (""로 업데이트)
  User.findOneAndUpdate(
    { _id: req.user._id }, //id에 해당하는 유저를 찾아서
    { token: "" }, //token을 없애준다.
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

/* update profile router */
app.put("/api/users/update_profile", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      //수정할 profile 항목들 (req.body에 수정데이터 존재)
      name: req.body.name,
    },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

/* Survey */
app.post("/api/surveys/upload", (req, res) => {
  /* Survey 정보를 받아 DB에 저장한다.  */
  /*
     req.body 는
     { 
       types: {...},
       questions : {...},
     }
      이런 식으로 되어있다. -> bodyParser가 해주는 역할
    */
  const survey = new Survey(req.body);

  /* save (Survey.js의 pre 부분과 연동됨)*/

  survey.save((err, surveyInfo) => {
    // mongoDB에서 온 메소드, 정보들이 Survey 모델에 저장됨
    if (err) return res.json({ uploadSuccess: false, err }); //json 형식으로 에러정보 전달
    return res.status(200).json({
      uploadSuccess: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
