import * as jeu from './functions.js';
import { listWords } from './listwords.js'

let randomIndex = jeu.getRandomInt(listWords.length);
let randomWord = listWords[randomIndex];
let n = 0;
let score = 1000
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
            score-=5
            break;
        }
        jeu.viewScore(score)
    }

    if (valeurInput.length < randomWord.length && !hasError) {
        hasSuccess = true;
    }

    inputElement.classList.toggle(errorClass, hasError);
    inputElement.classList.toggle(successClass, hasSuccess);
    inputElement.classList.toggle(defaultClass, !hasError && !hasSuccess);
    if ( valeurInput == randomWord && n < listWords.length) {
        randomIndex = jeu.getRandomInt(listWords.length);
        randomWord = listWords[randomIndex];
        jeu.changeWord(randomWord);
        n++;
        inputElement.value = ""; // Efface l'entrée utilisateur
    }
   
});
