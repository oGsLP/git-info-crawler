module.exports = {
	saveRepos: require("./saver/reposSaver"),
	saveRepo: require("./saver/repoSaver"),
	saveUser: require("./saver/userSaver"),
	saveEmoji: require("./saver/emojiSaver"),
	save: function(username) {
		this.saveRepos(username);
	}
};
