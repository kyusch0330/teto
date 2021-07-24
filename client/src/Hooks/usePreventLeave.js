import { useState } from "react";

const usePreventLeave = () => {
  const [blocked, setBlocked] = useState(false);
  const listener = (event) => {
    //window가 닫히기 전에 실행될 것 작성
    event.preventDefault();
    event.returnValue = ""; // 크롬에서 동작하기 위한 코드
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    setBlocked(true);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
    setBlocked(false);
  };
  return { blocked, enablePrevent, disablePrevent };
};

export default usePreventLeave;
