const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:2701";
const log = console.log;

module.exports = {
  init: () =>
    MongoClient.connect(URL, { useNewUrlParser: true }, (err, mongo) => {
      if (err) throw err;
      log("数据库已创建!");
      let db = mongo.db("git_info_crawler");
      db.createCollection("site", function(err, res) {
        if (err) throw err;
        console.log("创建集合!");
        log(res);
      });
      mongo.close();
    })
};
