//// steps for new data/output:
// edit ./data.js
// require any new vars from ./data.js
// modify obj in for loop to include new event (eg. finalCost[person] = {"new event": 0})
// run `node price_per_person.js`
// change call of pricePerPerson to reflect changes (eg. console.log(pricePerPerson(numNights, costFood, "food")))

var { numNights, costCotty, costFood } = require("../data/data");

var pricePerPerson = function(data, price, event) {
	var finalCost = {};
	var dataArr = Object.values(data);
	var twoNights = 0;
	var oneNight = 0
	// head count for two nights
	for (var i = 0; i < dataArr.length; i++) {
		if (dataArr[i] === 2) {
			twoNights += 1
		} if (dataArr[i] === 1) {
			oneNight += 1
		}
	};
	// cost ( price / # people)
	var nightOne = (price / 2) / (oneNight + twoNights);
	var nightTwo = (price / 2) / twoNights;
	// append final cost per person
	for (person in data) {
		// add event manually to finalCost obj below
		finalCost[person] = {"numNights": data[person], "paymentStatus": false, "cottage": 0, "food": 0};
		if (data[person] === 1) {
			finalCost[person][event] = `$${Math.ceil(nightOne)}`;
		} else if (data[person] === 2) {
			finalCost[person][event] = `$${Math.ceil(nightTwo + nightOne)}`;
		}
	}

	//// check sum
	// var total = 0
	// for (event in finalCost) {
	// 	total += finalCost[event]
	// }
	// console.log(total)
	return finalCost;
}


module.exports = {
	pricePerPerson
}
// console.log(pricePerNight(numNights, cost));