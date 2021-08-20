import React, { useEffect, useRef } from "react";
import { PALLETE } from "constants/pallete";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 30, 30, 0.5);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
`;

export const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background: ${PALLETE.WHITE};
  margin: auto;
  width: 90%;
  max-width: 400px;
  height: 200px;
  z-index: 1001;
  border-radius: 10px;
  padding: 20px;
`;

const Modal = ({ children, close }) => {
  return (
    <>
      <ModalOverlay />
      <ModalWrapper
        className="modalWrapper"
        onClick={(e) => e.target.classList.contains("modalWrapper") && close()}
      >
        <ModalInner>{children}</ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
