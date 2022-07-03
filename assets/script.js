// Password generator
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// write password is the function that posts the password to the page in response to the click
function writePassword() {

  var inputLength = window.prompt("How long should your password be? Please enter a number between 8 and 128.");
  var passwordLength = parseInt(inputLength);

  if (passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
    return;
  } else if (passwordLength < 8) {
    window.alert("Please enter a number between 8 and 128.");
    return;
  };

  // All input other than yes will be treated as false
  var inputUpperCase = window.prompt("Does your password need uppercase letters? Please answer yes or no.");
  var inputLowerCase = window.prompt("Does your password need to contain lowercase letters? Please answer yes or no.")
  var inputCharacters = window.prompt("Does your password need to contain special characters? Please answer yes or no.");
  var inputNumbers = window.prompt("Does your password need to include numbers? Please answer yes or no.")

  var lowerCase = (inputLowerCase == "yes");
  var upperCase = (inputUpperCase == "yes");
  var specialCharacters = (inputCharacters == "yes");
  var includeNumbers = (inputNumbers == "yes");

  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  /* Separate arrays? 1 - 4 requirements
  
  Also DRYness of code - something can be simplified; strategy for identifying what needs to happen
  2 criteria: length and diversity of pw
  diversity criteria: up to 4

  */

  function generatePassword(passwordLength, caseSensitive, specialCharacters, includeNumbers) {
    var characterSetSpecial = "[`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]";
    var characterSetCapitalized = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var characterSetLowercase = "abcdefghijklmnopqrstuvwxyz"
    var characterSetNumbers = "1234567890"
    var j = 0
    var desiredCharacterArrays = [characterSetLowercase, characterSetSpecial, characterSetCapitalized, characterSetNumbers];
    let password = ''

    // this is a for loop that uses passwordLength to determine i (how long it runs) and appends a new value chosen from the string for each appendage until the for loop is complete
    //replace if statement for all the loops:
    for (let i = 0; i < passwordLength; i++) {

      // pulling from arrays/strings based on the parameters of the if statement
      // characters has to be defined - 
      // how do we guarantee that we have, for as many diversity specs as we have, there is at least one of each? 
      // rotate through each "array" - 1,2,3,4
      // diversity requirement: 
      // keep an index of which desiredCharacterArrays we're currently on
      // beginning of for loop: make a variable for currentCharacterArray (j)

      password += desiredCharacterArrays[j].charAt(Math.floor(Math.random() * charactersLength));

      if (j < desiredCharacterArrays.length) {
        j++;
      } else {
        j = 0
      }
    }

    return password;

  }
}

generateBtn.addEventListener("click", writePassword);

