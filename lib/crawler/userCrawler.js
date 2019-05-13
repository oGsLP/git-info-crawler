const cheerio = require("cheerio");
const axios = require("axios");
const preUrl = "https://github.com/username";

module.exports = function(username) {
	let repoUrl = preUrl.replace("username", username);
	return axios.get(repoUrl).then(response => {
		let html = response.data.toString();
		const $ = cheerio.load(html);
		// Profile
		let $profile = $(".h-card >div");
		let $status = $($profile).filter(".user-status-container");
		let [stat_emoji, stat_desc] = [
			$($status)
				.find("g-emoji")
				.text(),
			$($status)
				.find(".user-status-message-wrapper")
				.children()
				.first()
				.text()
		];
		let $names = $($profile)
			.filter(".vcard-names-container")
			.find("h1")
			.children();
		let [nickName, realName] = [$($names[1]).text(), $($names[0]).text()];

		let $infos = $($profile).filter(".js-profile-editable-area");
		let description = $($infos)
			.find(".user-profile-bio>div")
			.text();
		let $locs = $($infos).find("ul");
		let organization = $locs.find("li[itemprop='worksFor']>span").text();
		let location = $locs.find("li[itemprop='homeLocation']>span").text();
		let email = $locs.find("li[itemprop='email']>a").text();
		let link = $locs.find("li[itemprop='url']>a").text();

		let data = {
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
		return Promise.resolve(data);
	});
};
