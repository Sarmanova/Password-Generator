var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "~",
  "`",
  "<",
  ">",
  "?",
  "/",
  "[",
  "]",
];
var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var superArray = []; // this is gonna contain whatever the user  chooses (yes or no) into one giant array that the other arrays
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var firstMessage = confirm(
    "Welcome to Password Generate! Please select length and at least 1 character type"
  );
  console.log(firstMessage);

  if (firstMessage === true) {
    console.log("Yes!");
  } else {
    console.log("your loss");
    alert("Bad!");
  }

  var lengthMsg = parseInt(
    prompt(
      "Please enter the length of characters you would like for your password, it must be more than 9 and less than 128"
    )
  );
  console.log(lengthMsg);
  if ((lengthMsg.length >= 9 && lengthMsg.length) <= 128 && !isNaN(lengthMsg)) {
    console.log("Good job! This number is selected");
  } else {
    console.log("wrong try again");
    alert("Number should be between 8 and 128");
  }

  var lowerCaseMsg = confirm(
    "Could you select lowerCase character in your password!"
  );
  console.log(lowerCaseMsg);
  if (lowerCaseMsg === true) {
    console.log("cool add in lowercase characters");
    superArray = superArray.concat(lowerCaseArray);
  } else {
    console.log("wrong! try again");
  }

  var upperCaseMsg = confirm(
    "Could you select UpperCase character in your password!"
  );
  console.log(upperCaseMsg);
  if (upperCaseMsg === true) {
    console.log("Good job! This upperCase is selected");
    superArray = superArray.concat(upperCaseArray);
  } else {
    console.log("wrong try again");
  }

  var numberMsg = confirm(
    "Could you select number character in your password!"
  );
  console.log(numberMsg);
  if (numberMsg === true) {
    console.log("Good job! This number is selected");
    superArray = superArray.concat(number);
  } else {
    console.log("wrong try again");
  }

  var symbolMsg = confirm("Could you select symbols in your password!");
  console.log(symbolMsg);
  if (symbolMsg === true) {
    console.log("Good job! This symbol@#%^^&*() is selected");
    superArray = superArray.concat(specialCharacters);
  } else {
    console.log("wrong, symbol@#%^^&* are cool!");
  }

  var password = ""; // this is gonna store random password
  for (var index = 0; index < lengthMsg; index++) {
    var randomNumber = Math.floor(Math.random() * superArray.length);
    password += superArray[randomNumber];
  }
  return password;
}
