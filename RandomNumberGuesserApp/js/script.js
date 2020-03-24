let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:



function generateTarget() {
  
  let target = Math.floor(Math.random()*10);
  console.log(target)
  return target
  }

  function compareGuesses(currentHumanGuess, computerGuess, target) {
      let currentHuman = Math.abs(currentHumanGuess - target)
      let compGuess = Math.abs(computerGuess - target);
      if (currentHuman == compGuess) {
          return true

      } else if (compGuess < currentHuman) {
          return false

      } else {
          return true
      }

  } 

  function updateScore (update) {
      if (update === "computer" ){
          computerScore += 1
      }
      else if (update === "human") {
          humanScore += 1
      }

  }

  function advanceRound () {
      currentRoundNumber += 1
  }



function checkGuess() {
    var humanGuess = Number(humanGuess.value);
    humanGuess.innerHTML += humanGuess + " ";
  alert('your number is out of range')
console.log(humanGuess)
}