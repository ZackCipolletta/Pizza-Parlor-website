// Business logic

function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.total = 0;
}

Pizza.prototype.addSize = function (size) {
  this.size = size;
};

Pizza.prototype.addToppings = function (toppingsString) {
  this.toppings = toppingsString.split(' ');
};

Pizza.prototype.addPrice = function (price) {
  this.total += price;
};

// UI logic

function chooseSizeForm(e) {
  e.preventDefault();
  uncheckBoxes();
  startOrder();
 // using the size of the pizza ordered call for a new pizza object to be made with the startOrder function.
}

function startOrder() {
  let customerPizza = new Pizza();// create a new pizza object
  addSize(customerPizza); // add the size of the pizza for the order
}

function addSize(customerPizza) {
  const customerPizzaSizeSelection = document.querySelector("input[name='choosePizzaSize']:checked").value;
  customerPizza.addSize(customerPizzaSizeSelection);
  addCostOfSize(customerPizza);
}

function uncheckBoxes() { // resets all checkboxes 
  const checkBoxes = document.getElementsByName('toppingSelection');
  checkBoxes.forEach(function (element) {
    element.checked = false;
  });
}

function addCostOfSize(custPizza) {
  if (custPizza.size === 'Small') { // add the cost of the pizza to the newly created pizza object depending on the size of the pizza being ordered.
    custPizza.addPrice(12);
  } else if (custPizza.size === 'Medium') {
    custPizza.addPrice(14);
  } else {
    custPizza.addPrice(16);
  }
  addToppingsToThePage(custPizza);
  updateOrderTotal(custPizza); // call the updateOrderTotal function passing in the custPizza object to update the order total on the page
  upddatePageWithSizeSelection(custPizza.size); // call a function to update the size being ordered on the page passsing in the size of the pizza on order.
  checkToppingsForm(custPizza);
}

function checkToppingsForm(custPizza) {
  let toppingsForm = document.getElementById('toppingsForm'); ////because the pizza object does not get created until the user hits the submit button on the size selection form, the toppings selection is hidden until a size has been chosen and the object created.
  if (toppingsForm.hasAttribute('class')) {
    toppingsForm.removeAttribute('class');
    document.getElementById('toppingsForm').addEventListener("submit", function (e) {
      e.preventDefault();
      chooseToppingsForm(custPizza);
    });
  }
}

function upddatePageWithSizeSelection(selectedSize) {
  document.getElementById('sizeUl').innerText = "Size: " + selectedSize; // update the page to display the size of the pizza currently being ordered.
}

function updateOrderTotal(custPizzaTotal) {
  document.getElementById('orderTotal').innerText = custPizzaTotal.total; // update the page with the total cost of the pizza being ordered.
}

function chooseToppingsForm(custPizza) {
  const userToppingSelections = document.querySelectorAll("input[name=toppingSelection]:checked"); // get a list of toppings being ordered from the page.
 let toppingsArr = [];
  userToppingSelections.forEach(function (element) {
    toppingsArr.push(element.value);
  });
  let toppingsString = toppingsArr.join(" ");
  custPizza.addToppings(toppingsString);

  addToppingsToThePage(custPizza); // call the function to update toppings on the page with the current selection in the custPizza object.
  totalCostOftoppings(custPizza); // call the function to add total cost of toppings currently in the cuztPizza object.
}

function totalCostOftoppings(custPizza) {
  let toppingsPrice = 0;
  custPizza.toppings.forEach(function (element) {
  if (element === "Bacon") {
    toppingsPrice += 2;
  }
  if (element === "Peppers") {
    toppingsPrice += 1;
    }
  if (element === "Sausage") {
    toppingsPrice += 2;
  }
  if (element === "Mushroom") {
    toppingsPrice += 1;
  }
  if (element === "Anchovy") {
    toppingsPrice += 1.5;
  }
  if (element === "Artichoke") {
    toppingsPrice += 1;
  }
  if (element === "Pepperoni") {
    toppingsPrice += 1.5;
  }
  if (element === "Extra-Cheese") {
    toppingsPrice += 1;
  }
  });
  custPizza.total = 0; // Reset the total cost of the pizza to 0 each time the function is called.
  custPizza.addPrice(toppingsPrice); // add the of all toppings to the 'total' property of the pizza object.
  addSize(custPizza); // re-add the selected size and the cost of the selected size again. This allows the user to change the size and toppings then hit the add toppings button and still get the correct order total based on size and toppings selection.
  updateOrderTotal(custPizza); // call a cunction to update the order total on the page.
}

function removeListElements() {
  while(document.getElementById('toppingsUl').hasChildNodes()){
    document.getElementById('toppingsUl').removeChild(document.getElementById('toppingsUl').firstChild);
  }  
}
function addToppingsToThePage(custPizza) { // Take the array of toppings and add them to the page looping through the array with a forEach loop.
  if (document.getElementById('toppingsUl').hasChildNodes()){
    removeListElements();
  }
  custPizza.toppings.forEach(function (element) {
    let list = document.createElement('li');
    list.append(element);
    document.getElementById('toppingsUl').append(list);
  });
}

window.addEventListener("load", function () {
  document.getElementById("pizzaSizeForm").addEventListener("submit", function (e) {
    chooseSizeForm(e);
  });
  document.getElementById("currentOrderForm").addEventListener("submit", function (e) {
    e.preventDefault();
  });
});