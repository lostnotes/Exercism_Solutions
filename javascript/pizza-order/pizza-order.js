/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  //base price of pizza using switch
  let pizzaCost = 0;
  switch (pizza) {
    case 'Margherita': 
      pizzaCost = 7;
      break;
    case 'Caprese': 
      pizzaCost = 9;
      break;
    case 'Formaggio':
      pizzaCost = 10;
      break;
    default: 
      pizzaCost = 0;
  }
 return pizzaCost + (extras.map((value) => {
   if (value == 'ExtraSauce') { 
     return 1;
   } else if (value == 'ExtraToppings') {
     return 2;
   } else {
     return 0;
   }
 }).reduce((runningTotal, currentValue) => runningTotal + currentValue, 0));
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
    let totalPrice = 0;
    const newOrders = pizzaOrders.flat();
    for (let i = 0; i < newOrders.length; i++) {
        let newExtras = newOrders[i].extras.flat()
      totalPrice += pizzaPrice(newOrders[i].pizza, ...newExtras)
    }
    console.log(totalPrice);
    return totalPrice;
  }
