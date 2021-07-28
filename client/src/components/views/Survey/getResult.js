export const getResult = (types, checks) => {
  const polls = {};
  types.forEach((type) => {
    polls[type.id] = 0;
  });
  checks.forEach((check) => {
    const [oid, forType, weight] = check.split("/");
    polls[forType] += Number(weight);
  });
  let max = -Infinity;
  let maxTypeId = "";
  for (let typeId in polls) {
    if (polls[typeId] > max) {
      max = polls[typeId];
      maxTypeId = typeId;
    }
  }
  return types.find((type) => type.id === maxTypeId);
};
