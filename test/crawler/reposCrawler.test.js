const assert = require("assert");
const crawlRepos = require("./../../lib/crawler/reposCrawler");

describe("#reposCrawler", () => {
  it("has a test", () => {
    assert(crawlRepos);
  });
  it("test oGsLP", () => {
    return crawlRepos("oGsLP").then(data => {
      assert.strictEqual(data.username, "oGsLP");
      assert.deepStrictEqual(data.repos.pop(), {
        repoName: "HotelSystem",
        desc: "软工第二次大作业:酒店管理系统",
        lang: "Java",
        updated: "Nov 20, 2016"
      });
    });
  }, 10000);
});
