import * as jeu from './functions.js';
import { listWords } from './listwords.js'
const randomIndex = jeu.getRandomInt(listWords.length);
const randomWord = listWords[randomIndex];

jeu.changeWord(randomWord);


const inputElement = document.getElementById("type-mot");

inputElement.addEventListener("input", function() {
    const valeurInput = inputElement.value.toLowerCase();
    const errorClass = "border-red-700";
    const successClass = "border-green-700";
    const defaultClass = "border-blue-700";

    let hasError = false;
    let hasSuccess = false;

    for (let i = 0; i < valeurInput.length; i++) {
        if (valeurInput[i] !== randomWord[i]) {
            hasError = true;
            break;
        }
    }

    if (valeurInput.length <= randomWord.length && !hasError) {
        hasSuccess = true;
    }

    inputElement.classList.toggle(errorClass, hasError);
    inputElement.classList.toggle(successClass, hasSuccess);
    inputElement.classList.toggle(defaultClass, !hasError && !hasSuccess);
});
