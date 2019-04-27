module.exports = {
	printRepos: require("./printer/reposPrinter"),
	print: function(data) {
		return this.printRepos(data.repos);
	}
};
