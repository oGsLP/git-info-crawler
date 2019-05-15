module.exports = {
	printRepos: require("./printer/reposPrinter"),
	printRepo: require("./printer/repoPrinter"),
	printUser: require("./printer/userPrinter"),
	printEmoji: require("./printer/emojiPrinter"),
	print: function(data) {
		return this.printRepos(data.repos);
	}
};
