const cheerio = require("cheerio");
const axios = require("axios");
const preUrl = "https://github.com/username?tab=tabName";

module.exports = function(username) {
	let followersUrl = preUrl
		.replace("username", username)
		.replace("tabName", "followers");
	let followingUrl = preUrl
		.replace("username", username)
		.replace("tabName", "following");

	let followers = [];
	let following = [];
	return new Promise(resolve => {
		axios
			.get(followersUrl)
			.then(response => {
				crawlFollow(followers, response.data);
				resolve();
			})
			.catch(error => {
				console.log(error);
			});
	})
		.then(() => {
			return axios
				.get(followingUrl)
				.then(response => {
					crawlFollow(following, response.data);
					return {
						followers,
						following
					};
				})
				.catch(error => {
					console.log(error);
				});
		})
		.catch(error => {
			console.log(error);
		});
};

function crawlFollow(array, data) {
	let $ = cheerio.load(data.toString());
	$(".col-9 >div")
		.filter(".position-relative")
		.children()
		.each((i, el) => {
			let $infos = $(el).find(".col-9");
			array.push({
				realName: $($infos)
					.find("a>.link-gray-dark")
					.text()
					.trim(),
				nickName: $($infos)
					.find("a>.link-gray")
					.text()
					.trim(),
				description: $($infos)
					.find(".mb-2>div")
					.text()
					.trim(),
				organization: $($infos)
					.find("p>span")
					.filter(".mr-3")
					.text()
					.trim(),
				location: $($infos)
					.find("p")
					.text()
					.trim()
					.replace(/^.*\n/, "")
					.trim()
			});
		});
}
