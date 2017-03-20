// GLOBAL VARIABLES
// ========================================================
// Arrays and variabls for holding data
var wordOptions = ["winning", "loser", "huge", "tremendous", "terrific", "fake", "bigly", "haters"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // l _ _ _ _
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS (reusable blocks of code that I will call upon)
// ========================================================
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	// Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate blanks and successes with right number of blanks
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	// Change HTML to reflect round conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	// Testing/Debugging
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
}

function checkLetters(letter) {
	// Check if letter exists in the word

	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
			// alert("Letter found");
		}
 	}

 	// Check where in the word the letter exists, then populate blanksAndSuccesses array
 	if(isLetterInWord) {
 		for (var i = 0; i < numBlanks; i++) {
 			if(selectedWord[i] == letter) {
 				blanksAndSuccesses[i] = letter;
 			}
 		}
 	}
 	// Letter wasn't found
 	else {
 		wrongLetters.push(letter);
 		guessesLeft--
 	}

 	// testing
	// console.log(blanksAndSuccesses);
}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

	// Update the HTML to reflect count stats
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	// Check if user won
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You won!");

		// Update win counter in HTML
		document.getElementById("winCounter").innerHTML = winCount;

		startGame();
	} else if (guessesLeft == 0) {
		// Check if user lost
		lossCount++;
		alert("You lost!");

		// Update loss counter in HTML
		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();
	}

}

// MAIN PROCESS
// ========================================================

// Initiates the code
startGame();

// Registers key clicks

document.onkeyup = function(event) {
	var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(lettersGuessed);
	roundComplete();

	// testing
	console.log(lettersGuessed);


}












