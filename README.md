# programming-language-suggester
An application demonstrating knowledge of objects, arrays, loops and branching utilizing user input.

#### By Zachary Cipolletta


## Technologies used

* JavaScript
* HTML
* CSS

## Description

This is a website for a Pizza Parlor where users can order and customize their pizza.  Users can select from different sizese and toppings and see a total based on their seleciton.  Hitting the submit button unde the size seleciton area creates a new pizza object containing the values of the selected size, an array of toppings and the total price based on those selections.

Each time the user hits the submit button the page will be updated with their selected customized order. The page will display the size and toppings selected as well as the total price for the order.


## Setup/Installation Requirements

* Clone repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser.

## Known Bugs

 * No known bugs at this time.
 

## License
MIT

Copyright (c) 1/29/2023 Zachary Cipolletta

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


