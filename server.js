let express = require("express");
let bodyParser = require("body-parser");
let { numNights, paymentStatus, costCotty, costFood } = require("./data/data");
let { pricePerPerson }= require("./scripts/price_per_person");

let PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
	let price = pricePerPerson(numNights, costCotty, "cottage");
	let templateVars = { price };
	res.render("index", templateVars);
});

app.post("/", (req, res) => {
	let personInDB = Object.keys(req.body)
	let oldNights = numNights[personInDB[1]];
	let newNights = req.body.nights
	numNights[personInDB[1]] = Number(newNights)
	res.redirect("/");
});

app.listen(PORT, function() {
	console.log(`listening on port: ${PORT}!`);
});
