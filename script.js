// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let upperCase = [];
let lowerCase = [];
let symbol = [];
let number = [];

function generatePassword() {
  var length = parseInt(
    prompt(
      "How many characters would you like in your password?",
      "min 8 max 128"
    )
  );
  console.log(length);

  if (isNaN(length)) {
    var length = prompt(
      "How many characters would you like in your password?",
      "min 8 max 128"
    );
    //alert ('NaN')
  }
}
