const getTime = (time, realTime = false) => {
  const d = new Date(Number(time));

  const currentTime = Date.now();
  const timeGap = currentTime - time;
  if (realTime) {
    if (timeGap < 60000) return Math.floor(timeGap / 1000) + "초 전";
    if (timeGap < 3600000) return Math.floor(timeGap / 60000) + "분 전";
    if (timeGap < 86400000) return Math.floor(timeGap / 3600000) + "시간 전";
  }

  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${putZero(
    d.getHours()
  )}:${putZero(d.getMinutes())}:${putZero(d.getSeconds())}`;
};

const putZero = (num) => {
  if (num < 10) return "0" + num;
  return num;
};

export default getTime;
