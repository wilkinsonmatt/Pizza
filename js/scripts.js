let currentOrder;

//  Object contains the pizza(s) ordered (sorted as objects in an array), and the total cost of the order
function Order() {
  this.pizzas = [];
  this.totalCostOfOrder = 0;
}

//  Prototype creates a new pizza and adds it to that order
//  - makeAPizza makes the pizza
//  - costOfPizza sets the cost for that pizza
Order.prototype.AddPizza = function(pizzaSize, pizzaToppings){
  let newPizza = new Pizza;
  newPizza.makeAPizza(pizzaSize, pizzaToppings);
  newPizza.costOfPizza();
  this.pizzas.push(newPizza);
}

//  Prototype adds up the total cost of all the pizzas in that order 
Order.prototype.CostOfOrder = function()  {
  for(let i = 0; i < this.pizzas.length; i++){
    this.totalCostOfOrder += this.pizzas[i].cost;
  }
}

//  Object contains size of pizza, list of top toppings, cost of that pizza based on size/toppings
function Pizza() {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
}

//  Prototype sets that pizza's size and list of toppings 
Pizza.prototype.makeAPizza = function(pizzaSize, pizzaToppings) {
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
}

//  Prototype comes up with the cost of that pizza
//  - Each pizza size has a base cost
//  - adds $0.50 for each topping if they have more than 3
Pizza.prototype.costOfPizza = function() {
  if(this.size === "small") {
    this.cost = 5.00;
    if(this.toppings.length > 3) {
      this.cost += (.5 * (this.toppings.length - 3));
    }
  }else if(this.size === "medium") {
    this.cost = 8.00;
    if(this.toppings.length > 3) {
      this.cost += (.5 * (this.toppings.length - 3));
    }
  }else if(this.size === "large") {
    this.cost = 10.00;
    if(this.toppings.length > 3) {
      this.cost += (.5 * (this.toppings.length - 3));
    }
  }
}




/************************ UI LOGIC **************************************/
//all the options the customer had choose from to customize their pizza

$(document).ready(function() {

  //  On clicking "start order" button:
  //  - Hides welcome page stuff
  //  - shows check list of toppings for pizza
  //  - shows radio list or drop down for size
  //  - shows a button to "add pizza to order" 
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=player]:checked").val();
    const pizzaToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    console.log(pizzaSize);
    console.log(pizzaToppings);
    currentOrder = new Order();
    currentOrder.AddPizza(pizzaSize, pizzaToppings);
    currentOrder.CostOfOrder();
    console.log(currentOrder.totalCostOfOrder);
  });

  //  On clicking "Add pizza to order" button:
  //  - runs business logic to start order to add pizza to that order
  //  - hides previous check list, buttons, etc
  //  - show current pizzas w/ details in que along with current cost of order
  //  - show buttons for "Adding other pizza" or "place order"
  $("form#pigForm").submit(function(event){
    event.preventDefault();
  });

  //  On clicking "Add another pizza" button:
  //  - hides previous interface/buttons
  //  - shows interface for selecting options for another pizza
  //  - shows button to "Add pizza to order"
  $("form#dice2").click(function(event) {
    event.preventDefault();

  });

  //  On clicking "place order" button:
  //  - hides previous interface
  //  - shows thank you interface 
  //  - shows button to "Go back to the home page" 
  $("form#hold").click(function(event) {
    event.preventDefault();

  });

  //  On clicking "Go back to home page" button:
  //  - restarts the webpage resetting everything
  $("form#hold").click(function(event) {
    event.preventDefault();

  });

});