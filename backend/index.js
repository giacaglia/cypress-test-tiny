var express = require("express");
var app = express();

// Adding delay to simulate a slow response
app.use(function (req, res, next) {
	setTimeout(next, 1000);
});

app.get("/", function (req, res) {
	const { headers } = req;
	// console.log(headers);
	if (headers["x-cypress-auth"]) {
		res.send("Hello World!");
	} else {
		console.log("Didn't find header!!!");
		res.sendStatus(500);
	}
});

app.get("/test", function (req, res) {
	const { headers } = req;
	// console.log(headers);
	if (headers["x-cypress-auth"]) {
		res.send("Hello World!");
	} else {
		console.log("Didn't find header!!!");
		res.sendStatus(500);
	}
});

app.get("/test2", function (req, res) {
	const { headers } = req;
	// console.log(headers);
	if (headers["x-cypress-auth"] !== "rheurheurheurheuhreuh") {
		console.log("Didnt work");
	}
	if (headers["x-cypress-auth"]) {
		res.send("Hello World!");
	} else {
		console.log("Didn't find header!!!");
		res.sendStatus(500);
	}
});

app.get("/test3", function (req, res) {
	const { headers } = req;
	// console.log(headers);
	if (headers["x-cypress-auth"]) {
		res.send("Hello World!");
	} else {
		console.log("Didn't find header!!!");
		res.sendStatus(500);
	}
});

app.get("/test4", function (req, res) {
	const { headers } = req;
	// console.log(headers);
	if (headers["x-cypress-auth"]) {
		res.send("Hello World!");
	} else {
		console.log("Didn't find header!!!");
		res.sendStatus(500);
	}
});

app.listen(3000, function () {
	console.log("Listening on port 3000...");
});
