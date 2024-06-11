const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJLMNÑOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnñopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "|!#$%&/()=?¡¨*[]_:;,.-{}+¿'~^"

const allCharacters = upperCase + lowerCase + numbers + symbols;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];

    while (length >= password.length){
        password += allCharacters[Math.floor(Math.random()* allCharacters.length)]
    }

    passwordBox.value = password;
}

function copyPassword(){
    let copyText = document.getElementById("#password");

    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);

   navigator.clipboard.writeText(passwordBox.value)

   alert("Copied Text " + passwordBox.value);
}
