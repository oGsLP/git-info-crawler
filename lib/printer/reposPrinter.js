const log = console.log;
const chalk = require("chalk");

module.exports = function(repos) {
	repos.forEach((repo, index) => {
		log(chalk.red.bold.underline(index + 1));
		log(repo);
	});
};
