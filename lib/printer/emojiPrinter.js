const fs = require("fs");
const path = require("path");
const dir = "crawlerDB";
const filename = "emoji.json";
const chalk = require("chalk");
const log = console.log;

const error = chalk.bold.red.underline;
const success = chalk.bold.green;
const info = chalk.dim.cyan;

module.exports = function(data) {
	let size = data.length;
	fs.access(path.join(dir), err => {
		if (err)
			fs.mkdir(path.join(dir), err => {
				if (err) {
					log(error(`  mkdir ${dir} error`));
					return false;
				}
				log(success(`  mkdir ${dir} success`));
			});
		else log(info(`  ${dir} already exists`));
		fs.writeFile(
			path.join(dir, filename),
			JSON.stringify(data, "", "\t"),
			err => {
				if (err) {
					log(error(`  write ${filename} error`));
					return false;
				}
				log(
					success(
						`  write ${filename} success, totally ${size} emoji(s) added!`
					)
				);
			}
		);
	});
};
