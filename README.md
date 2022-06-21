# Pizza

#### By Matt Wilkinson


## Github links
* https://github.com/wilkinsonmatt/Pizza


## Technologies Used

* CSS
* HTML
* Bootstrap
* JavaScript
* Jquery

## Description
A program that allows a user to order a pizza. The user gets to choose the size, and toppings. The cost of the pizza is determined by their choices, and added to the order where the total cost the pizzas is added up.


## Tests

* Describe: Order()
Test: 
      "It should return a Order object with two properties: pizzas and totalcostOfOrder"
Code: 
      currentOrder = new Order();
Expected Output: 
      Order {pizzas: [], totalcostOfOrder: 0}

* Describe: Order.prototype.AddPizza  

Test: 
    "It should add an object with two priorities to the 'pizzas' property of 'order'."

Code: 
      currentOrder = new Order();
      currentOrder.AddPizza("small", ["guts", "something", "gum"]);
      currentOrder.pizzas
Expected Output: 
-   pizzas: [("small", ["guts", "something", "gum"])]

* Describe: Order.prototype.CostOfOrder
Test: 
      "It should add up all the pizzas in that order by adding together each pizza to order.totalCostOfOrder"
Code: 
      currentOrder = new Order();
      currentOrder.AddPizza("small", ["guts", "something", "gum", "nuts"]);
      currentOrder.AddPizza("large", ["something", "gum"]);
      currentOrder.CostOfOrder();
      currentOrder.totalCostOfOrder
Expected Output: 15.5

* Describe: Pizza()
Test: 
      "It should return a pizza object with three properties: size, toppings, and cost"
Code: 
      pizza1 = new Pizza();
Expected Output: 
      pizza {size: "", toppings: [], cost: 0}

* Describe: Pizza.prototype.makeAPizza
Test: 
      "It should add update the current .size and .toppings of the pizza object with the pizzaSize
Code: 
      let pizza1 = new Pizza;
      let pizzaSize = "small";
      let pizzaToppings = ["guts", "something", "gum", "nuts"];
      pizza1.makeAPizza(pizzaSize, pizzaToppings);
      pizza1;
Expected Output: 
      Pizza {size: 'small', toppings: ["guts", "something", "gum", "nuts"], cost: 0}

* Describe: Pizza.prototype.costOfPizza
Test: 
      "It should determine the cost of the pizza based on the size, and the number of toppings." 
Code: 
      let pizza1 = new Pizza;
      pizza1.size = "small",
      pizza1.toppings = ["guts", "something", "gum", "nuts"]
      pizza1.costOfPizza();
      pizza1.cost;
Expected Output: 
      5.5




## Setup/Installation Requirements

* Download entire github file
* launch index.HTML file in Google Chrome

## Known Bugs

* Business logic is finished, but UI and HTML/CS still need work

## License

Copyright (c) 2022 Matt Wilkinson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR I