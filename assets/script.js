// Password generator
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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

  function generatePassword() {
    var characterSetSpecial = "[`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]";
    var characterSetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var characterSetLowercase = "abcdefghijklmnopqrstuvwxyz"
    var characterSetNumbers = "1234567890"

    // this is a for loop that uses passwordLength to determine i (how long it runs) and appends a new value chosen from the string for each appendage until the for loop is complete
    if (lowerCase && upperCase && specialCharacters && includeNumbers) {
      var desiredCharacterArrays = [characterSetLowercase, characterSetSpecial, characterSetUppercase, characterSetNumbers];
      let password = ''

      for (let i = 0; i < passwordLength; i++) {
        var x = 0

        password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * desiredCharacterArrays[x].length))

        if (x < desiredCharacterArrays.length) {
          x++;
        } else {
          x = 0
        };

      };
      return password;

      } else if (lowerCase && upperCase && specialCharacters && !includeNumbers) {
        var desiredCharacterArrays = [characterSetLowercase, characterSetSpecial, characterSetUppercase];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        };
        return password;

      } else if (lowerCase && upperCase && !specialCharacters && !includeNumbers) {
        var desiredCharacterArrays = [characterSetLowercase, characterSetUppercase];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (lowerCase && !upperCase && !specialCharacters && !includeNumbers) {
        var desiredCharacterArrays = [characterSetLowercase];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (!lowerCase && !upperCase && !specialCharacters && includeNumbers) {
        var desiredCharacterArrays = [characterSetNumbers];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (!lowerCase && !upperCase && specialCharacters && includeNumbers) {
        var desiredCharacterArrays = [characterSetNumbers, characterSetSpecial];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (!lowerCase && upperCase && specialCharacters && includeNumbers) {
        var desiredCharacterArrays = [characterSetNumbers, characterSetSpecial, characterSetUppercase];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (lowerCase && upperCase && !specialCharacters && includeNumbers) {
        var desiredCharacterArrays = [characterSetLowercase, characterSetUppercase, characterSetNumbers];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (lowerCase && !upperCase && specialCharacters && includeNumbers) {
        var desiredCharacterArrays = [characterSetLowercase, characterSetSpecial, characterSetNumbers];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (lowerCase && !upperCase && !specialCharacters && includeNumbers) {
        var desiredCharacterArrays = [characterSetLowercase, characterSetNumbers];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (!lowerCase && upperCase && specialCharacters && !includeNumbers) {
        var desiredCharacterArrays = [characterSetUppercase, characterSetSpecial];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (lowerCase && !upperCase && specialCharacters && !includeNumbers) {
        var desiredCharacterArrays = [characterSetLowercase, characterSetSpecial];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (!lowerCase && upperCase && !specialCharacters && includeNumbers) {
        var desiredCharacterArrays = [characterSetUppercase, characterSetNumbers];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (!lowerCase && !upperCase && specialCharacters && !includeNumbers) {
        var desiredCharacterArrays = [characterSetSpecial];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
      } else if (!lowerCase && upperCase && !specialCharacters && !includeNumbers) {
        var desiredCharacterArrays = [characterSetUppercase];

        for (let i = 0; i < passwordLength; i++) {

          password += desiredCharacterArrays[x].charAt(Math.floor(Math.random() * charactersLength));

          if (x < desiredCharacterArrays.length) {
            x++;
          } else {
            x = 0
          }
        }
    };
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

