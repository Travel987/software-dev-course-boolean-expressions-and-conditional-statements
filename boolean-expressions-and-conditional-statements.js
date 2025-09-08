/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

// Run: node boolean-expressions-and-conditional-statements.js
const readline = require("readline-sync");

// ---- Item (simple): torch ----
const tookTorch = readline
  .question("Take the torch? (y/n): ")
  .trim()
  .toLowerCase() === "y";

console.log("\nYou wake up in a dark forest.");
console.log("Two paths: mountains or village.");

const firstChoice = readline
  .question("Go to the 'mountains' or the 'village'? ")
  .trim()
  .toLowerCase();

// ===== MOUNTAINS (Layer 1) =====
if (firstChoice === "mountains" && tookTorch) {
  console.log("\nYour torch lights the rocky trail.");

  // Layer 2
  const caveOrClimb = readline
    .question("Do you enter the 'cave' or try to 'climb'? ")
    .trim()
    .toLowerCase();

  if (caveOrClimb === "cave") {
    // Layer 3
    const openChest = readline
      .question("You see a small chest. Open it? (y/n): ")
      .trim()
      .toLowerCase();
    if (openChest === "y") {
      console.log("You find a snack and recover strength. Ending: Safe and fed!");
    } else {
      console.log("You leave it and head back safely. Ending: Cautious explorer.");
    }
  } else {
    console.log("The climb is tiring but you reach a lookout. Ending: Nice view!");
  }

} else if (firstChoice === "mountains" && !tookTorch) {
  // Boolean example with NOT
  console.log("\nIt's too dark without a torch. You turn back. Ending: Retreat.");

// ===== VILLAGE (Layer 1) =====
} else {
  console.log("\nYou head toward the village.");

  // Layer 2
  const marketOrInn = readline
    .question("Do you go to the 'market' or the 'inn'? ")
    .trim()
    .toLowerCase();

  if (marketOrInn === "market") {
    // Layer 3
    const buyFood = readline
      .question("A stall sells hot soup. Buy some? (y/n): ")
      .trim()
      .toLowerCase();
    if (buyFood === "y") {
      console.log("Warm soup lifts your spirits. Ending: Cozy and full.");
    } else {
      console.log("You save your coins and move on. Ending: Frugal traveler.");
    }
  } else {
    // inn path
    // Layer 3
    const restOrLeave = readline
      .question("The innkeeper offers a room. 'rest' or 'leave'? ")
      .trim()
      .toLowerCase();
    if (restOrLeave === "rest") {
      console.log("You sleep well and feel safe. Ending: Rested.");
    } else {
      console.log("You leave and follow the road out of town. Ending: Onward.");
    }
  }
}