const router = require("express").Router();
const axios = require("axios");

const md5 = require("blueimp-md5");
const { json } = require("express");
const publickey = "a9985b299f04decc1427fb3b8d140dd6";
const privatekey = "f74a2c2d21ce4f90978e52bcd6d3108250293f1a";
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash);

const client = require("../utils/redis");

router.get("/characters/:id", (req, res) => {
	const baseUrl = "https://gateway.marvel.com:443/v1/public/characters/";
	const url =
		baseUrl +
		req.params.id +
		"?ts=" +
		ts +
		"&apikey=" +
		publickey +
		"&hash=" +
		hash;
	console.log("Hitting Individual Characters");

	axios
		.get(url)
		.then(({ data }) => res.json(data.data))
		.catch(({ response }) => res.json(response.data));
});

router.get("/comics/:id", (req, res) => {
	const baseUrl = "https://gateway.marvel.com:443/v1/public/comics/";
	const url =
		baseUrl +
		req.params.id +
		"?ts=" +
		ts +
		"&apikey=" +
		publickey +
		"&hash=" +
		hash;

	console.log("Hitting Individual Comics");

	axios
		.get(url)
		.then(({ data }) => res.json(data.data))
		.catch(({ response }) => res.json(response.data));
});

router.get("/series/:id", (req, res) => {
	const baseUrl = "https://gateway.marvel.com:443/v1/public/series/";
	const url =
		baseUrl +
		req.params.id +
		"?ts=" +
		ts +
		"&apikey=" +
		publickey +
		"&hash=" +
		hash;

	console.log("Hitting Individual Series");

	axios
		.get(url)
		.then(({ data }) => res.json(data.data))
		.catch(({ response }) => res.json(response.data));
});

module.exports = router;
