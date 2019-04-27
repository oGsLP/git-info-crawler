const crawler = require("./../index");
//

// crawler.crawl("oGsLP");

// crawler.crawlRepos("oGsLP");

const crawlRepos = require("./../lib/crawler/reposCrawler");

console.log(crawlRepos("oGsLP"))
crawlRepos("oGsLP").then(data => {
	console.log(data);
});
