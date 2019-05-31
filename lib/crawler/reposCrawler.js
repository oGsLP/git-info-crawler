const cheerio = require("cheerio");
const axios = require("axios");
const preUrl = "https://github.com/username?tab=repositories";

module.exports = function(username) {
  let repoUrl = preUrl.replace("username", username);
  let repos = [];
  return axios
    .get(repoUrl)
    .then(response => {
      let html = response.data.toString(); // 获取网页内容
      const $ = cheerio.load(html); // 传入页面内容
      $("#user-repositories-list li >.col-lg-9").each(function() {
        let repo = {};
        repo.repoName = $(this)
          .find("h3 >a")
          .text()
          .trim();
        repo.desc = $(this)
          .find("p")
          .filter(".text-gray")
          .text()
          .trim();
        repo.lang = $(this)
          .find("span")
          .filter(".ml-0")
          .children()
          .last()
          .text()
          .trim();
        repo.updated = $(this)
          .find("relative-time")
          .text()
          .trim();
        repos.push(repo);
      });
      return {
        username: username,
        repos: repos
      };
    })
    .catch(error => {
      console.log(error);
    });
};
