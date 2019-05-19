const assert = require("assert");
const crawlEmoji = require("./../../lib/crawler/emojiCrawler");

describe("#emojiCrawler", () => {
  it("has a test", () => {
    assert(crawlEmoji);
  });
  it("it should be 😀 ", () => {
    return crawlEmoji().then(data => {
      assert.deepStrictEqual(data[0], {
        emoji: "😀",
        description: "grinning face",
        category: "Smileys & Emotion",
        aliases: ["grinning"],
        tags: ["smile", "happy"],
        unicode_version: "6.1",
        ios_version: "6.0"
      });
    });
  }, 20000);
});
