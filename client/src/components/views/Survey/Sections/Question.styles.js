import styled from "styled-components";
import { PALLETE } from "../../../../constants/pallete";

export const QuestionMain = styled.div`
  display: flex;
  flex-direction: column;
  color: ${PALLETE.BLACK};
  h5 {
    padding: 20px 10px;
    border-radius: 10px;
    background: ${PALLETE.CONTAINER_BLUE};
    margin: 0;
    color: ${PALLETE.PRIMARY_BLUE_DARK};
  }
  h6 {
    margin: 0;
    margin-top: -10px;
    padding: 10px;
    color: ${PALLETE.BLACK_LIGHT};
    background: ${PALLETE.CONTAINER_BLUE};
    border-bottom: 1px solid ${PALLETE.BORDER_BLUE};
  }
`;

export const StyledRadioContainer = styled.div`
  input[type="radio"] {
    appearance: none;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 100%;
    margin-right: 0.1rem;
    border: 2px solid ${PALLETE.PRIMARY_BLUE};
    transition: 0.2s all linear;
    &:hover {
      cursor: pointer;
      border: 4px solid ${PALLETE.PRIMARY_BLUE};
    }
  }
  input[type="radio"]:checked {
    border: 4px solid ${PALLETE.PRIMARY_BLUE_DARK};
    background: ${PALLETE.GREEN};
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 10px;
  font-size: 0.9em;
`;
