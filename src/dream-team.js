const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let dataFilter = function (elem) {
      if (typeof(elem) === 'string') {
        return elem.trim()[0].toUpperCase();
      };
    };
    let secretName = [];
    members.forEach(item => secretName.push(dataFilter(item)));
    return secretName.sort().join('');
  } else return false;
};