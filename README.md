

## Describe Pizza()

Test: "It should create a pizza object containing three properites - one for size, one for an array of toppings and one for price;
Code: const myPizza = new Pizza("small", ['Extra cheese', 'Artichoke', 'Mushrooms'], price: 20)
Expected Output: "myPizza{size: "small", toppings: ['Extra cheese', 'Artichoke', 'Mushrooms']}"

Test: "It should take a size as an argument and add it to an empty pizza object"
Code: myPizza.addSize("small");
Expected Output: "myPizza{size: "small", toppings: [], price: 0}"

Test: "It should take a list of toppings and add them to an empty pizza object"
Code: myPizza.addToppings('extra cheese, artichoke, mushrooms'.split(' '));
Expected Output: "myPizza{size: , toppings: ['extra cheese', 'artichoke', 'mushrooms'], price: 0}"

Test: "It should take a value for price and add it to the existing price."
Code: myPizza.addPrice(15);
Expected Output: "myPizza{size; , toppings: [], price: 15"}

Test: 
Code: 
Expected Output: " "

Test: 
Code: 
Expected Output: " "

Test: 
Code: 
Expected Output: " "

