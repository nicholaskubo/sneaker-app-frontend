const http = require("https");

const options = {
	"method": "GET",
	"hostname": "the-sneaker-database.p.rapidapi.com",
	"port": null,
	"path": "/sneakers?limit=100&gender=men&silhouette=Air%20Jordan%201&page=0",
	"headers": {
		"x-rapidapi-key": "44db354b8fmsh1d564352e0619f1p11eb18jsn0c606bae7e21",
		"x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toJSON());
	});
});

req.end();