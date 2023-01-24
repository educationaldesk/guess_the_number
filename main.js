"use strict"

// button variables
// const selectLvl = document.querySelector(".lvl"); //to be used for levels
const check = document.querySelector(".check");
const again = document.querySelector(".again");

//USER INPUT VARIABLE.
const userInput = document.querySelector(".userInput");

/* displays from DOM begins here*/
// const maxValForGuess = document.querySelector(".maxVal"); //for levels
const mainDisplay = document.querySelector(".main_display");

//score displays
const highestScore = document.getElementById("highestScore");
const yourScore = document.getElementById("yourScore");
const chancesLeft = document.getElementById("chancesLeft");
/* displays from DOM ends here*/

// javascript game variables 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let totalAttempts = 20;


//to check the user input code begins here
check.addEventListener("click", function(){
    if (totalAttempts > 0)
    {
        const userGuess = Number(userInput.value);
        if (secretNumber === userGuess)
        {
            mainDisplay.textContent = "CONGRATULATIONS 🎉";
            yourScore.textContent = totalAttempts;
            highestScore.textContent = totalAttempts > Number(highestScore.textContent) ? totalAttempts : highestScore.textContent;
        }
        else
        {
            mainDisplay.textContent = !userGuess ? "⛔NO NUMBER" : userGuess > secretNumber ? "📈HIGHER GUESS." : "📉LOWER GUESS.";
            totalAttempts--;
        }
    }
    if (totalAttempts <= 0) mainDisplay.textContent = "YOU LOST😭";
    chancesLeft.textContent = totalAttempts;
});


// again button to reset the game
again.addEventListener("click", function(){
    mainDisplay.textContent = "?";
    yourScore.textContent = 0;
    chancesLeft.textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    userInput.value = "";
    totalAttempts = 20;
})