function Order() {
  this.pizzas = [];
  this.costOfOrder = 0;
}

function Pizza() {
  this.size = "medium";
  this.toppings = [];
  this.numberOfToppings = 0;
  this.cost = 8.00;
}

pizza_options {
  size = ["small", "medium", "large"];
  toppings = ["cheese", "pepperoni", "artichoke", "anchovy", "etc"];
}

function costOfPizza();
  let costOfPizza = 0;

  if(/*pizza is a small*/) {
    costOfPizza = 8.00;
    if(/*number of toppings is more than 3*/) {
      costOfPizza += (.5 * /*number of toppings - 3*/);
  }else if(/*pizza is a med*/) {
    costOfPizza = 8.00;
    if(/*number of toppings is more than 3*/) {
      costOfPizza += (.5 * /*number of toppings - 3*/);
    }
  }else if(/*pizza is a large*/) {
    costOfPizza = 10.00;
    if(/*number of toppings is more than 3*/) {
      costOfPizza += (.5 * /*number of toppings - 3*/);
    }
  }
  return costOfPizza;
}