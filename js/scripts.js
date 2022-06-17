let currentOrder;


function Order() {
  this.pizzas = [];
  this.totalCostOfOrder = 0;
}

Order.prototype.AddPizza = function(pizzaSize, pizzaToppings){
  let newpizza = new Pizza;
  newpizza.makeAPizza(pizzaSize, pizzaToppings);
  newpizza.costOfPizza();
  this.pizzas.push(newPizza);
}

Order.prototype.CostOfOrder = function(){
  for(let i = 0; i < /*length of this.pizzas*/; i++){
    this.totalCostOfOrder += this.pizzas[i].cost;
  }
}

function Pizza() {
  this.size = "medium";
  this.toppings = [];
  this.numberOfToppings = /**/;
  this.cost = 8.00;
}

Pizza.prototype.makeAPizza(pizzaSize, pizzaToppings) = function() {
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
}

Pizza.prototype.costOfPizza() = function(){
  if(/*pizza is a small*/) {
    this.cost = 8.00;
    if(/*number of toppings is more than 3*/) {
      this.cost += (.5 * /*number of toppings - 3*/);
    }
  }else if(/*pizza is a med*/) {
    this.cost = 8.00;
    if(/*number of toppings is more than 3*/) {
      this.cost += (.5 * /*number of toppings - 3*/);
    }
  }else if(/*pizza is a large*/) {
    this.cost = 10.00;
    if(/*number of toppings is more than 3*/) {
      this.cost += (.5 * /*number of toppings - 3*/);
    }
  }
}




/************************ UI LOGIC **************************************/

pizza_options {
  size = ["small", "medium", "large"];
  toppings = ["cheese", "pepperoni", "artichoke", "anchovy", "etc"];
}


//start new order button ---> goes to window with size and pizza toppings
currentOrder = new Order();
currentOrder.AddPizza();
//submit button to add pizza to order

//check to see if they want another pizza 

//if not, show total cost of pizzas and info on pizza ordered 
    //if time, allow pizzas to be deleted or added.



