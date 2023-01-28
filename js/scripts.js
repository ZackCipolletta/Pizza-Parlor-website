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

function activateForms(e) {

}


function chooseSizeForm(e) {
  e.preventDefault();
  const customerPizzaSizeSelection = document.querySelector("input[name='choosePizzaSize']:checked");
  const customerPizzaSizeSelectionCost = customerPizzaSizeSelection.id; // the cost of the size is held in the id of the input (maybe I'm cheating a bit.)
  pizzaSizeSelection(customerPizzaSizeSelectionCost); // call pizzaSizeSelection function and pass in the value of the cost of the selected size.
}

// function beginOrder(){

//   let pizzaSize = ;
//   chooseSizeForm();
//   chooseToppingsForm();
// };


function pizzaSizeSelection(costOfSize){ // Take the value of the selected size (from chooseSizeForm function)and print to console
  console.log(parseInt(costOfSize));
};

function totalCostOftoppings(toppingsCost){ // Take the value of the selected toppings (from chooseToppingsForm function) and print to console
  console.log(toppingsCost);
};

function orderTotal(){

}

function chooseToppingsForm() {
  const userToppingSelections = document.querySelectorAll("input[name=toppingSelection]:checked");
  const userToppingSelectionsArray = Array.from(userToppingSelections);
  let toppingTotalCost = 0;
  userToppingSelectionsArray.forEach(function (element) {
    let cost = parseFloat(element.id);
    toppingTotalCost += cost;
    console.log(element.value + ' The price is: $' + element.id);
  });
  totalCostOftoppings(toppingTotalCost) // call totalCostOftoppings function and pass in the value of the cost of the selected toppings.
}

window.addEventListener("load", function () {
  document.getElementById("pizzaSizeForm").addEventListener("submit", function(e){
    chooseSizeForm(e);
  });
  document.getElementById("toppingsForm").addEventListener("submit", function(e){
    e.preventDefault();
    chooseToppingsForm();
  });
  document.getElementById("currentOrderForm").addEventListener("submit", function(e){
    e.preventDefault();
    orderTotal();
  });
});

function uncheck() {
  ('input[type="checkbox"]'.forEach(function () {
    this.checked = false;
  }))
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


