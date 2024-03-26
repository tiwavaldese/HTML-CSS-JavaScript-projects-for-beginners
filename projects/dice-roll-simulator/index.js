
const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});




// // Get references to DOM elements
// let dice = document.querySelector('#dice');
// let rollBtn = document.querySelector('#roll-button')
// let rollHis = document.querySelector('#roll-history')

// //Function to generate random numbers between 1 and 6
// function rollDice(){
//   let num = Math.floor(Math.random() * 6) + 1;
//   return num;
// }
// console.log(rollDice())
// // // Add event listener to the button
// rollBtn.addEventListener('click', function(){
 
// //Roll the dice
// let rollResult = rollDice()

// //Update the dice display with rollResult
// // string.fromCodePoint is the graphic representation of the dice face which convert the unicode
// //unicode 9855 represent face 1
// dice.textContent = String.fromCodePoint(9855 + rollResult);

//   // Create a new list item to display the roll result
// let newRollItem = document.createElement('li')
// newRollItem.textContent = `Roll ${rollHis.childElementCount + 1}: ${dice.textContent}`

// // Add the roll item to the roll history
// rollHis.appendChild(newRollItem)

// // Add roll animation class
// dice.classList.add("roll-animation");
//  // Remove roll animation class after 1 second and roll the dice again
// setTimeout(() => {
//   dice.classList.remove("roll-animation");
//   rollDice();
// }, 1000);
// })
