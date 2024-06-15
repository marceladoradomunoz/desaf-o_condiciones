

let passwordEnter = "";
let messagePassword = document.querySelector('#idMessagePassword');

function fnCreatePassword() {
    let numOne = document.querySelector('#numOne').value;
    let numTwo = document.querySelector('#numTwo').value;
    let numThree = document.querySelector('#numThree').value;

    return numOne + numTwo + numThree;
}

function fnValidatePassword() {
    let Password = fnCreatePassword();

    switch (Password) {

        case '911':
            messagePassword.textContent = 'Password 1 correcto';
            break;

        case '714':
            messagePassword.textContent = 'Password 2 correcto';
            break;

        default:
            messagePassword.textContent = 'Password incorrecto';
    }
}

function fnEnterPassword() {
    fnValidatePassword();
}
