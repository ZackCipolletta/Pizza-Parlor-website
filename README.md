# Pizza-Parlor-Website
An application demonstrating knowledge of objects, arrays, loops and branching utilizing user input.

#### By Zachary Cipolletta


## Technologies used

* JavaScript
* HTML
* CSS

## Description

This is a website for a Pizza Parlor where users can order and customize their pizza.  Users can select from different sizese and toppings and see a total based on their seleciton.  Hitting the submit button under the size seleciton area creates a new Pizza object containing the values of the selected size, an array of toppings and the total price based on those selections.

Each time the user hits the submit button the page will be updated with their selected customized order. The page will display the size and toppings selected as well as the total price for the order.


## Setup/Installation Requirements

* Clone repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser.

## Known Bugs

 * The toppings attribute is an array containing a list of toppings for the pizza object and the form to select toppings returns an array.  However, the .addtoppings(). takes a string and turns it into an array which is then added to the pizza object.  I was not able to figure out how to create a method that would be able to directly take an array or list of elements from an array and add it directly that way.  
 
 My solution was to convert the array to a string.  The object is now able to use a method which will take the string as an argument and convert it back to an array to be added to the toppings property.
 

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


