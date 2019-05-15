"use strict";
const crawler = require("./lib/crawler");
const printer = require("./lib/printer");
const saver = require("./lib/saver");
module.exports = {
	crawl: function(username) {
		crawler.crawl(username).then(data => {
			printer.print(data);
			saver.save(data);
		});
	},
	crawlRepos: function(username) {
		crawler.crawlRepos(username).then(data => {
			printer.printRepos(data.repos);
			saver.saveRepos(data.repos);
		});
	},
	crawlUser: function(username) {
		crawler.crawlUser(username).then(data => {
			printer.printUser(data);
			saver.saveUser(data);
		});
	},
	crawlEmoji: function() {
		crawler.crawlEmoji().then(data => {
			printer.printEmoji(data);
			saver.saveEmoji(data);
		});
	}
};
