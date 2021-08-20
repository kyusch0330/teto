import { Form } from "formik";
import styled from "styled-components";
import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";

export const CreateBingoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-size: 1rem;
  background: ${PALLETE.BACKGROUND_BLUE};
  color: ${PALLETE.BLACK};
  padding: 50px 0;
  font-size: 1rem;
`;

export const BingoSizeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BingoSizeButton = styled.button`
  border: 2px solid ${PALLETE.PRIMARY_BLUE_DARK};
  background: ${PALLETE.WHITE};
  color: ${PALLETE.PRIMARY_BLUE_DARK};
  border-radius: 5px;
  width: 150px;
  height: 150px;
  margin: 20px;
  transition: all 200ms;
  font-size: 2em;
  &:hover {
    cursor: pointer;
    background: ${PALLETE.GRAY_LIGHT};
    position: relative;
    top: -8px;
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    width: 100px;
    height: 100px;
    margin: 20px;
  }
`;

export const CreateBingoPaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 800px;
  background: ${PALLETE.WHITE};
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 10px;
  margin-top: 20px;
`;

export const BingoForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const BingoCover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid ${PALLETE.BORDER_BLUE};
  border-radius: 10px 10px 0 0;
  background: ${PALLETE.CONTAINER_BLUE};
  input {
    width: 90%;
    max-width: 500px;
    font-weight: 600;
    font-size: 1.2em;
    border: 2px solid ${PALLETE.PRIMARY_BLUE_DARK};
    border-radius: 5px;
    padding: 10px;
  }
  textarea {
    width: 90%;
    max-width: 500px;
    height: 200px;
    padding: 15px 10px;
    border: 1px solid ${PALLETE.PRIMARY_BLUE_DARK};
    border-radius: 5px;
  }
`;

export const ErorrSpan = styled.span`
  color: ${PALLETE.RED};
`;
