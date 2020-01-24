// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  return createPassword()

}
function createPassword() {
  var length = prompt("how many?")
  length = parseInt(length)
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!$^&*-=+_?";
  var option = "";
  var choiceUpper = confirm("would you like to use upper case letters")
  var choiceLower = confirm("would you like to include lower case letters")
  var choiceSymbols = confirm("would you like to include symbols")
  var choiceNumbers = confirm("would you like to include numbers")
  if (choiceUpper) {
    option = option.concat(upper);
  }
  if (choiceLower) {
    option = option.concat(lower);
  }
  if (choiceNumbers) {
    option = option.concat(numbers);
  }
  if (choiceSymbols) {
    option = option.concat(symbols);
  }
  var password = "";
  var passwordArray = Array(length);
  for (i = 0; i < length; i++) {
    var currentOption = option[Math.floor(Math.random() * option.length)];
    var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
    password += randomChar;
    passwordArray.push(randomChar);
  }
  return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
