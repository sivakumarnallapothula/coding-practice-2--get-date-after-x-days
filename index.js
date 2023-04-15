const k = require("date-fns/addDays");

const s = (days) => {
  const l = k(new Date(2020, 7, 22), days);
  return `${l.getDate()}-${l.getMonth() + 1}-${l.getFullYear()}`;
};

module.exports = s;
