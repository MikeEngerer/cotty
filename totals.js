var finalCost = {}
var sumCottage = 0
var sumFood = 0
var setup = function(data, event) {
  for (person in data) {
    finalCost[person] = person
    finalCost[person] = {cottage: 0, food: 0}
  }
  return finalCost;
}
var pricePerPerson = function(data, price, event) {
	var twoNights = 0;
	var oneNight = 0
	var dataArr = Object.values(data);
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
		// add event manually to finalCost[person] obj below
		if (data[person] === 1) {
			finalCost[person][event] = Math.ceil(nightOne)
		} else if (data[person] === 2) {
			finalCost[person][event] = Math.ceil(nightTwo + nightOne)
		}
	}
	return finalCost;
}

var totals = function(data) {
  for (person in data) {
    sumFood += data[person].food
    sumCottage += data[person].cottage
  }
  return
}

var total = function(data) {
  totalPeople = 0
  for (person in data) {
    totalPeople += 1
  }
  return totalPeople
}

var numNights = {
	maggie: 1,
	kirby: 1,
	laura: 1,
	sam: 1,
	adam: 2, 
	mike: 2,
	phil: 2,
	g: 2,
	rob: 2,
	gabby: 2,
	mur: 2,
	van: 2,
	matt: 2,
	megKin: 2,
	emily: 2,
	nat: 2,
	conor: 2,
	kate: 2,
	bob: 2,
	lindsay: 2,
	michaela: 2,
	christian: 2
};

setup(numNights, 'food')
setup(numNights, 'cottage')
pricePerPerson(numNights, 590 ,"food")
pricePerPerson(numNights, 2485 ,"cottage")
console.log(finalCost)
totals(finalCost)
console.log(" Cottage total:", sumCottage, '\n', "Food total:", sumFood)
console.log(total(finalCost))
