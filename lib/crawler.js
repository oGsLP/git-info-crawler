module.exports = {
	crawlUser: require("./crawler/userCrawler"),
	crawlRepos: require("./crawler/reposCrawler"),
	crawlRepo: require("./crawler/repoCrawler"),
	crawl: function(username) {
		return this.crawlRepos(username);
	}
};
