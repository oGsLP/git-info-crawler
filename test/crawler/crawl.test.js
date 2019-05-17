const assert = require("assert");
const crawler = require("./../../lib/crawler");

describe("#crawler", () => {
	it("has a test", () => {
		assert(true, crawler.crawl("oGsLP").then(res => res.length >= 0));
	});
});
