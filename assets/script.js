// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let charLength = prompt("How many characters would you like the password to be?");
  if (charLength < 8 || charLength > 128 ) {
    alert("Please enter a number between 8 and 128.");
    return;
  }
  let lowercase = confirm("Do you want lowercase characters?");
  let uppercase = confirm("Do you want uppercase characters?");
  let numeric = confirm("Do you want numeric characters?");
  let specChar = confirm("Do you want special characters?");
  let possChar ="";
  if (lowercase === true) {
    possChar += "ababcdefghijklmnopqrstuvwxyz"
    }
  if (uppercase === true) {
    possChar += "ABCDEFGHIJKLMNOPQRSTUVXYZ"
  }
  if (numeric === true) {
    possChar += "0123456789"
  }
  if (specChar === true) {
    possChar += "!@#$%^&*?()_+"
  } 
  var password = '' 

  for (let i = 0; i < charLength; i++) {
    let charNum = Math.floor(Math.random() * possChar.length)
    password += possChar.charAt(charNum)
  }
  return password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
