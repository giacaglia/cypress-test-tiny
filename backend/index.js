var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());

var allowedOrigins = ["http://localhost:3000"];
app.use(function (req, res, next) {
	var origin = req.headers.origin || "";
	if (allowedOrigins.includes(origin)) {
		res.setHeader("Access-Control-Allow-Origin", origin); // restrict it to the required domain
	}
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods"
	);
	next();
});
// Adding delay to simulate a slow response
app.use(function (req, res, next) {
	setTimeout(next, 1000);
});

app.get("/firstTest", function (req, res) {
	const { headers } = req;
	// console.log("headers");
	// console.log(headers["x-cypress-auth"]);
	// throw new Error("Uh oh!");
	// res.send("Hello World!");
	// res.sendStatus(500);
	if (headers["x-cypress-auth"]) {
		res.send("Hello World!");
	} else {
		console.log("Didn't find header!!!");
		res.sendStatus(500);
	}
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

app.listen(4000, function () {
	console.log("Listening on port 4000...");
});
