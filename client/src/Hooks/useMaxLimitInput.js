import { useState } from "react";

// value 변화시 길이를 체크하여 maxLimit보다 크면 업데이트 하지 않고 에러메시지를 반환

const useMaxLimitInput = (
  initialValue,
  setError,
  maxLimit = 20,
  errMessage = "Too long input!"
) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const nextValue = e.target.value;
    if (nextValue.length > maxLimit) {
      setError(errMessage);
    } else {
      setError("");
      setValue(nextValue);
    }
  };

  return [value, onChange];
};

export default useMaxLimitInput;
