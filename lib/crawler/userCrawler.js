const cheerio = require("cheerio");
const axios = require("axios");
const preUrl = "https://github.com/username";

module.exports = function(username) {
  let repoUrl = preUrl.replace("username", username);
  return axios
    .get(repoUrl)
    .then(response => {
      let html = response.data.toString();
      const $ = cheerio.load(html);
      // Profile
      let $profile = $(".h-card >div").filter(".clearfix");
      let $status = $($profile).find(".user-status-container");
      let [stat_emoji, stat_desc] = [
        $($status)
          .find("g-emoji")
          .text()
          .trim(),
        $($status)
          .find(".user-status-message-wrapper")
          .children()
          .first()
          .text()
          .trim()
      ];
      stat_emoji = stat_emoji.substr(0, stat_emoji.length / 2);
      let $names = $($profile)
        .find(".vcard-names-container")
        .filter(".vcard-names-container")
        .find("h1")
        .children();
      let [nickName, realName] = [
        $($names[1])
          .text()
          .trim(),
        $($names[0])
          .text()
          .trim()
      ];

      let $infos = $($profile).find(".js-profile-editable-area");
      let description = $($infos)
        .find(".user-profile-bio>div")
        .text()
        .trim();
      let $locs = $($infos).find("ul");
      let organization = $locs
        .find("li[itemprop='worksFor']>span")
        .text()
        .trim();
      let location = $locs
        .find("li[itemprop='homeLocation']>span")
        .text()
        .trim();
      let email = $locs
        .find("li[itemprop='email']>a")
        .text()
        .trim();
      let link = $locs
        .find("li[itemprop='url']>a")
        .text()
        .trim();

      return {
        nickName,
        realName,
        stat_emoji,
        stat_desc,
        description,
        organization,
        location,
        email,
        link
      };
    })
    .catch(error => {
      console.log(error);
    });
};
