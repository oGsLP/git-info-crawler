const cheerio = require("cheerio");
const axios = require("axios");
const preUrl = "https://github.com/username/repository";

module.exports = function(username, repo) {
  let repoUrl = preUrl
    .replace("username", username)
    .replace("repository", repo);
  return axios.get(repoUrl).then(response => {
    let html = response.data.toString();
    return cheerio.load(html);
  });
};
