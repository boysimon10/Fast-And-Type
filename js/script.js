import * as jeu from './functions.js';

const listWords = ["apple","banana","cherry"];
const randomIndex = jeu.getRandomInt(listWords.length);
const randomWord = listWords[randomIndex];

jeu.changeMot(randomWord);


const inputElement = document.getElementById("type-mot");

inputElement.addEventListener("input", function() {

    const valeurInput = inputElement.value.toLowerCase()
    const element = document.getElementById("type-mot")

    let erreur = false
    for (let i = 0; i < valeurInput.length; i++) {
        if (valeurInput[i] !== randomWord[i]) {
            erreur = true;
            break;
        }
    }
        if (erreur) {

            if (element.classList.contains("focus:outline-none")) {
                element.classList.remove("focus:outline-none")
            }else if (element.classList.contains("focus:outline-green-700")) {
                element.classList.remove("focus:outline-green-700")
            }else{
                element.classList.add("focus:outline-red-700")
            }

        } else if (valeurInput.length < randomWord.length) {

            if (element.classList.contains("focus:outline-none")) {
                element.classList.remove("focus:outline-none")
            }else if (element.classList.contains("focus:outline-red-700")) {
                element.classList.remove("focus:outline-red-700")
            }else{
                element.classList.add("focus:outline-green-700")
            }

        } else if (valeurInput.length === randomWord.length) {
            
        }
});