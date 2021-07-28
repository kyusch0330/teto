const express = require("express");
const router = express.Router();
const { Like } = require("../models/Like");

router.post("/register", (req, res) => {
  /* Like정보를 받아 DB에 저장한다.  */
  /*
     req.body 는
     { 
       testId:...,
       userId:...,
       commentId:...,
     }
      이런 식으로 되어있다. -> bodyParser가 해주는 역할
    */
  const like = new Like(req.body);

  /* save (Survey.js의 pre 부분과 연동됨)*/

  like.save((err, likeInfo) => {
    // mongoDB에서 온 메소드, 정보들이 Survey 모델에 저장됨
    if (err) return res.json({ likeSuccess: false, err }); //json 형식으로 에러정보 전달
    return res.status(200).json({
      likeSuccess: true,
    });
  });
});

// Get Likes Number
router.get("/count", (req, res) => {
  Like.count({ testId: req.query.testId }, (err, likeCount) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      likes: likeCount,
    });
  });
});

// Get Liked Before
router.get("/likedbefore", (req, res) => {
  Like.findOne(
    { testId: req.query.testId, userId: req.query.userId },
    (err, like) => {
      if (err) return res.json({ likedBefore: false, err });
      else if (like) {
        return res.status(200).json({
          likedBefore: true,
        });
      } else {
        return res.status(200).json({
          likedBefore: false,
        });
      }
    }
  );
});

// Delete Like
// delete에 필요한 정보 : testId, userId, (commentId-> 댓글 좋아요 기능 있을 시)
router.delete("/delete", (req, res) => {
  Survey.deleteOne(
    { testId: req.body.testId, userId: req.body.userId },
    (err) => {
      if (err) {
        return res.json({
          deleteSuccess: false,
          message: "좋아요 삭제에 실패했습니다.",
        });
      } else {
        res.status(200).json({ deleteLikeSuccess: true });
      }
    }
  );
});

module.exports = router;
