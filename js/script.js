function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getWord(listWords){
    const randomIndex = getRandomInt(listWords.length);
    return listWords[randomIndex];
}

const listWords = ["apple","banana","cherry"];
console.log("Random word: " + getWord(listWords));
const motElement = document.getElementById("mot");
function changeMot() {
    const randomIndex = getRandomInt(listWords.length);
    const randomWord = listWords[randomIndex];
    motElement.textContent = randomWord;
}

// Utilisez la fonction changeMot pour mettre à jour le texte dans la balise h1
changeMot();