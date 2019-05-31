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
        repoName: "Software-Engineering-Team-Work2",
        desc: "",
        lang: "Java",
        updated: "Dec 21, 2017"
      });
    });
  }, 10000);
});
