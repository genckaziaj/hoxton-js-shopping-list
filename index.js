/*
Today's exercise: Shopping list
Repo: hoxton-js-shopping-list
Description
We want you to create a shopping list price displayer. You should be able to see in a list each item followed by its price!

Instructions
- Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
- Store this information using the most appropriated data structures we've studied so far
- Have a prompt to add an item to the list (you can have two prompts for the item and its price)
- Output a list displaying each item and its price
- Output the total at the end

Tips
- Pay attention to your data types, and what can you do with them

Challenge
We should be able to expand the list. As such, find a way to have two prompts, one for the item and another for the price, asking you repeatedly to add items to your list. The user should be able to stop adding items and then output the list to the user. We can use Google in our favour here if we know the right questions to ask
*/

let shoppingList = [
  ["Milk", 1.2],
  ["Cocoa", 2.0],
  ["Salad", 2.0],
  ["Carrots", 2.0],
  ["Tomatoes", 2.5],
  ["Readymeals", 5.0],
];

let item = prompt("What item do you want to add to the shopping list?");
let price = Number(prompt("What is the price of the item?"));

shoppingList.push([item, price]);

console.log(shoppingList);

let total = 0;

console.log("This is the shopping list with its respective prices:");
for (item of shoppingList) {
  console.log(
    `The item is ${item[0].toLowerCase()} and its price is £${item[1].toFixed(
      2
    )}`
  );
  total += item[1];
}

console.log(
  `The total price of all shopping list items is £${total.toFixed(2)}`
);
