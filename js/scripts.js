// Business logic

let myPizza = new Pizza();

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [toppings];
  this.total = 0;
}

Pizza.prototype.addSize = function (size) {
  this.size = size;
}

Pizza.prototype.addToppings = function (toppingsString) {
  this.toppings = toppingsString.split(' ');
}

Pizza.prototype.addPrice = function (price) {
  this.total += price;
}

Pizza.prototype.addMoreToppings = function (moretoppings) {
  let moreToppingsArr = moretoppings.split(' ')
  this.toppings = this.toppings.concat(moreToppingsArr);
}


// UI logic
function chooseToppingsForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=toppingSelection]:checked");
  const userSelectionsArray = Array.from(userSelections);
  let totalCost = 0;
  userSelectionsArray.forEach(function(element) {
    let cost = parseFloat(element.id);
    totalCost += cost;
    console.log(element.value + ' The price is: $' + element.id);

    userSelections.forEach(function(element){element.checked = false; // Unchecks any checked radio buttons for toppings upon submit
    });
  });
  console.log('The total cost of toppings is: ' + totalCost);
  // we'll add more code to display results here!
}

window.addEventListener("load", function() {
  document.getElementById("wholePieform").addEventListener("submit", chooseToppingsForm);
});

function uncheck() {
  ('input[type="checkbox"]'.forEach(function() {
    this.checked = false;
  }))
  // document.getElementById("extraCheese").checked = false;
}

function smallPizza() {
myPizza.addSize('small');
myPizza.addPrice(12);
}

function mediumPizza() {
myPizza.addSize('medium');
myPizza.addPrice(14);
}

function largePizza() {
myPizza.addSize('large');
myPizza.addPrice(16);
}

function extraCheese() {
myPizza.addToppings('Extra cheese')
myPizza.addPrice(.50);
}

function pepperoni() {
myPizza.addToppings('pepperoni')
myPizza.addPrice(1);
}

function artichoke() {
myPizza.addToppings('artichoke')
myPizza.addPrice(.50);
}

function anchovy() {
myPizza.addToppings('anchovy')
myPizza.addPrice(1);
}

function mushroom() {
myPizza.addToppings('mushroom')
myPizza.addPrice(.50);
}

function sausage() {
myPizza.addToppings('sausage')
myPizza.addPrice(1);
}

function peppers() {
myPizza.addToppings('peppers')
myPizza.addPrice(.50);
}

function bacon() {
myPizza.addToppings('bacon')
myPizza.addPrice(1);
}


