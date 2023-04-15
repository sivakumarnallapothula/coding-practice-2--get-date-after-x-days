const sk = require("date-fns/addDays");
const ok = (days) => {
  const l = sk(new Date(2020, 07, 22), days);
  return `${l.getDate()}-${l.getMonth() + 1}-${l.getFullYear()}`;
};
ok(3);
module.exports = ok;
