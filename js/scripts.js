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

