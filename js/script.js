const guessedLetters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const spanGuesses = document.querySelector("span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLettersList = [];

const wordPlaceholder = function(word){

      const placeholderLetters = [];

      for (const letter of word){
            
            console.log(letter);
            placeholderLetters.push("●");
      }
      wordInProgress.innerText = placeholderLetters.join("");
};

wordPlaceholder(word);

button.addEventListener("click", function(e){
      
      e.preventDefault();

      message.innerText = "";

      const guess = textInput.value;

      const goodGuess = inputValidate(guess);

      inputValidate(guess);

      if(goodGuess){
            makeGuess(guess);
      }

      textInput.value="";


});

const inputValidate = function(input){

      const acceptedLetter = /[a-zA-Z]/;

      if (input.length === 0) {
      message.innerText = "Please guess a letter.";
      }
      else if(input.length > 1){
      message.innerText = "Please guess only 1 letter at a time.";
      }
      else if(!input.match(acceptedLetter)){
      message.innerText = "Please only guess letters.";
      }
      else{

      return input;
      }

};

const makeGuess = function (guess){

      guess = guess.toUpperCase();

      if (guessedLettersList.includes(guess)){
            message.innerText = "You've already guessed that letter. Please try again.";
      }
      else {
            guessedLettersList.push(guess);
            console.log(guessedLettersList);
      }

      updateLetters();

      circleToLetter();

};

const updateLetters = function(){
      
      guessedLetters.innerHTML = "";
      
      for(const letter of guessedLettersList){
            
            const li = document.createElement("li");
            li.innerText = letter;
            guessedLetters.append(li);
      }
};

const circleToLetter = function(){
      const wordUpper = word.toUpperCase();
      const wordArray = wordUpper.split("");
      const revealWord = [];
      
      for(const letter of wordArray){
            if(guessedLettersList.includes(letter)){
                  revealWord.push(letter.toUpperCase());
            }
            else{
                  revealWord.push("●");
            }
      }

      wordInProgress.innerText = revealWord.join("");

      ;

      checkWin();
};

const checkWin = function(){

      if(wordInProgress.innerText === word.toUpperCase()){

            message.classList.add("win");
            message.innerHTML = `<p class="highlight"> You guessed the correct word! Congrats!</p>`;

      }
};