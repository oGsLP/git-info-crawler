"use strict";
const crawler = require("./lib/crawler");
const printer = require("./lib/printer");
module.exports = {
	crawl: function(username) {
		crawler.crawl(username).then(data => {
			printer.print(data);
		});
	},
	crawlRepos: function(username) {
		crawler.crawlRepos(username).then(data => {
			printer.printRepos(data.repos);
		});
	},
	crawlUser: function(username) {
		crawler.crawlUser(username).then(data => {
			printer.printUser(data);
		});
	}
};
