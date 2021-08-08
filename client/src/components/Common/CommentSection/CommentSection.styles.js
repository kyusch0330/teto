import { PALLETE } from "constants/pallete";
import { Form } from "formik";
import styled from "styled-components";

export const CommentSectionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  margin: 50px 0;
  .commentNum {
    color: ${PALLETE.GRAY};
  }
  span.loginRequireMessage {
    font-size: 0.9em;
    font-weight: 600;
    color: ${PALLETE.BLACK_LIGHT};
  }
`;

export const CommentForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 90%;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 3px;
  background: ${PALLETE.WHITE};
  padding: 20px;
  span.commentForm_userName {
    background: ${PALLETE.WHITE};
    font-weight: 700;
  }
  div.commentInputBox {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  input {
    width: 90%;
    padding: 5px;
  }
`;

export const CommentSubmitButton = styled.button`
  border: 1px solid ${PALLETE.BORDER_BLUE};

  background: ${PALLETE.PRIMARY_BLUE_DARK};
  color: ${PALLETE.WHITE};
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 3px;
  width: 90%;
  background: ${PALLETE.WHITE};
`;

export const CommentItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid ${PALLETE.GRAY_LIGHT};
  padding: 10px 20px;
  &:nth-child(1) {
    border: none;
  }
  span.comment_userName {
    font-weight: 700;
    color: ${PALLETE.BLACK_LIGHT};
  }
  span.comment_text {
    margin-top: 8px;
    font-size: 0.9em;
  }
  span.comment_createdAt {
    color: ${PALLETE.GRAY};
    margin-top: 16px;
  }
`;

export const CommentDeleteButton = styled.button`
  align-self: flex-end;
  border: 1px solid ${PALLETE.RED};
  background: ${PALLETE.RED};
  color: ${PALLETE.WHITE};
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const LoadMoreButton = styled.button`
  border: none;
  background: transparent;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;
