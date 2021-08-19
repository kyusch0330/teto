const express = require("express");
const router = express.Router();
const { Bingo } = require("../models/Bingo");
const { Comment } = require("../models/Comment");
/* Bingo */
// Save Bingo
router.post("/upload", (req, res) => {
  /* Bingo 정보를 받아 DB에 저장한다.  */
  /*
     req.body 는
     { 
       types: {...},
       questions : {...},
     }
      이런 식으로 되어있다. -> bodyParser가 해주는 역할
    */
  const bingo = new Bingo(req.body);

  /* save (Bingo.js의 pre 부분과 연동됨)*/

  bingo.save((err, bingoInfo) => {
    // mongoDB에서 온 메소드, 정보들이 Bingo 모델에 저장됨
    if (err) return res.json({ uploadSuccess: false, err }); //json 형식으로 에러정보 전달
    return res.status(200).json({
      uploadSuccess: true,
    });
  });
});

// Update Likes
router.put("/update_like", (req, res) => {
  Bingo.findOneAndUpdate(
    { _id: req.body.testId },
    { $inc: { likes: 1 } }
  ).exec();
  // # 콜백이 있으면 두번 실행된다.
  //   (err, res) => {
  //     (err, user) => {
  //       if (err) return res.json({ uploadLikeSuccess: false, err });
  //       return res.status(200).send({
  //         uploadLikeSuccess: true,
  //       });
  //     };
  //   }
  // ).catch((err) => console.log(err));
});

// Get Bingos(최신순)
router.get("/latest", (req, res) => {
  Bingo.find((err, docs) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      bingos: docs,
    });
  })
    .sort({ createdAt: -1 })
    .limit(8)
    .skip((req.query.loadCount - 1) * 8);
});

// Get Bingos(인기순)
router.get("/popular", (req, res) => {
  Bingo.find((err, docs) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      bingos: docs,
    });
  })
    .sort({ likes: -1 })
    .limit(8)
    .skip((req.query.loadCount - 1) * 8);
});

// Get Specific Bingo
router.post("/specific", (req, res) => {
  Bingo.findOne({ _id: req.body.id }, (err, bingo) => {
    if (!bingo) {
      return res.json({
        success: false,
        message: "해당 문서가 존재하지 않습니다.",
      });
    } else {
      res.status(200).json({ success: true, bingo });
    }
  });
});

// Delete Bingo
router.delete("/delete", (req, res) => {
  Bingo.deleteOne({ _id: req.body.id }, (err) => {
    if (err) {
      return res.json({
        deleteSuccess: false,
        message: "문서 삭제에 실패했습니다.",
      });
    } else {
      // 해당 글의 댓글도 삭제
      Comment.deleteMany({ testId: req.body.id }, (err) => {
        if (err) {
          return res.json({
            deleteSuccess: false,
            message: "관련 댓글 삭제에 실패했습니다.",
          });
        } else {
          res.status(200).json({ deleteSuccess: true });
        }
      });
    }
  });
});

/* update bingo */
router.put("/update", (req, res) => {
  Bingo.findOneAndUpdate(
    { _id: req.body._id },
    {
      //수정할 bingo 항목들 (req.body에 수정데이터 존재)
      title: req.body.bingoToEdit.title,
      description: req.body.bingoToEdit.description,
      levels: req.body.bingoToEdit.levels,
      questions: req.body.bingoToEdit.questions,
    },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

module.exports = router;
