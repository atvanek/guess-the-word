const guessedLetters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const spanGuesses = document.querySelector("span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";

const wordPlaceholder = function(word){

      const wordArray = [];

      for (const letter of word){

            console.log(letter);
            wordArray.push("●");
      }
      wordInProgress.innerText = wordArray.join("");
};

wordPlaceholder(word);

button.addEventListener("click", function(e){
      e.preventDefault();
      const guess = textInput.value;
      console.log(guess);
      textInput.value = "";
});




