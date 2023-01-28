// Business logic

// let myPizza = new Pizza();

function Pizza(size) {
  this.size = size;
  this.toppings = [];
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
function startOrder(orderSize) { 
  let customerPizza = new Pizza();// create a new pizza object
  customerPizza.addSize(orderSize); // add the size of the pizza for the order
  addCostToPizza(customerPizza);
}

function addCostToPizza(custPizza) {
  if (custPizza.size === 'Small') { // add the cost of the pizza to the newly created pizza object depending on the size of the pizza being ordered.
    custPizza.addPrice(12)
  } else if (custPizza.size === 'Medium') {
    custPizza.addPrice(14)
  } else {
    custPizza.addPrice(16)
  }
  updateOrderTotal(custPizza); // call the updateOrderTotal function passing in the custPizza object
  upddatePageWithSizeSelection(custPizza.size); // call a function to update the size being ordered on the page passsing in the size of the pizza on order.
  document.getElementById('toppingsForm').removeAttribute('class'); //because the pizza object does not get created until the user hits the submit button on the size selection form, the toppings selection is hidden until a size has been chosen and the object created.
  document.getElementById("toppingsForm").addEventListener("submit", function(e){
    e.preventDefault();
    chooseToppingsForm(custPizza);
  });
  console.log(custPizza);
}

function chooseSizeForm(e) {
  e.preventDefault();
  const customerPizzaSizeSelection = document.querySelector("input[name='choosePizzaSize']:checked").value;
  startOrder(customerPizzaSizeSelection); // using the size of the pizza ordered call for a new pizza object to be made with the startOrder function.

}

function upddatePageWithSizeSelection(selectedSize) {
  document.getElementById('sizeUl').innerText = "Size: " + selectedSize; // update the page to display the size of the pizza currently being ordered.
};

function updateOrderTotal(custPizzaTotal) {
  document.getElementById('orderTotal').innerText = custPizzaTotal.total; // update the page with the total cost of the pizza being ordered.
};


function chooseToppingsForm(custPizza) {

  const userToppingSelections = document.querySelectorAll("input[name=toppingSelection]:checked"); // get a list of toppings being ordered from the page.
  userToppingSelections.forEach(function (element) {
    custPizza.toppings.push(element.value)
  });
  addToppingsToThePage(custPizza.toppings);
}

function totalCostOftoppings(toppingsCost){
  customerPizza = addCost();
  console.log(toppingsCost);
};

function addToppingsToThePage(toppingsArray){
  let newLi = document.createElement('li');
  
  
  
  console.log(toppingsArray)
};





  
//   userToppingSelectionsArray.forEach(function (element) {
//     let cost = parseFloat(element.id);
//     toppingTotalCost += cost;
//   });
//   totalCostOftoppings(toppingTotalCost);
//   addToppingsFunction(userToppingSelectionsArray);
// }


// userToppingSelectionsArray[2]
// <input type=​"checkbox" name=​"toppingSelection" value=​"mushroom" id=​"mushroom">​
// userToppingSelectionsArray[2].value;
// 'mushroom'



window.addEventListener("load", function () {
  document.getElementById("pizzaSizeForm").addEventListener("submit", function(e){
    chooseSizeForm(e);
  });
  document.getElementById("currentOrderForm").addEventListener("submit", function(e){
    e.preventDefault();
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


