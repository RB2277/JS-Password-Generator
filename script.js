//Variable that grabs the generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variables to store the potential password characters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_-+=:;/?";
var numberList = "1234567890"

var characterOptions = "";

//The main function that generates the password
function generatePassword() {
var passwordLength = prompt("What is the desired length of your password? 8-128"); {
  if (passwordLength < 8 || passwordLength > 128) {
    alert("try again!")
    return generatePassword();
  }
  var UpperLowerPrompt = confirm("Would you like your password to be lowercase or uppercase? Ok for lower or Cancel for Upper");
  var specialPrompt = confirm("Would you like your password to include special characters?")
  var numberPrompt = confirm("Would you like your password to include numbers?")

  //Checks for each of the provided values through the prompts, and applies them if they were requested.
  if(UpperLowerPrompt === true) {
    characterOptions += lowerCaseLetters;
  } else {
    characterOptions += UpperCaseLetters;
  }
  if(specialPrompt === true) {
    characterOptions += specialCharacters;
  }
  if(numberPrompt === true) {
    characterOptions += numberList
  }

  //Stores the generated password which starts out as empty
  var password ="";
  
  //function that randomizes the characters of the password and adds them until the requested length is reached
function CriteriaPassword() {
  var randomIndex = Math.floor(Math.random() * characterOptions.length)
  var randomCharacter = characterOptions.charAt(randomIndex)
return randomCharacter;
}
for (var i = 0; i < passwordLength; i++) {
  password += CriteriaPassword()
}
console.log(password)
  return password;
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
