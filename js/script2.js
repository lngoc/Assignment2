//SMALLER OR LARGER

// Step 1: prompt user to input the integer
var num1 = parseInt(prompt("Enter your first integer: "));
var num2 = parseInt(prompt("Enter your second integer: "));

if (isNaN(num1) || isNaN(num2)) {
    //Step 2 invalid input
    document.write("Invalid input. Please enter valid integers.");
} else {
    if (num1 > num2) {//Step 3 if statement for this condition
        document.write("The larger number is: " + num1);
    } else if (num2 > num1) {
        document.write("The larger number is: " + num2);
    } else {
        document.write("Both numbers are equal: " + num1);
    }
}

//THE WORLD TRANSLATOR

//Step 1 
var translateCode = prompt("Enter a language code (es, de, en, fr):");

// Step 2 Define translation 
var translations = {
  es: "Hola Mundo",
  de: "Hallo Welt",
  en: "Hello World",
  fr: "Bonjour le monde",
};

//Step 3
if (translations.hasOwnProperty(translateCode)) {
  
  console.log("Hello World translated in " + translateCode + " is: " + translations[languageCode]);
} else {
  
  console.log("Hello World translated in English is: " + translations.en);
}


//The "Coin Flip" Game 

//Step 1: Generate a random number
let coinFlip = Math.round(Math.random())
// Step 2: Prompt the user to select Head or Tail
let userGuess = prompt("Select 'Heads' or 'Tails':").toLowerCase(); // Convert the user's input to lowercase for case-insensitive comparison

// Step 3: Use conditional statements to check the result of the coin flip and user's choice
if (coinFlip === 0) {
  // The result is heads
  if (userGuess === 'heads') {
    alert("The flip was heads and you chose heads...you win!");
  } else if (userGuess === 'tails') {
    alert("The flip was heads but you chose tails...you lose!");
  } else {
    alert("Invalid choice. Please select 'Heads' or 'Tails'.");
  }
} else {
  // The result is tails
  if (userGuess === 'tails') {
    alert("The flip was tails and you chose tails...you win!");
  } else if (userGuess === 'heads') {
    alert("The flip was tails but you chose heads...you lose!");
  } else {
    alert("Invalid choice. Please select 'Heads' or 'Tails'.");
  }
}

//GRADE ASSGINER

// Step 1: Prompt the user to enter a number between 1 and 100
let userInput = parseInt(prompt("Enter a number between 1 and 100:"));

// Step 2: Check if the input is a valid number between 1 and 100
if (userInput >= 1 && userInput <= 100) {
  // Step 3: Determine the grade based on the score
  if (userInput >= 90 && userInput <= 100) {
    console.log("You received an A");
  } else if (userInput >= 80 && userInput < 90) {
    console.log("You received a B");
  } else if (userInput >= 70 && userInput < 80) {
    console.log("You received a C");
  } else if (userInput >= 60 && userInput < 70) {
    console.log("You received a D");
  } else {
    console.log("You received an F");
  }
} else {
  // Step 4: Display an error message for invalid input
  console.log("Only numbers between 1 and 100 are accepted.");
}








  
  