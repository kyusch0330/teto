const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");

/* Comment */

// Save Coment
router.post("/upload", (req, res) => {
  const comment = new Comment(req.body);

  comment.save((err, commentInfo) => {
    // 정보들이 Comment 모델에 저장됨
    if (err) return res.json({ uploadSuccess: false, err }); //json 형식으로 에러정보 전달
    return res.status(200).json({
      uploadSuccess: true,
    });
  });
});

// Get Comments(최신순)
router.get("/latest", (req, res) => {
  Comment.find({ testId: req.query.testId }, (err, docs) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      comments: docs,
    });
  })
    .sort({ createdAt: -1 })
    .limit(10)
    .skip((req.query.loadCount - 1) * 10);
});

// Delete Comment
router.delete("/delete", (req, res) => {
  Comment.deleteOne({ _id: req.body.commentId }, (err) => {
    if (err) {
      return res.json({
        deleteSuccess: false,
        message: "댓글 삭제에 실패했습니다.",
      });
    } else {
      res.status(200).json({ deleteSuccess: true });
    }
  });
});

module.exports = router;
