const { User } = require('../models/User');


let auth = (req, res, next) => {

  //인증 처리를 하는 곳 (request의 쿠키의 토큰을 이용해 유저를 찾는다.)
  
  //클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.x_auth;

  //토큰을 복호화한 후 유저를 찾는다.
  //User model에서 메소드를 가져와 사용
  User.findByToken(token, (err, user) => {
    if(err) throw err;
    if(!user) return res.json({ isAuth: false, err: true });
    //유저가 존재하면 리퀘스트에 토큰과 유저를 넣어준다.
    //그러면 middleware를 호출한 곳(index.js)에서 req.token, req.user를 사용가능하다.
    req.token = token;
    req.user = user;
    next(); // middleware의 다음으로 넘어갈 수 있게
  });

  //유저가 있으면 인증 O

  //유저가 있으면 인증 X
}

module.exports = { auth };