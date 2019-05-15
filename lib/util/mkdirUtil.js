const fs = require("fs");
const path = require("path");

const chalk = require("chalk");
const log = console.log;

const error = chalk.bold.red.underline;
const success = chalk.bold.green;
const info = chalk.dim.cyan;

module.exports = function(_path) {
	let dirs = (_path[0] === "/" ? _path.substr(1) : _path).split("/");
	md(dirs, 0, "", err => {
		if (err) {
			log(error("  " + err));
			return false;
		}
	});
};

function md(dirs, index, current, callback) {
	current = path.join(current, dirs[index]);
	index++;
	fs.access(current, err => {
		if (err) fs.mkdir(current, callback);
		else {
			log(info(`  dir: ${current} already exists`));
			if (index === dirs.length) return;
		}
		if (index < dirs.length) md(dirs, index, current, callback);
		else log(success(`  mkdir ${current} success`));
	});
}
