import commentAPI from "api/comments";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import getTime from "utils/getTime";
import * as Yup from "yup";
import {
  CommentDeleteButton,
  CommentForm,
  CommentItem,
  CommentList,
  CommentSectionContainer,
  CommentSubmitButton,
  LoadMoreButton,
} from "./CommentSection.styles";
import { ReactComponent as DownArrowImg } from "assets/arrow_down.svg";
import { PALLETE } from "constants/pallete";

const CommentSection = ({ userObj, testId }) => {
  // const [comments, setComments] = useState(null);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    handleLoadMore();
  }, []);
  const [loadCount, setLoadCount] = useState(1);

  const loadComments = (refresh = false) => {
    commentAPI
      .getLatestComments(testId, refresh ? 1 : loadCount, 10)
      .then((res) => {
        if (refresh) {
          setLoadCount(2);
          setComments(res.data.comments);
        } else {
          setComments(comments.concat(res.data.comments));
        }
      });
  };

  const handleLoadMore = () => {
    loadComments();
    setLoadCount((loadCount) => loadCount + 1);
  };

  const handleDeleteComment = (commentIdtoDelete) => {
    commentAPI.deleteComment(commentIdtoDelete).then((res) => {
      alert("삭제되었습니다.");
      loadComments(true);
    });
  };

  return (
    <CommentSectionContainer>
      <h2 className="commentNum">Comments ({comments.length})</h2>
      {userObj && userObj.isAuth ? (
        <Formik
          initialValues={{
            testId: testId,
            userId: userObj._id,
            userName: userObj.name,
            text: "",
          }}
          validationSchema={Yup.object({
            text: Yup.string()
              .min(1, "too short comment")
              .max(100, "too long comment")
              .required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values);
            values.createdAt = Date.now();
            commentAPI.uploadComment(values).then(() => {
              loadComments(true);
              values.text = "";
            });
          }}
          render={({ values, errors }) => (
            <CommentForm autoComplete="off">
              <span className="commentForm_userName">{userObj.name}</span>
              <div className="commentInputBox">
                <Field name={`text`} placeholder="comment" />
                <CommentSubmitButton type="submit">Submit</CommentSubmitButton>
              </div>
            </CommentForm>
          )}
        />
      ) : (
        <span className="loginRequireMessage">
          로그인 후 댓글을 남기실 수 있습니다.
        </span>
      )}
      {comments.length > 0 && (
        <>
          <CommentList>
            {comments.map((comment, index) => (
              <CommentItem key={comment._id}>
                {(userObj._id === comment.userId || userObj.isAdmin) && (
                  <CommentDeleteButton
                    type="button"
                    onClick={() => handleDeleteComment(comment._id)}
                  >
                    delete
                  </CommentDeleteButton>
                )}
                <span className="comment_userName">{comment.userName}</span>
                <span className="comment_text">{comment.text}</span>
                <span className="comment_createdAt">
                  {getTime(comment.createdAt, true)}
                </span>
              </CommentItem>
            ))}
          </CommentList>
          <LoadMoreButton type="button" onClick={handleLoadMore}>
            <DownArrowImg
              width={30}
              height={30}
              fill={PALLETE.PRIMARY_BLUE_DARK}
            />
          </LoadMoreButton>
        </>
      )}
    </CommentSectionContainer>
  );
};

export default CommentSection;
