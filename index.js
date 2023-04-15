const sk = require("date-fns/addDays");
const ok = (days) => {
  const l = sk(new Date(2020, 07, 22), days);
  return l;
};
let m = ok(3);
console.log(m);
module.exports = ok;
