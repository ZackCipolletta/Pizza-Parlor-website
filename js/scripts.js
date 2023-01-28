// Business logic

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

// UI logic

function chooseSizeForm(e) {
  e.preventDefault();
  const customerPizzaSizeSelection = document.querySelector("input[name='choosePizzaSize']:checked").value;
  startOrder(customerPizzaSizeSelection); // using the size of the pizza ordered call for a new pizza object to be made with the startOrder function.
}

function startOrder(orderSize) {
  let customerPizza = new Pizza();// create a new pizza object
  customerPizza.addSize(orderSize); // add the size of the pizza for the order
  addCostOfSize(customerPizza);
}

function addCostOfSize(custPizza) {
  if (custPizza.size === 'Small') { // add the cost of the pizza to the newly created pizza object depending on the size of the pizza being ordered.
    custPizza.addPrice(12)
  } else if (custPizza.size === 'Medium') {
    custPizza.addPrice(14)
  } else {
    custPizza.addPrice(16)
  }
  updateOrderTotal(custPizza); // call the updateOrderTotal function passing in the custPizza object
  upddatePageWithSizeSelection(custPizza.size); // call a function to update the size being ordered on the page passsing in the size of the pizza on order.
  checkToppingsForm(custPizza);
  return  custPizza
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
};

function updateOrderTotal(custPizzaTotal) {
  document.getElementById('orderTotal').innerText = custPizzaTotal.total; // update the page with the total cost of the pizza being ordered.
};

function chooseToppingsForm(custPizza) {
  const userToppingSelections = document.querySelectorAll("input[name=toppingSelection]:checked"); // get a list of toppings being ordered from the page.
 custPizza.toppings = [];
  userToppingSelections.forEach(function (element) {
    custPizza.toppings.push(element.value)
  });
  addToppingsToThePage(custPizza);
  totalCostOftoppings(custPizza);
}

function totalCostOftoppings(custPizza) {
  let toppingsPrice = 0
  custPizza.toppings.forEach(function (element) {
  if (element === "Bacon") {
    toppingsPrice += 2
  };
  if (element === "Peppers") {
    toppingsPrice += 1
    };
  if (element === "Sausage") {
    toppingsPrice += 2
  };
  if (element === "Mushroom") {
    toppingsPrice += 1
  };
  if (element === "Anchovy") {
    toppingsPrice += 1.5
  };
  if (element === "Artichoke") {
    toppingsPrice += 1
  };
  if (element === "Pepperoni") {
    toppingsPrice += 1.5
  };
  if (element === "Extra Cheese") {
    toppingsPrice += 1
  };
  })
  console.log(toppingsPrice);
  custPizza.total = 0;
  custPizza.addPrice(toppingsPrice);
  addCostOfSize(custPizza);
  // updateOrderTotal(custPizza);
};

function removeListElements() {
  while(document.getElementById('toppingsUl').hasChildNodes()){
    document.getElementById('toppingsUl').removeChild(document.getElementById('toppingsUl').firstChild);
  }  
}
function addToppingsToThePage(custPizza) { // Take the array of toppings and add them to the page looping through the array with a forEach loop.
  if (document.getElementById('toppingsUl').hasChildNodes()){
    removeListElements();
  };
  custPizza.toppings.forEach(function (element) {
    let list = document.createElement('li');
    list.append(element);
    document.getElementById('toppingsUl').append(list);
  })
  console.log(custPizza);
};

window.addEventListener("load", function () {
  document.getElementById("pizzaSizeForm").addEventListener("submit", function (e) {
    chooseSizeForm(e);
  });
  document.getElementById("currentOrderForm").addEventListener("submit", function (e) {
    e.preventDefault();
  });
});

function uncheck() {
  ('input[type="checkbox"]'.forEach(function () {
    this.checked = false;
  }))
}