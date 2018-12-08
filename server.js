let express = require("express");
let bodyParser = require("body-parser");
let { numNights, costCotty, costFood } = require("./data/data")
let pricePerPerson = require("./scripts/price_per_person").pricePerPerson;

let PORT = 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
	let price = pricePerPerson(numNights, costCotty, "cottage");
	let templateVars = { price };
	res.render("index", templateVars);
});

app.post("/", (req, res) => {
	res.redirect("/")
});

app.listen(PORT, function() {
	console.log(`listening on port: ${PORT}!`);
});
