const fs = require("fs");
const path = require("path");
const dir = "crawlerDB";
const filename = "emoji.json";
const filepath = path.join(dir, filename);
const chalk = require("chalk");
const mkdir = require("./../util/mkdirUtil");
const log = console.log;

const error = chalk.bold.red.underline;
const success = chalk.bold.green;
const info = chalk.dim.cyan;

module.exports = function(data) {
  let size = data.length;
  new Promise(resolve => {
    mkdir(dir);
    resolve();
  }).then(() =>
    fs.access(filepath, err => {
      if (!err) log(info(`  rewrite ${filepath}`));
      fs.writeFile(filepath, JSON.stringify(data, "", "\t"), err => {
        if (err) {
          log(error(`  write ${filename} error`));
          return false;
        }
        log(
          success(
            `  write ${filepath} success, totally ${size} emoji(s) added!`
          )
        );
      });
    })
  );
};
