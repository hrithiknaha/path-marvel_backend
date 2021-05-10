const client = require("../utils/redis");

module.exports = cacheCharacters = (req, res, next) => {
	client.get("characters", (err, data) => {
		if (err) throw err;

		if (data !== null) {
			return res.json(JSON.parse(data));
		} else {
			next();
		}
	});
};

module.exports = cacheComics = (req, res, next) => {
	client.get("comics", (err, data) => {
		if (err) throw err;

		if (data !== null) {
			return res.json(JSON.parse(data));
		} else {
			next();
		}
	});
};

module.exports = cacheSeries = (req, res, next) => {
	client.get("series", (err, data) => {
		if (err) throw err;

		if (data !== null) {
			return res.json(JSON.parse(data));
		} else {
			next();
		}
	});
};
