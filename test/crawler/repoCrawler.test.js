const assert = require("assert");
const crawlRepo = require("./../../lib/crawler/repoCrawler");

describe("#repoCrawler", () => {
  it("has a test", () => {
    assert(crawlRepo, true);
  });
  it("to do", () => {
    // To do
    crawlRepo("oGsLP", "git-info-crawler").then(data => {
      assert(data);
    });
  }, 10000);
});
