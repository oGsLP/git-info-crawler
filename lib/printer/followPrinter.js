const chalk = require("chalk");
const log = console.log;
const indent1 = "  ";
const indent2 = "    ";
const h = chalk.bold.green;
const danger = chalk.bold.red;
const info = chalk.bold.dim.cyan;

module.exports = function(data) {
  printUser(data.followers, "Followers");
  printUser(data.following, "Following");
};

function printUser(users, type) {
  let l = users.length;
  log(indent1 + h(`${type}: 🌟(${l})`));
  users.forEach((user, index) => {
    log(
      indent2 +
        chalk.bold.underline(user.nickName) +
        ` (${info(user.realName)})`
    );
    log(`${indent2}: ${user.description}`);
    log(`${indent2}org: ${user.organization}, from: ${user.location}`);
    if (index !== l - 1) log(danger("   -"));
  });
}
