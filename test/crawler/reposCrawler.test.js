const assert = require("assert");
const crawlRepos = require("./../../lib/crawler/reposCrawler");

describe("#reposCrawler", () => {
	it("has a test", () => {
		assert(true, true);
	});
	it("test oGsLP", () => {
		crawlRepos("oGsLP").then(data => {
			assert.strictEqual(data.username, "oGsLP");
			assert.deepStrictEqual(data.repos.pop(), {
				repoName: "HotelSystem",
				desc: "软工第二次大作业:酒店管理系统",
				lang: "Java",
				updated: "Nov 20, 2016"
			});
		});
	});
});
