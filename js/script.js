import * as jeu from './functions.js';

const listWords = ["apple","banana","cherry"];
const randomIndex = jeu.getRandomInt(listWords.length);
const randomWord = listWords[randomIndex];

jeu.changeMot(randomWord);
