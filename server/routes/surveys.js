const express = require("express");
const router = express.Router();
const { Survey } = require("../models/Survey");

/* Survey */
// Save Survey
router.post("/upload", (req, res) => {
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

// Get Surveys
router.get("/", (req, res) => {
  Survey.find((err, docs) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      surveys: docs,
    });
  })
    .sort({ createdAt: -1 })
    .limit(5)
    .skip((req.query.loadCount - 1) * 5);
});

// Get Specific Survey
router.post("/specific", (req, res) => {
  Survey.findOne({ _id: req.body.id }, (err, survey) => {
    if (!survey) {
      return res.json({
        success: false,
        message: "해당 문서가 존재하지 않습니다.",
      });
    } else {
      res.status(200).json({ success: true, survey });
    }
  });
});

// Delete Survey
router.delete("/delete", (req, res) => {
  Survey.deleteOne({ _id: req.body.id }, (err) => {
    if (err) {
      return res.json({
        deleteSuccess: false,
        message: "문서 삭제에 실패했습니다.",
      });
    } else {
      res.status(200).json({ deleteSuccess: true });
    }
  });
});

module.exports = router;
