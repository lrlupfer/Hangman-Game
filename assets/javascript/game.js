// word bank nested array
var wordBank = [
["W", "I", "N", "N", "I", "N", "G"],
["L", "O", "S", "E", "R"],
["H", "U", "G", "E"],
["T", "R", "E", "M", "E", "N", "D", "O", "U", "S"],
["T", "E", "R", "R", "I", "F", "I", "C"],
["F", "A", "K", "E"],
["B", "I", "G", "L", "Y"],
["H", "A", "T", "E", "R", "S"]
];


var random = Math.floor((Math.random() * wordBank.length - 1));
// choose random word from word bank
var chooseWord = wordBank[random];

var newWord = new Array(wordBank.length);

var error = 0;

// adds underscores for each letter
for (var i = 0; i < newWord.length; i++) {
	newWord[i] = "_ ";
}

// displays word
function printNewWord() {
	for (var i = 0; i < newWord.length; i++) {
	var hangman = document.getElementById("hangman");
	var addLetter = document.createTextNode(newWord[i]);
	hangman.appendChild(addLetter);
	}
}

// checks letter submitted by user
var checkLetter = function() {
	var form = document.form; 
	var guess = form.elements["guessForm"]; 
	var character = guess.value;

character = character.toUpperCase();
	for (var i = 0; i < word.length; i++){
		if(word[i] === character){
			newWord[i] = character + " ";
			var match = true;
		}
	guess.value = "";
	}

var hangman = document.getElementById("hangman");
	hangman.innerHTML=""; 
	printLetter();

if(!match) {
		var wrongLetters = document.getElementById("wrongLetters");
		var addLetter = document.createTextNode(" " + thisWord);
		wrongLetters.appendChild(addLetter); 
		error++;
		var hangman = document.getElementById("hangman");
	}

var gameWon = true;
	for (var i = 0; i < newWord.length; i++) {
		if(newWord[i] === "_ "){
			gameWon = false;
		}
	}
	if(gameWon) {
		window.alert("You win!");
	}

	if(error === 6) {
		window.alert("You lose!");
	}
}

function init() {
	printNewWord();
}
