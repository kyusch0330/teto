import bingoAPI from "api/bingos";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useBingo = (testId) => {
  const [bingo, setBingo] = useState(null);

  const history = useHistory();
  // 해당 bingo 가져오기
  useEffect(() => {
    bingoAPI.getBingo(testId).then((res) => {
      if (!res.data.success) {
        alert(res.data.message);
        history.push("/bingo");
      }
      setBingo(res.data.bingo);
    });
  }, []);

  const [checks, setChecks] = useState(null);
  useEffect(() => {
    if (bingo) {
      setChecks(new Array(bingo.bingoSize * bingo.bingoSize).fill(false));
    }
  }, [bingo]);
  const handleChangeChecks = (index) => {
    setChecks(
      checks
        .slice(0, index)
        .concat(!checks[index])
        .concat(checks.slice(index + 1, checks.length))
    );
  };

  return { bingo, checks, handleChangeChecks };
};

export default useBingo;
