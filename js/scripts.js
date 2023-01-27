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


// Check Whether a Checkbox is Checked
// Step 1) Add HTML:
// Example
// Checkbox: <input type="checkbox" id="myCheck" onclick="myFunction()">

// <p id="text" style="display:none">Checkbox is CHECKED!</p>
// Step 2) Add JavaScript:
// Example

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
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
