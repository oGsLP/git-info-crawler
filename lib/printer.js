module.exports = {
	printRepos: require("./printer/reposPrinter"),
	printUser: require("./printer/userPrinter"),
	print: function(data) {
		return this.printRepos(data.repos);
	}
};
