import * as jeu from './functions.js';

const listWords = ["apple","banana","cherry"];

const motElement = document.getElementById("mot");
function changeMot() {
    const randomIndex = jeu.getRandomInt(listWords.length);
    const randomWord = listWords[randomIndex];
    motElement.textContent = randomWord;
}
changeMot();
