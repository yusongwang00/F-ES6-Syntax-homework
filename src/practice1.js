export { parseData };
const parseData = function (input) {
  const res = [];
  let { data, column } = input;
  data.map((x) => {
    const temp = {};
    column.forEach((element, i) => {
      temp[element.name] = x[i];
    });
    res.push(temp);
  });
  return res;
};
