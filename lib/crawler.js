module.exports = {
	crawlRepos: require("./crawler/reposCrawler"),
	crawl: function(username) {
		return this.crawlRepos(username);
	}
};
