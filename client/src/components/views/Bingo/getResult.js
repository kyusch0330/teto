export const getResult = (levels, checks, bingoSize) => {
  let checkBoard = Array.from(Array(bingoSize), (_, index) =>
    checks.slice(bingoSize * index, bingoSize * index + bingoSize)
  );
  // checkBoard = checkBoard.map((row, index) => {
  //   row.push(checks.slice(bingoSize * index, bingoSize * index + bingoSize));
  // });
  let bingos = 0;
  checkBoard.forEach((row) => {
    if (row.every((c) => c)) bingos++;
  });
  for (let c = 0; c < bingoSize; c++) {
    let flag = true;
    for (let r = 0; r < bingoSize; r++) {
      if (!checkBoard[r][c]) flag = false;
    }
    if (flag) bingos++;
  }
  let flag = true;
  for (let r = 0; r < bingoSize; r++) {
    if (!checkBoard[r][r]) flag = false;
  }
  if (flag) bingos++;
  flag = true;
  for (let r = 0; r < bingoSize; r++) {
    if (!checkBoard[r][bingoSize - 1 - r]) flag = false;
  }
  if (flag) bingos++;

  let result = null;
  levels.forEach((level) => {
    if (level.minLines <= bingos) result = level;
  });
  checkBoard.forEach((row) => console.log(row.join("")));
  console.log("BINGOS", bingos);
  return result;
};
