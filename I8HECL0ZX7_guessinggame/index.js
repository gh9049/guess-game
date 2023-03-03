let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
  if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congractulations! You Got it Right!";
        gameResult.style.backgroundColor = "green";
      document. getElementById('userInput').value = "";
    } else {
        gameResult.textContent = "Please Provide a VAlid Input";
        gameResult.style.color = "red";
    }
}


function exit(){
  document. getElementById('userInput'). value = "";
  gameResult.textContent = "Thanks for playing !"
  gameResult.style.color = "blue";
  
  
}
function tryagain(){
  document. getElementById('userInput'). value = "";
  randomNumber = Math.ceil(Math.random() * 100);
  gameResult.textContent = "C'Mon! Guess the number"
  gameResult.style.color = "blue"
}
