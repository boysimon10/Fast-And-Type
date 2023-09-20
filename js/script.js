function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getWord(listWords){
    const randomIndex = getRandomInt(listWords.length);
    return listWords[randomIndex];
}

const listWords = ["apple","banana","cherry"];

const motElement = document.getElementById("mot");
function changeMot() {
    const randomIndex = getRandomInt(listWords.length);
    const randomWord = listWords[randomIndex];
    motElement.textContent = randomWord;
}

changeMot();