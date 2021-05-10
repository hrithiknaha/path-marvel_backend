const router = require("express").Router();
const axios = require("axios");

const md5 = require("blueimp-md5");
const publickey = "a9985b299f04decc1427fb3b8d140dd6";
const privatekey = "f74a2c2d21ce4f90978e52bcd6d3108250293f1a";
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash);

router.get("/", (req, res) => {
	res.send("Marvel Base Route");
});

router.get("/characters/page/:page", (req, res) => {
	const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
	const url = baseUrl + "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;
	console.log("Hitting Characters");
	axios
		.get(url + "&offset=" + 20 * req.params.page + "&limit=20")
		.then(({ data }) => res.json(data.data));
});

router.get("/comics/page/:page", (req, res) => {
	const baseUrl = "https://gateway.marvel.com:443/v1/public/comics";
	const url = baseUrl + "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;
	console.log("Hitting Comics");
	axios
		.get(url + "&offset=" + 20 * req.params.page + "&limit=20")
		.then(({ data }) => res.json(data.data));
});

router.get("/series/page/:page", (req, res) => {
	const baseUrl = "https://gateway.marvel.com:443/v1/public/series";
	const url = baseUrl + "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;
	console.log("Hitting Series");
	axios
		.get(url + "&offset=" + 20 * req.params.page + "&limit=20")
		.then(({ data }) => res.json(data.data));
});

module.exports = router;
