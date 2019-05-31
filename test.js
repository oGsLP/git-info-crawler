// Const crawler = require("./../index");

// const crawlRepos = require("./lib/crawler/reposCrawler");
//
// crawlRepos("NJUSSJ").then(data => {
// 	console.log(data);
// });

// const crawler = require("./../lib/crawler");
// const printer = require("./../lib/printer");
// crawler.crawl("oGsLP").then(data => {
// 	printer.print(data);
// });

// const crawler = require("./../index");
// crawler.crawlRepos("oGsLP");

const userCrawler = require("./lib/crawler/userCrawler");
userCrawler("NJUSSJ").then(data => console.log(data));
//
// const emojiCrawler = require("./lib/crawler/emojiCrawler");
//
// const emojiPrinter = require("./lib/printer/emojiPrinter");
// emojiCrawler().then(res => emojiPrinter(res));
//
// const dbUtil = require("./lib/util/MongoDBUtil");
// dbUtil.init();

// const crawlFollow = require("./lib/crawler/followCrawler");
// const printFollow = require("./lib/printer/followPrinter");
// crawlFollow("oGsLP").then(res => printFollow(res));
