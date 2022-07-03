// Password generator
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// write password is the function that posts the password to the page in response to the click
function writePassword() {

  var inputLength = window.prompt("How long should your password be? Please enter a number between 8 and 128.");
  var passwordLength = parseInt(inputLength);

  if (passwordLength >= 128) {
    window.alert("Please enter a number between 8 and 128.");
    return;
  } else if (passwordLength <= 8) {
    window.alert("Please enter a number between 8 and 128.");
    return;
  };

  // All input other than yes will be treated as false
  var inputCase = window.prompt("Does your password need lowercase AND uppercase letters? Please answer yes or no.");
  var inputCharacters = window.prompt("Does your password need to contain special characters? Please answer yes or no.");

  var caseSensitive = (inputCase == "yes");
  var specialCharacters = (inputCharacters == "yes");

  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Used backslashes rather than unicode to include all special characters
  function generatePassword() {
    if (caseSensitive && specialCharacters) {
      let password = ''
      const characters = "[`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const charactersLength = characters.length;

      // this is a for loop that uses passwordLength to determine i (how long it runs) and appends a new value chosen from the string for each appendage until the for loop is complete
      for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }

    else if (caseSensitive && !specialCharacters) {
      let password = ''
      const characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const charactersLength = characters.length;

      for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }

    else if (!caseSensitive && specialCharacters) {
      let password = ''
      const characters = "[`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]abcdefghijklmnopqrstuvwxyz1234567890"
      const charactersLength = characters.length;

      for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }

    else if (!caseSensitive && !specialCharacters) {
      let password = ''
      const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
      const charactersLength = characters.length;

      for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    };
  }
}

generateBtn.addEventListener("click", writePassword);

