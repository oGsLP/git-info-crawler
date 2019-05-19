const assert = require("assert");
const crawlFollow = require("./../../lib/crawler/followCrawler");

describe("#followCrawler", () => {
  it("has a test", () => {
    assert(crawlFollow);
  });
  it("follower should be 熊以恒, following should be Yu Pan", () => {
    return crawlFollow("oGsLP").then(data => {
      assert.strictEqual(data.followers.pop().realName, "熊以恒");
      assert.strictEqual(data.following.pop().realName, "Yu Pan");
    });
  }, 10000);
});
