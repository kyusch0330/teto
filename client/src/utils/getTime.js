const getTime = (time) => {
  const d = new Date(Number(time));
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${putZero(
    d.getHours()
  )}:${putZero(d.getMinutes())}:${putZero(d.getSeconds())}`;
};

const putZero = (num) => {
  if (num < 10) return "0" + num;
  return num;
};

export default getTime;
