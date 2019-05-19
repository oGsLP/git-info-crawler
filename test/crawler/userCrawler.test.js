const assert = require("assert");
const crawlUser = require("./../../lib/crawler/userCrawler");

describe("#userCrawler", () => {
  it("has a test", () => {
    assert(crawlUser);
  });
  it("test NJUSSJ", () => {
    return crawlUser("NJUSSJ").then(data => {
      assert.deepStrictEqual(data, {
        nickName: "NJUSSJ",
        realName: "Fortune",
        stat_emoji: "🎯",
        stat_desc: "Focusing",
        description: "Keep hungry, keep foolish",
        organization: "Nanjing University",
        location: "Nanjing",
        email: "",
        link: "njussj.github.io"
      });
    });
  }, 10000);
});
