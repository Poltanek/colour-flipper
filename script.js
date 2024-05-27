const newColourBtnElement = document.getElementById('new-colour-button')
const currentColourElement = document.getElementById('current-colour')

const hexadecimalValue = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

function getRandomNumber() {
    /* generating a random number */
    const randomIndexPosition = Math.floor(
        Math.random() * hexadecimalValue.length
    );

    /* retrieving that value */
    const randomHexValue = hexadecimalValue[randomIndexPosition];
    return randomHexValue;
}

function getRandomHexadecimalString(stringLength) {

    /*  */
    let hexString = "";
    for (let i = 0; i < stringLength; i++) {
        hexString += getRandomNumber();
    }

    return hexString;
}


newColourBtnElement.addEventListener('click', () => {
    const randomHexString = "#" + getRandomHexadecimalString(6);
    document.body.style.setProperty(
        'background-color',
        randomHexString
    )

    currentColourElement.textContent = randomHexString;

});