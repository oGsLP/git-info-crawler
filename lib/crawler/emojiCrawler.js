const axios = require("axios");
const preUrl = "https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json";
module.exports = function() {
	return axios
		.get(preUrl)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
};
