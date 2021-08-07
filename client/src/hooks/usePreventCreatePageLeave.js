import { useState, useEffect } from "react";

// dependencies 요소 중 하나라도 작성이 된 상태면 페이지를 벗어날 때 질문

const usePreventCreatePageLeave = (valueDependencies) => {
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

  useEffect(() => {
    const willBlock = valueDependencies.some((value) => {
      return value !== "";
    });
    console.log(willBlock);
    if (willBlock) {
      enablePrevent();
    } else {
      disablePrevent();
    }
    return function cleanUp() {
      disablePrevent();
    };
  }, valueDependencies);

  return { blocked, enablePrevent, disablePrevent };
};

export default usePreventCreatePageLeave;
