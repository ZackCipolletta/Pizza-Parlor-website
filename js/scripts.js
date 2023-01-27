// Business logic

let myPizza = new Pizza();

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [toppings];
  this.total = 0;
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addToppings = function (toppingsString) {
  this.toppings = toppingsString.split(' ');
}

Pizza.prototype.addPrice = function(price) {
  this.total += price;
}






// UI logic


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